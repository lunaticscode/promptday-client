import ipcScheduleHandler from './scheudle'
import { getLlamaSession } from '../utils/llm'
const ipcMainHandler = async () => {
  const { scheduleModelSession } = await getLlamaSession()
  ipcScheduleHandler(scheduleModelSession)
}
export default ipcMainHandler
