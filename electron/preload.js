const { contextBridge, ipcRenderer } = require("electron");
const {
	closeApp,
	minimizeApp,
	maxUnmaxWindow,
	reloadWindow,
	openDevTools,
} = require("./actions");

contextBridge.exposeInMainWorld("electronApi", {
	closeApp,
	minimizeApp,
	maxUnmaxWindow,
	reloadWindow,
	openDevTools,
	send: (channel, data) => {
		// whitelist channels
		let validChannels = ["toMain"];
		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data);
		}
	},
	receive: (channel, func) => {
		let validChannels = ["fromMain"];
		if (validChannels.includes(channel)) {
			// Deliberately strip event as it includes `sender`
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		}
	},
});
