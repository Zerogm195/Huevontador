const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    resizable: false,
    icon: path.join(__dirname, 'images/egg.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')  // <- Usaremos preload.js (seguro)
    }
  })

  win.loadFile('bienvenida.html')

  // 📡 Responde a los mensajes de botones:
  ipcMain.on('window-control', (event, action) => {
    if (action === 'minimize') win.minimize()
    if (action === 'maximize') {
      if (win.isMaximized()) {
        win.unmaximize()
      } else {
        win.maximize()
      }
    }
    if (action === 'close') win.close()
  })
}

app.whenReady().then(createWindow)


