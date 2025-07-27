const SCHEDULE_EVENT_PREFIX = 'schedule'
const OAUTH_EVENT_PREFIX = 'oauth'

const SCHEDULE_EVENTS = {
  REQUEST_SCHEDULE_LIST: `${SCHEDULE_EVENT_PREFIX}:schedule-list:request`,
  REQUEST_SCHEDULE: `${SCHEDULE_EVENT_PREFIX}:schedule-one:request`,
  REQUEST_EXTRACT_SCHEDULE: `${SCHEDULE_EVENT_PREFIX}:extract-schedule:request`,
  ON_SCHEUDLE_LIST: `${SCHEDULE_EVENT_PREFIX}:schedule-list:response`,
  ON_SCHEUDLE: `${SCHEDULE_EVENT_PREFIX}:schedule-one:response`,
  ON_EXTRACT_SCHEDULE: `${SCHEDULE_EVENT_PREFIX}:extract-schedule:response`
}

const OAUTH_EVENTS = {
  ON_OAUTH: `${OAUTH_EVENT_PREFIX}:signin:response`,
  REQUEST_OAUTH: `${OAUTH_EVENT_PREFIX}:signin:request`
}

export const IPC_EVENTS = {
  OAUTH_EVENTS,
  SCHEDULE_EVENTS
}
