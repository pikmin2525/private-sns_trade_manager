import { baseColumns } from "../baseColumns.js";

export const createTTradePartnersTable = `
CREATE TABLE IF NOT EXISTS t_trade_partners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    last_name CHAR(64) NOT NULL,
    first_name CHAR(64) NOT NULL,
    ${baseColumns}
);
`;