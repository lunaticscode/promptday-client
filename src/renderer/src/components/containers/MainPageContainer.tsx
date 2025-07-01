import cls from '@renderer/utils/className'
import Calendar from '../common/Calendar'
// import Tabs from '../common/Tabs'
import './styles/main.container.css'

const PREFIX_CLS = 'mainpage-container'
const headerCls = cls(PREFIX_CLS, 'header')
const calendarModeCls = cls(PREFIX_CLS, 'calendar-modes')
const addEventCls = cls(PREFIX_CLS, 'add-event')
const contentCls = cls(PREFIX_CLS, 'content')
const calendarCls = cls(PREFIX_CLS, 'calendar')

const MainPageContainer = () => {
  return (
    <>
      <div className={headerCls}>
        <div className={calendarModeCls}></div>
        <div className={addEventCls}>
          <button>Add Event</button>
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
