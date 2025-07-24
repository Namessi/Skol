// models/lieu.model.js

const db = require("../config/db");

const Lieu = {
  /** Ajouter un lieu */
  creer: (data, callback) => {
    const sql = "INSERT INTO lieux (nom, adresse, ville, latitude, longitude) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.nom, data.adresse, data.ville, data.latitude, data.longitude], callback);
  },

  /** Récupérer tous les lieux */
  getAll: (callback) => {
    db.query("SELECT * FROM lieux", callback);
  },

  /** Supprimer un lieu */
  supprimer: (id, callback) => {
    db.query("DELETE FROM lieux WHERE id = ?", [id], callback);
  },
};

module.exports = Lieu;
