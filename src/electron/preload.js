//所有Node.js api都可以在pre中使用
//它与Chrome扩展具有相同的沙箱。
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

const loadApi = [
  'electron', // 引入 electron
  'fs',
];

loadApi.map((item) => {
  global[item] = require(item);
});
