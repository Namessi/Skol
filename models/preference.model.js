// models/preference.model.js

const db = require("../config/db");

const Preference = {
  /** Créer ou mettre à jour les préférences utilisateur */
  sauvegarder: (utilisateur_id, donnees, callback) => {
    const sql = `REPLACE INTO preferences (utilisateur_id, tranche_age, genre_vise, distance_max) VALUES (?, ?, ?, ?)`;
    db.query(sql, [utilisateur_id, donnees.tranche_age, donnees.genre_vise, donnees.distance_max], callback);
  },

  /** Récupérer les préférences d’un utilisateur */
  getByUserId: (utilisateur_id, callback) => {
    db.query("SELECT * FROM preferences WHERE utilisateur_id = ?", [utilisateur_id], callback);
  },

  /** Supprimer les préférences */
  supprimer: (utilisateur_id, callback) => {
    db.query("DELETE FROM preferences WHERE utilisateur_id = ?", [utilisateur_id], callback);
  },
};

module.exports = Preference;
