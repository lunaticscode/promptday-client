import db from '.'

const initializeSchema = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS "schedules" (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "title" TEXT NOT NULL,
      "content" TEXT,
      "startDate" TEXT NOT NULL,
      "endDate" TEXT
    )
  `)
}

export default initializeSchema
