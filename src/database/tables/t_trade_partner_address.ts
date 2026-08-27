import { baseColumns } from "../baseColumns.js";

export const createTTradePartnerAddressTable = `
CREATE TABLE IF NOT EXISTS t_trade_partner_address (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trade_partner_id INTEGER NOT NULL,
    postal_code char(7) NOT NULL,
    prefecture_cd tinyint(3) NOT NULL,
    address01 char(512) NOT NULL,
    address02 char(512) NOT NULL,
    ${baseColumns},

    FOREIGN KEY (trade_partner_id)
        REFERENCES t_trade_partners(id)
);
`;