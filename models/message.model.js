// models/message.model.js

const db = require("../config/db");

const Message = {
  /** Envoyer un message */
  creer: (data, callback) => {
    const sql = "INSERT INTO messages (expediteur_id, destinataire_id, contenu, type, date_envoi) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.expediteur_id, data.destinataire_id, data.contenu, data.type, data.date_envoi], callback);
  },

  /** Récupérer les messages entre deux utilisateurs */
  getConversation: (user1, user2, callback) => {
    const sql = `
      SELECT * FROM messages
      WHERE (expediteur_id = ? AND destinataire_id = ?) 
         OR (expediteur_id = ? AND destinataire_id = ?)
      ORDER BY date_envoi ASC
    `;
    db.query(sql, [user1, user2, user2, user1], callback);
  },

  /** Supprimer un message */
  supprimer: (id, callback) => {
    db.query("DELETE FROM messages WHERE id = ?", [id], callback);
  },
};

module.exports = Message;
