import RUICalendar from '@hw-rui/calendar'
import cls from '@renderer/utils/className'
import './styles/index.css'
const calendarPrefixCls = 'pd-calendar'
const calendarModesCls = cls(calendarPrefixCls, 'modes')
const calendarCurrentCls = cls(calendarPrefixCls, 'current')
const calendarNavigatorCls = cls(calendarPrefixCls, 'navigator')
const calendarBodyCls = cls(calendarPrefixCls, 'body')

const Calendar = () => {
  return (
    <RUICalendar className={calendarPrefixCls}>
      <RUICalendar.Modes className={calendarModesCls} />
      <RUICalendar.Current className={calendarCurrentCls} />
      <RUICalendar.Navigator className={calendarNavigatorCls} />
      <RUICalendar.Body className={calendarBodyCls} />
    </RUICalendar>
  )
}
export default Calendar
