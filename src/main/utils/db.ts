import Database from 'better-sqlite3'
const db = new Database('test-sqlite.db')
db.pragma('journal_mode = WAL')
console.log(db)
