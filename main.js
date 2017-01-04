const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
 let win
//   var windowd = [];
function createWindow () {
  win = new BrowserWindow({ frame : false, titleBarStyle: 'hidden'})
    // windowd.push(win);
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
        // console.log(windowd.length);
  win.show()
//  win.webContents.openDevTools()

  win.on('closed', () => {

    win = null
  })
}
app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
console.log("hello world")
