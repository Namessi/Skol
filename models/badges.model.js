// models/badges.model.js

const db = require("../config/db");

const Badge = {
  /** Créer un badge */
  create: (badge, callback) => {
    const sql = "INSERT INTO badges (nom, description, type, critere) VALUES (?, ?, ?, ?)";
    db.query(sql, [badge.nom, badge.description, badge.type, badge.critere], callback);
  },

  /** Récupérer tous les badges */
  getAll: (callback) => {
    const sql = "SELECT * FROM badges";
    db.query(sql, callback);
  },

  /** Récupérer un badge par ID */
  getById: (id, callback) => {
    const sql = "SELECT * FROM badges WHERE id = ?";
    db.query(sql, [id], callback);
  },

  /** Mettre à jour un badge */
  update: (id, badge, callback) => {
    const sql = "UPDATE badges SET nom = ?, description = ?, type = ?, critere = ? WHERE id = ?";
    db.query(sql, [badge.nom, badge.description, badge.type, badge.critere, id], callback);
  },

  /** Supprimer un badge */
  delete: (id, callback) => {
    const sql = "DELETE FROM badges WHERE id = ?";
    db.query(sql, [id], callback);
  }
};

module.exports = Badge;
