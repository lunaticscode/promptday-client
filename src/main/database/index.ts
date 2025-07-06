import { app } from 'electron'
import { join } from 'node:path'
// https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md
import Database from 'better-sqlite3'
import { cwd } from 'node:process'
const dbPath = app.isPackaged
  ? join(process.resourcesPath, 'app-data.db')
  : join(cwd(), 'dev-db', 'app-data.db')
const db: Database.Database = new Database(dbPath)
db.pragma('journal_mode = WAL')
export default db
