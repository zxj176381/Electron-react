//所有Node.js api都可以在pre中使用
//它与Chrome扩展具有相同的沙箱。
const { contextBridge, ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

contextBridge.exposeInMainWorld(
  'electron',

  {
    min: () => ipcRenderer.send('min'),
    max: () => ipcRenderer.send('max'),
    close: () => ipcRenderer.send('close'),
    loginView: () => ipcRenderer.send('loginView'),
  }
);
