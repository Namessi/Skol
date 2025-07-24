// models/groupe.model.js

const db = require("../config/db");

const Groupe = {
  /** Créer un groupe */
  creer: (data, callback) => {
    const sql = "INSERT INTO groupes (nom, description, createur_id) VALUES (?, ?, ?)";
    db.query(sql, [data.nom, data.description, data.createur_id], callback);
  },

  /** Obtenir tous les groupes */
  getAll: (callback) => {
    db.query("SELECT * FROM groupes", callback);
  },

  /** Supprimer un groupe */
  supprimer: (id, callback) => {
    db.query("DELETE FROM groupes WHERE id = ?", [id], callback);
  },
};

module.exports = Groupe;
