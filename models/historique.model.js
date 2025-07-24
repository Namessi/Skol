// models/historique.model.js

const db = require("../config/db");

const Historique = {
  /** Créer une entrée d'historique */
  creer: (data, callback) => {
    const sql = `INSERT INTO historique (utilisateur_id, action, cible_type, cible_id, date_action)
                 VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [data.utilisateur_id, data.action, data.cible_type, data.cible_id, data.date_action], callback);
  },

  /** Récupérer l'historique complet */
  getAll: (callback) => {
    db.query("SELECT * FROM historique", callback);
  },

  /** Supprimer une entrée d'historique */
  supprimer: (id, callback) => {
    db.query("DELETE FROM historique WHERE id = ?", [id], callback);
  },
};

module.exports = Historique;
