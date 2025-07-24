// models/traduction.model.js

const db = require("../config/db");

const Traduction = {
  /** Ajouter une nouvelle traduction */
  creer: (data, callback) => {
    const sql = "INSERT INTO traductions (cle, texte, langue_id) VALUES (?, ?, ?)";
    db.query(sql, [data.cle, data.texte, data.langue_id], callback);
  },

  /** Récupérer toutes les traductions d'une langue */
  getParLangue: (langue_id, callback) => {
    const sql = "SELECT * FROM traductions WHERE langue_id = ?";
    db.query(sql, [langue_id], callback);
  },

  /** Supprimer une traduction */
  supprimer: (id, callback) => {
    db.query("DELETE FROM traductions WHERE id = ?", [id], callback);
  }
};

module.exports = Traduction;
