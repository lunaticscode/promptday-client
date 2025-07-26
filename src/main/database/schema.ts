import db from '.'

const initializeSchema = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS "schedules" (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "title" TEXT NOT NULL,
      "startDate" TEXT NOT NULL,
      "endDate" TEXT,
      "description" TEXT,
      "summary" TEXT,
      "dates" TEXT,
      "organizer" TEXT,
      "location" TEXT,
      "tags" TEXT,
    )
  `)
}

export default initializeSchema
