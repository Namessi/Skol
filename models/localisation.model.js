// models/localisation.model.js

const db = require("../config/db");

const Localisation = {
  /** Ajouter une localisation */
  creer: (data, callback) => {
    const sql = "INSERT INTO localisations (utilisateur_id, latitude, longitude, last_seen) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.utilisateur_id, data.latitude, data.longitude, data.last_seen], callback);
  },

  /** Obtenir la localisation d'un utilisateur */
  getByUtilisateurId: (id, callback) => {
    const sql = "SELECT * FROM localisations WHERE utilisateur_id = ? ORDER BY last_seen DESC LIMIT 1";
    db.query(sql, [id], callback);
  },

  /** Mettre à jour la localisation */
  update: (data, callback) => {
    const sql = "UPDATE localisations SET latitude = ?, longitude = ?, last_seen = ? WHERE utilisateur_id = ?";
    db.query(sql, [data.latitude, data.longitude, data.last_seen, data.utilisateur_id], callback);
  },
};

module.exports = Localisation;
