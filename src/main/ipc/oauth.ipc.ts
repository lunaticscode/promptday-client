import { ipcMain, ipcRenderer } from 'electron'
import { IPC_EVENTS } from '../consts/event.const'
import { googleOauthExecutor } from '../helpers/oauth.helper'
import { OauthProviders } from '../../shared/types/oauth.type'

/* ============================================================ */
/* ============================================================ */
//* main::send

const mapProviderToOauthExecutor: Record<OauthProviders, Function> = {
  google: googleOauthExecutor
}

//* main::on
const handleOauth = () => {
  ipcMain.on(IPC_EVENTS.OAUTH_EVENTS.REQUEST_OAUTH, ({ sender }, provider: OauthProviders) => {
    const oauthExecutor = mapProviderToOauthExecutor[provider]
    oauthExecutor()
  })
  // provider: OauthProviders
}

export const oauthMainIpc = {
  handleOauth
}

/* ============================================================ */
/* ============================================================ */
//* renderer::on

//* renderer::send
const requestOauth = (provider: OauthProviders) => {
  ipcRenderer.send(IPC_EVENTS.OAUTH_EVENTS.REQUEST_OAUTH, provider)
}

//* only renderer handler
export const oauthRendererIpc = {
  requestOauth
}
