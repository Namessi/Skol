// models/evenement.model.js

const db = require("../config/db");

const Evenement = {
  /** Créer un événement */
  creer: (data, callback) => {
    const sql = "INSERT INTO evenements (organisateur_id, titre, description, date, lieu) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [
      data.organisateur_id,
      data.titre,
      data.description,
      data.date,
      data.lieu
    ], callback);
  },

  /** Obtenir tous les événements */
  getAll: (callback) => {
    const sql = "SELECT * FROM evenements ORDER BY date DESC";
    db.query(sql, callback);
  },

  /** Supprimer un événement */
  supprimer: (id, callback) => {
    const sql = "DELETE FROM evenements WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Evenement;
