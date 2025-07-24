// models/superlike.model.js

const db = require("../config/db");

const Superlike = {
  /**
   * Enregistrer un superlike
   */
  creer: (data, callback) => {
    const sql = `
      INSERT INTO superlikes (utilisateur_id, cible_id, date)
      VALUES (?, ?, NOW())
    `;
    db.query(sql, [data.utilisateur_id, data.cible_id], callback);
  },

  /**
   * Vérifier si un superlike existe déjà
   */
  existeDeja: (utilisateur_id, cible_id, callback) => {
    const sql = "SELECT * FROM superlikes WHERE utilisateur_id = ? AND cible_id = ?";
    db.query(sql, [utilisateur_id, cible_id], callback);
  },

  /**
   * Récupérer les superlikes donnés par l’utilisateur
   */
  getParUtilisateur: (utilisateur_id, callback) => {
    const sql = "SELECT * FROM superlikes WHERE utilisateur_id = ?";
    db.query(sql, [utilisateur_id], callback);
  }
};

module.exports = Superlike;
