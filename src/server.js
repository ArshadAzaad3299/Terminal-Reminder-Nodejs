const express = require("express");
const logger = require("./utils/logger");
const {
  logWarning,
  logWarningImp,
  logInfoImp,
} = require("./utils/consoleLogger.js");

const app = express();

const server = app.listen(8090, () => {
  logger.info(`Welcome ROOT -> Listening to port => 8090`);
});

function sitHabit() {
  logWarningImp(`Sit Straight`, "root");
}

function takeBreak() {
  logInfoImp(`Take a Break`, "root");
}

setInterval(sitHabit, 1200000);
setInterval(takeBreak, 3900000);
