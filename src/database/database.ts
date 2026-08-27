import Database from "better-sqlite3";
import {
    createSocialServicesTable,
    createContentsTable,
} from "./tables/index.js";

const db = new Database("sns_trade_manager.db");

db.pragma("foreign_keys = ON");

db.exec(createSocialServicesTable);
db.exec(createContentsTable);

export default db;