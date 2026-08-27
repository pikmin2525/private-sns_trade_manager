export const baseColumns = `
    created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_flg INTEGER NOT NULL DEFAULT 0
`;