// models/abonnement.model.js

const db = require("../config/db");

const Abonnement = {
  /**
   * Créer un nouvel abonnement dans la base de données
   */
  create: (data, callback) => {
    const { utilisateur_id, type, date_debut, date_fin } = data;
    const sql = "INSERT INTO abonnements (utilisateur_id, type, date_debut, date_fin) VALUES (?, ?, ?, ?)";
    db.query(sql, [utilisateur_id, type, date_debut, date_fin], callback);
  },

  /**
   * Récupérer tous les abonnements
   */
  getAll: (callback) => {
    const sql = "SELECT * FROM abonnements";
    db.query(sql, callback);
  },

  /**
   * Supprimer un abonnement par ID
   */
  delete: (id, callback) => {
    const sql = "DELETE FROM abonnements WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Abonnement;
