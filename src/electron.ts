// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import sendMail from './handlers/sendMail';

const isDevelopmentMode = process.env.NODE_ENV === 'development';

function createWindow() {
  const window = new BrowserWindow({
    kiosk: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  window.removeMenu();

  window.webContents.openDevTools({ mode: 'detach' });

  if (isDevelopmentMode) {
    window.loadURL('http://localhost:8080');
  } else {
    window.loadFile(path.join(__dirname, 'index.html'));
  }
}

app.whenReady().then(() => {
  // eslint-disable-next-line no-console
  ipcMain.handle('send-mail', (_, { subject, body }) => sendMail(subject, body));
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
