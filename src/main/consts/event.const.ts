const SCHEDULE_EVENT_PREFIX = 'schedule'
const OAUTH_EVENT_PREFIX = 'oauth'

const SCHEDULE_EVENTS = {
  REQUEST_SCHEUDLE_LIST: `${SCHEDULE_EVENT_PREFIX}:scheudle-list:request`,
  REQUEST_SCHEUDLE: `${SCHEDULE_EVENT_PREFIX}:scheudle-one:request`,
  ON_SCHEUDLE_LIST: `${SCHEDULE_EVENT_PREFIX}:scheudle-list:response`,
  ON_SCHEUDLE: `${SCHEDULE_EVENT_PREFIX}:scheudle-one:response`
}

const OAUTH_EVENTS = {
  ON_OAUTH: `${OAUTH_EVENT_PREFIX}:signin:response`,
  REQUEST_OAUTH: `${OAUTH_EVENT_PREFIX}:signin:request`
}

export const IPC_EVENTS = {
  OAUTH_EVENTS,
  SCHEDULE_EVENTS
}
