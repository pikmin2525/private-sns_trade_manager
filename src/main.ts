import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  window.loadURL("https://example.com");
};

app.whenReady().then(createWindow);