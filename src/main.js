'use strict';
var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;
var mainWindow = null;
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'data.db',
  autoload: true
});
const startUrl = process.env.ELECTRON_START_URL || url.format({
  pathname: path.join(__dirname, '/../build/index.html'),
  protocol: 'file:',
  slashes: true
});
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1280
  });
    BrowserWindow.addDevToolsExtension(
      'C:/Users/User.DEV34/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0'
    );
  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();
});

// Listen for async message from renderer process
ipcMain.on('async', (event, arg) => {
  // Print 1
  console.log(arg);
  db.insert(arg, function(err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
  });
//   event.sender.send('async-reply', 2);
});

ipcMain.on('find', (event, arg) => {
  // Print 1
  console.log(arg);
  db.find(arg, function(err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    event.sender.send('async-reply', docs);
  });
});

// Listen for sync message from renderer process
ipcMain.on('sync', (event, arg) => {
  // Print 3
  console.log(arg);
  // Send value synchronously back to renderer process
  event.returnValue = 4;
  // Send async message to renderer process
  mainWindow.webContents.send('ping', 5);
});

// Make method externaly visible
exports.pong = arg => {
  //Print 6
  console.log(arg);
};