import { app, shell } from 'electron'
import { createServer, Server } from 'http'
import crypto from 'crypto'
import { URLSearchParams } from 'url'
import { GOOGLE_OAUTH_CLIENT_ID } from '../consts/oauth.const'
import logging from './logging.helper'

let server: Server | null = null
let hasRegisterExitEventListener = false

const cleanupServer = () => {
  if (server) {
    try {
      server.close((err) => {
        if (err) {
          console.log(err)
          logging.error('[oauth.helper] cleanup server failed.')
        } else {
          logging('[oauth.helper] Server closed via cleanup.')
          server = null
        }
      })
    } catch (e) {
      logging.error('[oauth.helper] Failed to close server on cleanup.', e)
    }
  }
}

function base64URLEncode(buffer: Buffer): string {
  return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function sha256(buffer: string): Buffer {
  return crypto.createHash('sha256').update(buffer).digest()
}

export const googleOauthExecutor = async () => {
  if (server) {
    cleanupServer()
  }

  if (!hasRegisterExitEventListener) {
    app.once('before-quit', cleanupServer)
    process.once('exit', cleanupServer)
    process.once('SIGINT', () => {
      cleanupServer()
      process.exit()
    })
  }

  logging('GOOGLE_OAUTH_CLIENT_ID', GOOGLE_OAUTH_CLIENT_ID)

  server = createServer()
  const scope = 'profile email'
  const codeVerifier = base64URLEncode(crypto.randomBytes(32))
  const codeChallenge = base64URLEncode(sha256(codeVerifier))
  let redirectUri = ''

  server?.on('request', () => async (req, res) => {
    const url = new URL(req.url!, `http://127.0.0.1`)
    const code = url.searchParams.get('code') ?? ''

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h2>✅ 인증 성공! 창을 닫아주세요.</h2>')

    // clearTimeout(timeout)
    // cleanup()

    // if (!code) return reject(new Error('No code received from Google'))

    try {
      const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_OAUTH_CLIENT_ID ?? '',
          code,
          code_verifier: codeVerifier,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri
        })
      })

      const tokens = await tokenRes.json()

      if (tokenRes.ok && tokens.access_token) {
        // resolve(tokens)
      } else {
        // reject(new Error(`Token exchange failed: ${JSON.stringify(tokens)}`))
      }
    } catch (err) {
      //   reject(err)
    }
  })

  const execAuthProcess = async () => {
    logging(redirectUri)
    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      new URLSearchParams({
        client_id: GOOGLE_OAUTH_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        access_type: 'offline'
      })
    console.log(authUrl)
    await shell.openExternal(authUrl)
  }

  const port = await new Promise<number>((resolve) => {
    server?.listen(0, () => {
      const address = server?.address()
      if (typeof address === 'object' && address?.port) {
        resolve(address.port)
        redirectUri = `http://127.0.0.1:${address.port}`
        execAuthProcess()
      }
    })
  })
  logging({ port })
}
