// models/support.model.js

const db = require("../config/db");

const Support = {
  /** Enregistrer une nouvelle demande d'assistance */
  creer: (data, callback) => {
    const sql = "INSERT INTO support (utilisateur_id, sujet, message, date_envoi) VALUES (?, ?, ?, NOW())";
    db.query(sql, [data.utilisateur_id, data.sujet, data.message], callback);
  },

  /** Récupérer les demandes d’un utilisateur */
  getParUtilisateur: (utilisateur_id, callback) => {
    const sql = "SELECT * FROM support WHERE utilisateur_id = ?";
    db.query(sql, [utilisateur_id], callback);
  },

  /** Récupérer toutes les demandes (admin) */
  getToutes: (callback) => {
    db.query("SELECT * FROM support ORDER BY date_envoi DESC", callback);
  }
};

module.exports = Support;
