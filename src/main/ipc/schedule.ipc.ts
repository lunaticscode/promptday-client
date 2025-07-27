import { ipcMain, ipcRenderer, WebContents } from 'electron'
import { Schedule } from '../../shared/types/schedule.type'
import { IPC_EVENTS } from '../consts/event.const'
import logging from '../helpers/logging.helper'
import { getScheudleDataFromPrompt } from '../utils/llm'

/**********************************************************/
// main::response(-> renderer)
const responseScheduleList = (sender: WebContents, schedules: Schedule[]) => {
  sender.send(IPC_EVENTS.SCHEDULE_EVENTS.ON_SCHEUDLE_LIST, schedules)
}

// const responseExtractSchedule = (sender: WebContents, result) => {
//   sender.send(IPC_EVENTS.SCHEDULE_EVENTS.ON_EXTRACT_SCHEDULE, result)
// }

// main::on(from renderer)
const handleRequestScheduleList = () => {
  ipcMain.on(IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_SCHEDULE_LIST, ({ sender }, startDate, endDate) => {
    logging(
      IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_SCHEDULE_LIST,
      'startDate, endDate => ',
      startDate,
      endDate
    )
    // schedules :: get schedules between startDate and endDate from db
    const schedules = []
    responseScheduleList(sender, schedules)
  })
}

const handleRequestSchedule = () => {}

const handleRequestInsertSchedule = () => {}

const handleRequestExtractSchedule = () => {
  ipcMain.on(IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_EXTRACT_SCHEDULE, async ({ sender }, prompt) => {
    console.log(prompt)
    const result = await getScheudleDataFromPrompt(prompt)
    // responseExtractSchedule(sender, result)
    sender.send(result ?? '')
  })
}

export const scheduleMainIpc = {
  handleRequestScheduleList,
  handleRequestInsertSchedule,
  handleRequestSchedule,
  handleRequestExtractSchedule
}

/**********************************************************/
// renderer:request(-> ipc)
const requestScheduleList = (startDate: Date, endDate: Date) => {
  ipcRenderer.send(IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_SCHEDULE_LIST, startDate, endDate)
}

const requestSchedule = (date: Date) => {}

const requestInsertSchedule = () => {}

const requestExtractSchedule = (prompt: string) => {
  console.log({ prompt })
  ipcRenderer.send(IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_EXTRACT_SCHEDULE, prompt)
}

// renderer::on(from main)
const onScheduleList = () => {}

const onExtractSchedule = (callback: (result: any) => void) => {
  ipcRenderer.on(IPC_EVENTS.SCHEDULE_EVENTS.ON_EXTRACT_SCHEDULE, (_, data) => {
    callback(data)
  })
}

export const scheduleRendererIpc = {
  requestScheduleList,
  requestSchedule,
  requestInsertSchedule,
  requestExtractSchedule,
  onScheduleList,
  onExtractSchedule
}
