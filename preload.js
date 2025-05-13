const { contextBridge, ipcRenderer } = require('electron')

// 🔒 Exponemos una API segura a la ventana:
contextBridge.exposeInMainWorld('electronAPI', {
  windowControl: (action) => ipcRenderer.send('window-control', action)
})
