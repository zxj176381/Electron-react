const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //弹出的窗口有无边框,默认为有
    // frame:false,
    show: false,
    backgroundColor: '#586148',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
    frame: false,
  });

  // 加载应用的index.html。
  //mainWindow.loadFile('index.html')

  //判断是否是开发模式
  if (mode === 'dev') {
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.webContents.on('did-finish-load', () => {});
  mainWindow.webContents.on('dom-ready', () => {});
  mainWindow.once('ready-to-show', function () {
    mainWindow.show();
  });
}

// 当电子完成时，这个方法将被调用
// 初始化并准备好创建浏览器窗口。
// 一些api只能在此事件发生后使用
// app.whenReady().then(createWindow)
app.on('ready', () => {
  createWindow();
});

// 当所有窗口关闭时退出。
app.on('window-all-closed', function () {
  // 在macOS上，应用程序和它们的菜单栏是常见的
  // 保持活跃，直到用户使用Cmd + Q显式退出

  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // 在macOS中重新创建一个窗口是很常见的
  // 点击dock图标，没有其他窗口打开。
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// 在这个文件中，你可以包含应用程序的其他特定主进程代码。您也可以将它们放在单独的文件中，并在这里要求它们。
