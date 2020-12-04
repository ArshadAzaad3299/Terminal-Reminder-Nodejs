/* eslint-disable no-console */
const chalk = require("chalk");
const logger = require("./logger");

const checkProd = () => {
  if (process.env.STAGING === "PRODUCTION") {
    return true;
  }
  return false;
};

// Loggers
module.exports.logErrorImp = (msg, dbName) => {
  if (!checkProd()) {
    logger.error(chalk.black.bgRed(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`ERROR -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};
module.exports.logError = (msg, dbName) => {
  if (!checkProd()) {
    logger.error(chalk.red(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`Error -> ${dbName ? `${dbName} ->` : ""}${msg}`);
  }
};
module.exports.logWarning = (msg, dbName) => {
  if (!checkProd()) {
    logger.warn(chalk.yellow(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`Warn -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};

module.exports.logWarningImp = (msg, dbName) => {
  if (!checkProd()) {
    logger.warn(chalk.black.bgYellow(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`WARN -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};

module.exports.logInfo = (msg, dbName) => {
  if (!checkProd()) {
    logger.debug(chalk.cyanBright(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`Info -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};
module.exports.logInfoImp = (msg, dbName) => {
  if (!checkProd()) {
    logger.debug(chalk.black.bgCyan(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`INFO -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};
module.exports.logSuccess = (msg, dbName) => {
  if (!checkProd()) {
    logger.info(chalk.greenBright(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`Success -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};
module.exports.logSuccessImp = (msg, dbName) => {
  if (!checkProd()) {
    logger.info(chalk.black.bgGreen(`${dbName ? `${dbName} -> ` : ""}${msg}`));
  } else {
    console.log(`SUCCESS -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};
module.exports.logMessage = (msg, dbName) => {
  if (!checkProd()) {
    console.log(
      chalk.black.bgMagenta(`${dbName ? `${dbName} -> ` : ""}${msg}`)
    );
  } else {
    console.log(`MSG -> ${dbName ? `${dbName} -> ` : ""}${msg}`);
  }
};
