import { app, BrowserWindow } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const win = new BrowserWindow();

  win.maximize();

  if (isDev) {
    win.loadURL('http://localhost:8080');
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    win.loadFile('index.html');
  }
}

app.on('ready', createWindow);
