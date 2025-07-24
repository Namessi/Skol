// models/chat.model.js

const db = require("../config/db");

const Chat = {
  /** Envoyer un message */
  envoyerMessage: (message, callback) => {
    const sql = "INSERT INTO messages (expediteur_id, destinataire_id, contenu, date_envoi) VALUES (?, ?, ?, NOW())";
    db.query(sql, [message.expediteur_id, message.destinataire_id, message.contenu], callback);
  },

  /** Récupérer les messages entre deux utilisateurs */
  getMessagesEntreUtilisateurs: (id1, id2, callback) => {
    const sql = `
      SELECT * FROM messages
      WHERE (expediteur_id = ? AND destinataire_id = ?)
         OR (expediteur_id = ? AND destinataire_id = ?)
      ORDER BY date_envoi ASC`;
    db.query(sql, [id1, id2, id2, id1], callback);
  },

  /** Supprimer un message par ID */
  supprimerMessage: (id, callback) => {
    const sql = "DELETE FROM messages WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Chat;
