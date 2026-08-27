import { app, BrowserWindow } from "electron";
import path from "node:path";
import "../database/database.js";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  window.loadFile(
    path.join(app.getAppPath(), "src", "renderer", "index.html")
  );
};

app.whenReady().then(createWindow);