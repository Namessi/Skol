// models/admin.model.js

const db = require("../config/db");

const Admin = {
  /** Créer un administrateur */
  create: (admin, callback) => {
    const { utilisateur_id, niveau, date_nomination } = admin;
    const sql = "INSERT INTO admin (utilisateur_id, niveau, date_nomination) VALUES (?, ?, ?)";
    db.query(sql, [utilisateur_id, niveau, date_nomination], callback);
  },

  /** Récupérer tous les administrateurs */
  getAll: (callback) => {
    db.query("SELECT * FROM admin", callback);
  },

  /** Récupérer un administrateur par ID */
  getById: (id, callback) => {
    db.query("SELECT * FROM admin WHERE id = ?", [id], callback);
  },

  /** Mettre à jour un administrateur */
  update: (id, admin, callback) => {
    const { niveau, date_nomination } = admin;
    const sql = "UPDATE admin SET niveau = ?, date_nomination = ? WHERE id = ?";
    db.query(sql, [niveau, date_nomination, id], callback);
  },

  /** Supprimer un administrateur */
  delete: (id, callback) => {
    db.query("DELETE FROM admin WHERE id = ?", [id], callback);
  }
};

module.exports = Admin;
