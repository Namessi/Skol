// models/relation.model.js

const db = require("../config/db");

const Relation = {
  /** Créer une relation entre deux utilisateurs (amis, en attente, bloqué, etc.) */
  creer: (data, callback) => {
    const sql = `INSERT INTO relations (utilisateur_id, cible_id, type, statut) VALUES (?, ?, ?, ?)`;
    db.query(sql, [data.utilisateur_id, data.cible_id, data.type, data.statut], callback);
  },

  /** Récupérer les relations d’un utilisateur */
  getByUtilisateur: (id, callback) => {
    const sql = `
      SELECT r.*, u.nom, u.prenom, u.photo_profil
      FROM relations r
      JOIN utilisateurs u ON u.id = r.cible_id
      WHERE r.utilisateur_id = ?
    `;
    db.query(sql, [id], callback);
  },

  /** Supprimer une relation */
  supprimer: (utilisateur_id, cible_id, callback) => {
    const sql = `DELETE FROM relations WHERE utilisateur_id = ? AND cible_id = ?`;
    db.query(sql, [utilisateur_id, cible_id], callback);
  },
};

module.exports = Relation;
