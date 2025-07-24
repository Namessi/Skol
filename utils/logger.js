// utils/logger.js

const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "..", "logs", "app.log");

/**
 * Ajoute une entrée dans le fichier de log
 * @param {string} message - Message à enregistrer
 */
function log(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  // Vérifie si le dossier 'logs' existe, sinon le crée
  const logsDir = path.dirname(logFile);
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error("Erreur lors de l’écriture dans le fichier de log :", err);
  });
}

module.exports = { log };
