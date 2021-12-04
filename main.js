// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const http = require('http')

function request(pat)
{
var options = {
    host: '10.42.0.1',
    port: 8080,
    path: pat
  };
  
  http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
  
    res.on("data", function(chunk) {
      console.log("BODY: " + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

var w = screee.width;
console.log(w)
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  // and load the index.html of the app.
  mainWindow.loadFile('C:/Users/Traian/Desktop/lopihack/electron-quick-start-master/glassmorphism-login-form-tutorial-in-html-css/src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
