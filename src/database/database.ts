import Database from "better-sqlite3";
import {
    createTHistoriesTable,
    createTTradePartnerAddressTable,
    createTTradePartnersTable,
} from "./tables/index.js";

const db = new Database("sns_trade_manager.db");

const createTable = (tableName: string, sql: string) => {
    try {
        db.exec(sql);
    } catch (error) {
        console.error(`テーブル作成エラー: ${tableName}`);
        console.error(error);
        throw error;
    }
};

db.pragma("foreign_keys = ON");

createTable("t_histories", createTHistoriesTable);
createTable("t_trade_partner_address", createTTradePartnerAddressTable);
createTable("t_trade_partners", createTTradePartnersTable);

export default db;