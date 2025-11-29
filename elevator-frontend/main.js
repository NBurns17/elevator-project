import { app, BrowserWindow } from 'electron';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import isDev from 'electron-is-dev';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let win;
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  let startURL;
  if(isDev) {
    startURL = 'http://localhost:5173';
  } else {
    startURL = `file://${join(__dirname, 'dist', 'index.html')}`;
  }
  win.loadURL(startURL);
  win.on('closed', () => (win = null));
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if(win === null) {
    createWindow();
  }
});