import { baseColumns } from "../baseColumns.js";

export const createTHistoriesTable = `
CREATE TABLE IF NOT EXISTS t_histories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trade_partner_id INTEGER NOT NULL,
    social_service_id tinyint(1) NOT NULL,
    content_id tinyint(1) NOT NULL,
    first_actor tinyint(1) NOT NULL,
    trade_type tinyint(1) NOT NULL,
    started_at datetime NULL,
    ended_at datetime NULL,
    remarks text NOT NULL,
    ${baseColumns},

    FOREIGN KEY (trade_partner_id)
        REFERENCES t_trade_partners(id)
);
`;