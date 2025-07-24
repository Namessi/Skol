// models/suggestion_ia.model.js

const db = require("../config/db");

const SuggestionIA = {
  /**
   * Enregistrer une suggestion générée par l’IA
   */
  enregistrer: (data, callback) => {
    const sql = `
      INSERT INTO suggestions_ia (utilisateur_id, suggestion, type, date)
      VALUES (?, ?, ?, NOW())
    `;
    db.query(sql, [data.utilisateur_id, data.suggestion, data.type], callback);
  },

  /**
   * Récupérer toutes les suggestions d’un utilisateur
   */
  getByUtilisateur: (utilisateur_id, callback) => {
    const sql = "SELECT * FROM suggestions_ia WHERE utilisateur_id = ? ORDER BY date DESC";
    db.query(sql, [utilisateur_id], callback);
  },
};

module.exports = SuggestionIA;
