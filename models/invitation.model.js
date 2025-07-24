// models/invitation.model.js

const db = require("../config/db");

const Invitation = {
  /** Créer une invitation */
  creer: (data, callback) => {
    const sql = "INSERT INTO invitations (expediteur_id, destinataire_id, type_rdv, date_heure, statut) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.expediteur_id, data.destinataire_id, data.type_rdv, data.date_heure, data.statut], callback);
  },

  /** Récupérer toutes les invitations */
  getAll: (callback) => {
    db.query("SELECT * FROM invitations", callback);
  },

  /** Supprimer une invitation */
  supprimer: (id, callback) => {
    db.query("DELETE FROM invitations WHERE id = ?", [id], callback);
  },
};

module.exports = Invitation;
