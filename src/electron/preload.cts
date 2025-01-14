const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {

  // Send Data
  subscribeStatistics: (callback: (statistics: Stats) => void) => {
    electron.ipcRenderer.on("stats", (event, data: Stats) => {
      callback(data);
    });
  },
  getStaticData: () => electron.ipcRenderer.invoke("getData"),
} satisfies Window['electron']);
