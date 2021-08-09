const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 800,
		show: false,
		frame: false,
		webPreferences: {
			nodeIntegration: false,
			enableRemoteModule: true,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js"),
		},
	});
	process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

	mainWindow.loadURL(
		!app.isPackaged
			? "http://localhost:3000"
			: url.format({
					pathname: path.join(__dirname, "../index.html"),
					protocol: "file:",
					slashes: true,
			  })
	);

	// Menu.setApplicationMenu(null);

	mainWindow.webContents.openDevTools();

	mainWindow.once("ready-to-show", () => {
		mainWindow.show();
	});

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
