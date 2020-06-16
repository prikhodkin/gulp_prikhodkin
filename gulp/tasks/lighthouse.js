import gulp from "gulp";
import path from "path";
import config from "../../lighthouse.config";
import fsN from 'fs';
import open from "open";
import serverN from 'browser-sync';
import del from "del";
import lighthouseN from "lighthouse";
import { write } from "lighthouse/lighthouse-cli/printer";
import reportGenerator from "lighthouse/lighthouse-core/report/report-generator";

const chromeLauncher = require('chrome-launcher');
const fs = fsN.promises;
const server = serverN.create();


// Тест LightHouse

// Получение html файлов
async function getNameHTMLFiles() {
  const files = await fs.readdir(config.buildPath)
  return files.filter(item => item.endsWith('.html'))
}

// Запуск сервера
function startServer() {
  return server.init({
    server: config.buildPath,
    port: config.lighthouse.PORT,
    notify: false,
    open: false,
    cors: true
  })
}

//Открытие хрома и запуск проверки
async function launchChromeAndRunLighthouse(url) {
  const chrome = await chromeLauncher.launch()
  config.lighthouse.chromeLauncherPort = chrome.port

  const result = await lighthouseN(url, {
    ...config.lighthouse.flags,
    port: config.lighthouse.chromeLauncherPort
  }, config.lighthouse.config)
  await chrome.kill()

  return result
}

//Запуск проверки
async function runLighthouse(fileName) {
  console.log(fileName)
  const result = await launchChromeAndRunLighthouse(`http://localhost:${config.lighthouse.PORT}/${fileName}`)
  await write(reportGenerator.generateReportHtml(result.lhr), 'html', path.join(config.lighthouse.reportPath, fileName))
}

gulp.task('lighthouse', async function(cb) {
  await del(config.lighthouse.reportPath)
  await fs.mkdir(config.lighthouse.reportPath)

  startServer()
  const files = await getNameHTMLFiles()

  try {
    for (const file of files) {
      await runLighthouse(file)
    }

    for (const file of files) {
      await open(path.join(config.lighthouse.reportPath, file))
    }
    cb()
    process.exit(0) //browser-sync API server.exit() do not work
  } catch (e) {
    cb(e.message)
    process.exit(1) //browser-sync API server.exit() do not work
  }
})
