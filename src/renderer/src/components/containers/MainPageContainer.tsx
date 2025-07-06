import cls from '@renderer/utils/className'
import Calendar from '../common/Calendar'
import './styles/main.container.css'
import { CHANNELS } from '@shared/channels'
// import { ScheduleData } from '@shared/types/ipc'

const PREFIX_CLS = 'mainpage-container'
const headerCls = cls(PREFIX_CLS, 'header')
const calendarModeCls = cls(PREFIX_CLS, 'calendar-modes')
const addEventCls = cls(PREFIX_CLS, 'add-event')
const contentCls = cls(PREFIX_CLS, 'content')
const calendarCls = cls(PREFIX_CLS, 'calendar')

const MainPageContainer = () => {
  const handleClickAddEvent = () => {
    const prompt =
      'I just got confirmation from the legal team, so we should aim to finalize the contract review meeting by 10:00 AM on Wednesday, August 14, before the new policy goes into effect.'
    window.electron.ipcRenderer.send(CHANNELS.SCHEDULE.ANALYZE, prompt)
  }
  return (
    <>
      <div className={headerCls}>
        <div className={calendarModeCls}></div>
        <div className={addEventCls}>
          <button onClick={handleClickAddEvent}>Add Event</button>
          {/* <button onClick={handleClickAddEvent}>Add Event</button> */}
        </div>
      </div>
      <div className={contentCls}>
        <div className={calendarCls}>
          <Calendar />
        </div>
      </div>
    </>
  )
}

export default MainPageContainer
