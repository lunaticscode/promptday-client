import db from '.'
import { ScheduleData } from '../../shared/types/ipc'

export const insertSchedule = (data: ScheduleData) => {
  const { title, content, startDate, endDate } = data
  const query = db.prepare(
    'INSERT INTO schedules (title, content, startDate, endDate) VALUES (?, ?)'
  )
  const info = query.run(title, content, startDate, endDate)
  console.log('info :: \n', info, 'info.changes :: \n', info.changes, '\n', info.lastInsertRowid)
  return info.lastInsertRowid
}

export function getSchedules() {
  const query = db.prepare('SELECT * FROM schedules ORDER BY date ASC')
  return query.all()
}
