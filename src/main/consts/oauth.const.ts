import { config } from 'dotenv'
config()

export const OAUTH_PROVIDERS = ['google'] as const
export const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID || ''
export const GOOGLE_OAUTH_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET || ''
