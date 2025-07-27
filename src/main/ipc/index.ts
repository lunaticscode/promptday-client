import { oauthMainIpc, oauthRendererIpc } from './oauth.ipc'
import { scheduleMainIpc, scheduleRendererIpc } from './schedule.ipc'
export const mainIpc = {
  ...oauthMainIpc,
  ...scheduleMainIpc
}

export const rendererIpc = {
  ...oauthRendererIpc,
  ...scheduleRendererIpc
}
