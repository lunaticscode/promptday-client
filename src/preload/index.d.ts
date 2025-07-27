import { ElectronAPI } from '@electron-toolkit/preload'
import { rendererIpc } from '../main/ipc'
declare global {
  interface Window {
    electron: ElectronAPI
    api: typeof rendererIpc
  }
}
