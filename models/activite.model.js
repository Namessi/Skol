// models/activite.model.js
const db = require("../config/db");

const Activite = {
  /** Récupère toutes les activités */
  getAll: (callback) => {
    db.query("SELECT * FROM activites", callback);
  },

  /** Récupère une activité par ID */
  getById: (id, callback) => {
    db.query("SELECT * FROM activites WHERE id = ?", [id], callback);
  },

  /** Crée une nouvelle activité */
  create: (data, callback) => {
    const { utilisateur_id, type, description, date_activite } = data;
    db.query(
      "INSERT INTO activites (utilisateur_id, type, description, date_activite) VALUES (?, ?, ?, ?)",
      [utilisateur_id, type, description, date_activite],
      callback
    );
  },

  /** Met à jour une activité */
  update: (id, data, callback) => {
    const { type, description, date_activite } = data;
    db.query(
      "UPDATE activites SET type = ?, description = ?, date_activite = ? WHERE id = ?",
      [type, description, date_activite, id],
      callback
    );
  },

  /** Supprime une activité */
  delete: (id, callback) => {
    db.query("DELETE FROM activites WHERE id = ?", [id], callback);
  },
};

module.exports = Activite;
