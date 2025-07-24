// models/notification.model.js

const db = require("../config/db");

const Notification = {
  /** Créer une notification */
  creer: (data, callback) => {
    const sql = "INSERT INTO notifications (utilisateur_id, message, lu, date_envoi) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.utilisateur_id, data.message, data.lu, data.date_envoi], callback);
  },

  /** Récupérer les notifications d’un utilisateur */
  getByUserId: (utilisateur_id, callback) => {
    db.query("SELECT * FROM notifications WHERE utilisateur_id = ? ORDER BY date_envoi DESC", [utilisateur_id], callback);
  },

  /** Marquer une notification comme lue */
  marquerCommeLue: (id, callback) => {
    db.query("UPDATE notifications SET lu = 1 WHERE id = ?", [id], callback);
  },

  /** Supprimer une notification */
  supprimer: (id, callback) => {
    db.query("DELETE FROM notifications WHERE id = ?", [id], callback);
  },
};

module.exports = Notification;
