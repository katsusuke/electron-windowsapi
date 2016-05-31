const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let win;

var FFI = require('ffi');
function TEXT(text){
   return new Buffer(text, 'ucs2').toString('binary');
}

var user32 = new FFI.Library('user32', {
   'MessageBoxW': [
      'int32', [ 'int32', 'string', 'string', 'int32' ]
   ]
});

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
  var OK_or_Cancel = user32.MessageBoxW(
     0, TEXT('I am Node.JS!'), TEXT('Hello, World!'), 1
  );
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'dawin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
