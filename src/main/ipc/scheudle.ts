import { ipcMain } from 'electron'
import { CHANNELS } from '../../shared/channels'
import { LlamaChatSession } from 'node-llama-cpp'
import { ScheduleData } from '../../shared/types/ipc'
import { insertSchedule } from '../database/queries'
import { getScheudleDataFromPrompt } from '../utils/llm'

const ipcScheduleHandler = (scheduleLlamaSession: LlamaChatSession) => {
  ipcMain.on(CHANNELS.SCHEDULE.ANALYZE, (event, data: string) => {
    console.log(scheduleLlamaSession)
    getScheudleDataFromPrompt(scheduleLlamaSession, data)
  })

  ipcMain.on(CHANNELS.SCHEDULE.ADD, (event, data: ScheduleData) => {
    console.log(event.senderFrame?.url, event.senderFrame)
    insertSchedule(data)
  })

  ipcMain.on(CHANNELS.SCHEDULE.READ, (event, data) => {
    console.log(data)
  })
}
export default ipcScheduleHandler
