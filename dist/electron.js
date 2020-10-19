require("reflect-metadata");
const { createConnection } = require("typeorm");
const { app, BrowserWindow } = require("electron");

function connectToDatabase() {
    createConnection({
        type: "sqlite",
        database: "./working_data.sq3",
        entities: [__dirname + "/src/app/entity/**/*.ts"],
        migrations: [__dirname + "/src/app/src/migration/**/*.ts"],
        subscribers: [__dirname + "/src/app/subscriber/**/*.ts"],
        synchronize: true,
    })
        .then((connection) => {
            console.log('connected!');
        })
        .catch((error) => console.log(error));
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile("index.html");
    win.webContents.openDevTools();
    connectToDatabase();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
