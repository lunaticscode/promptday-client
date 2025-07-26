import { oauthMainIpc, oauthRendererIpc } from './oauth.ipc'
import { scheduleRendererIpc } from './schedule.ipc'
export const mainIpc = {
  ...oauthMainIpc
}

export const rendererIpc = {
  ...oauthRendererIpc,
  ...scheduleRendererIpc
}
