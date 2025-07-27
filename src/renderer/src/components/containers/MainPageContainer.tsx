import cls from '@renderer/utils/className'
import Calendar from '../common/Calendar'
import './styles/main.container.css'
import { useEffect } from 'react'
// import { ScheduleData } from '@shared/types/ipc'

const PREFIX_CLS = 'mainpage-container'
const headerCls = cls(PREFIX_CLS, 'header')
const calendarModeCls = cls(PREFIX_CLS, 'calendar-modes')
const addEventCls = cls(PREFIX_CLS, 'add-event')
const contentCls = cls(PREFIX_CLS, 'content')
const calendarCls = cls(PREFIX_CLS, 'calendar')

const MainPageContainer = () => {
  const handleClickAddEvent = () => {
    const testPrompt =
      "Greetings,Please join us for the Cybersecurity Workshop on June 22, 2025, commencing at 9:00 AM in the Grand Ballroom. Kindly RSVP by June 21, 2025. We'll have insightful speakers, practical workshops, and networking opportunities. Participants will receive certificates and enjoy refreshments.Sincerely,The Event Team"
    window.api.requestExtractSchedule(testPrompt)
  }

  const handleResponseExtractSchedule = (result: any) => {
    console.log(result)
  }
  const setupListener = () => {
    window.api.onExtractSchedule(handleResponseExtractSchedule)
  }

  useEffect(() => {
    setupListener()
  }, [])
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
