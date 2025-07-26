import { ipcMain, ipcRenderer, WebContents } from 'electron'
import { Schedule } from '../../shared/types/schedule.type'
import { IPC_EVENTS } from '../consts/event.const'
import logging from '../helpers/logging.helper'

/**********************************************************/
// main::response(-> renderer)
const responseScheduleList = (sender: WebContents, schedules: Schedule[]) => {
  sender.send(IPC_EVENTS.SCHEDULE_EVENTS.ON_SCHEUDLE_LIST, schedules)
}

// main::on(from renderer)
const handleRequestScheduleList = () => {
  ipcMain.on(IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_SCHEUDLE_LIST, ({ sender }, startDate, endDate) => {
    logging(
      IPC_EVENTS.SCHEDULE_EVENTS.REQUEST_SCHEUDLE_LIST,
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

export const scheduleMainIpc = {
  handleRequestScheduleList,
  handleRequestInsertSchedule,
  handleRequestSchedule
}

/**********************************************************/
// renderer:request(-> ipc)
const requestScheduleList = (startDate: Date, endDate: Date) => {
  ipcRenderer.send('', startDate, endDate)
}

const requestSchedule = (date: Date) => {}

const requestInsertSchedule = () => {}
// renderer::on(from main)
const onScheduleList = () => {}

export const scheduleRendererIpc = {
  requestScheduleList,
  requestSchedule,
  requestInsertSchedule
}
