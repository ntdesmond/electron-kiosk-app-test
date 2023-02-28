import { app, BrowserWindow } from 'electron';

const isDevelopmentMode = process.env.NODE_ENV === 'development';

function createWindow() {
  const window = new BrowserWindow({
    kiosk: true,
    autoHideMenuBar: true,
  });

  window.removeMenu();

  if (isDevelopmentMode) {
    window.loadURL('http://localhost:8080');
    window.webContents.openDevTools({ mode: 'detach' });
  } else {
    window.loadFile('index.html');
  }
}

app.on('ready', createWindow);
