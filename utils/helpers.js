// utils/helpers.js

/**
 * Fonction pour formater une date au format YYYY-MM-DD HH:MM:SS
 */
function formatDate(date = new Date()) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

/**
 * Génère un code aléatoire alphanumérique
 * @param {number} length - Longueur souhaitée du code
 */
function generateRandomCode(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

module.exports = {
  formatDate,
  generateRandomCode,
};
