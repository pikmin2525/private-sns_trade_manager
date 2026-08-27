import { baseColumns } from "../baseColumns.js";

export const createSocialServicesTable = `
CREATE TABLE IF NOT EXISTS m_social_services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_name CHAR(256) NOT NULL,
    domain CHAR(2048) NOT NULL,
    ${baseColumns}
);
`;