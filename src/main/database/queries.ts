import db from '.'
import { Schedule } from '../../shared/types/schedule.type'

export const insertSchedule = (data: Schedule) => {
  const { title, content, startDate, endDate } = data

  const { description, summary, location, organizer, tags, dates } = content ?? {
    description: '',
    summary: '',
    location: '',
    organizer: '',
    tags: [],
    dates: []
  }

  const paramsObject = {
    title,
    startDate,
    endDate: endDate ?? startDate,
    description,
    summary,
    location,
    organizer,
    tags: JSON.stringify(tags),
    dates: JSON.stringify(dates)
  }

  const paramKeys = Object.keys(paramsObject)
  const paramValues = Object.values(paramsObject)

  const queryRaw = getInsertQuery('schedules', paramKeys)
  console.log(queryRaw)

  const query = db.prepare(queryRaw)
  const info = query.run(paramValues)

  console.log('info :: \n', info, 'info.changes :: \n', info.changes, '\n', info.lastInsertRowid)
  return info.lastInsertRowid
}

export function getSchedules() {
  const query = db.prepare('SELECT * FROM schedules ORDER BY date ASC')
  return query.all()
}
