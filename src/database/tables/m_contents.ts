import { baseColumns } from "../baseColumns.js";

export const createContentsTable = `
CREATE TABLE IF NOT EXISTS m_contents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_name CHAR(256) NOT NULL,
    ${baseColumns}
);
`;