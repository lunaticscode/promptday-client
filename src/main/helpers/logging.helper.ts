type LoggingLevels = 'error' | 'warn' | 'success'
type Logging = ((...message: any[]) => void) & Record<LoggingLevels, (...message: any[]) => void>

const logging: Logging = (...message: any[]) => console.log(`✓`, ...message)

logging.error = (...message: any[]) => console.error(`❌`, ...message)
logging.warn = (...message: any[]) => console.warn(`⚠️`, ...message)
logging.success = (...message: any[]) => console.log(`✅️`, ...message)

export default logging
