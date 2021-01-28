const { BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

function createWindow(width = 930, height = 800, frame = false) {
  const window = new BrowserWindow({
    width: width + 355,
    height,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    frame,
  });

  //判断是否是开发模式
  if (mode === 'development') {
    window.loadURL(`http://localhost:3000/`);
    window.webContents.openDevTools();
  } else {
    window.loadURL(
      url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  ipcMain.on('min', (e) => window.minimize());
  ipcMain.on('max', (e) => {
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  });
  ipcMain.on('close', (e) => window.close());
  window.webContents.on('did-finish-load', () => {});
  window.webContents.on('dom-ready', () => {});
  window.once('ready-to-show', function () {
    window.show();
  });
}

module.exports = createWindow;
