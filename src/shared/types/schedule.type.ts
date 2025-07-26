export type ScheduleContentDateTypes = 'event' | 'deadline' | 'sub_event'
export type ScheduleContentDate = {
  /*
    {
      "type": "<event|deadline|sub_event>",
      "text": "<original phrase>",
      "iso": "<ISO-8601 date or range>"
    }
   */
  type: ScheduleContentDateTypes
  text: string
  iso: string
}

export type ScheduleContent = Partial<{
  description: string // content -> description
  summary: string // title -> summary
  location: string
  organizer: string
  tags: string[]
  dates: ScheduleContentDate
}>

export type Schedule = {
  title: string
  startDate: Date
  endDate?: Date
  content?: ScheduleContent
}
