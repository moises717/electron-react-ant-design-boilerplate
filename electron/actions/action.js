const { remote } = require("electron");

const getCurrentWindow = () => {
	return remote.getCurrentWindow();
};

const closeApp = (bw = getCurrentWindow()) => {
	bw.close();
};

const minimizeApp = (bw = getCurrentWindow()) => {
	bw.minimize();
};

const maxUnmaxWindow = (bw = getCurrentWindow()) => {
	if (bw.isMaximized()) {
		bw.unmaximize();
	} else {
		bw.maximize();
	}
};

const reloadWindow = (bw = getCurrentWindow()) => {
	bw.reload();
};

const openDevTools = (bw = getCurrentWindow()) => {
	bw.webContents.openDevTools();
};

const isFullScreen = (bw = getCurrentWindow()) => {
	return bw.isFullScreen();
};
module.exports = {
	closeApp,
	minimizeApp,
	maxUnmaxWindow,
	reloadWindow,
	openDevTools,
};
