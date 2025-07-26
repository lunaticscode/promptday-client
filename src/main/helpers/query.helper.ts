const getInsertQuery = (table: string, paramKeys: string[]) => {
  return `INSERT INTO ${table} (${paramKeys.join(', ')}) VALUES (${Array.from({ length: paramKeys.length }, () => '?').join(', ')})`
}
