// models/agenda.model.js

const db = require("../config/db");

const Agenda = {
  /** Créer un événement */
  create: (agenda, callback) => {
    const { utilisateur_id, titre, description, date_evenement, heure_debut, heure_fin, lieu } = agenda;
    const sql = `INSERT INTO agenda (utilisateur_id, titre, description, date_evenement, heure_debut, heure_fin, lieu)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [utilisateur_id, titre, description, date_evenement, heure_debut, heure_fin, lieu], callback);
  },

  /** Récupérer tous les événements */
  getAll: (callback) => {
    db.query("SELECT * FROM agenda", callback);
  },

  /** Récupérer un événement par ID */
  getById: (id, callback) => {
    db.query("SELECT * FROM agenda WHERE id = ?", [id], callback);
  },

  /** Mettre à jour un événement */
  update: (id, agenda, callback) => {
    const { titre, description, date_evenement, heure_debut, heure_fin, lieu } = agenda;
    const sql = `UPDATE agenda SET titre = ?, description = ?, date_evenement = ?, heure_debut = ?, heure_fin = ?, lieu = ?
                 WHERE id = ?`;
    db.query(sql, [titre, description, date_evenement, heure_debut, heure_fin, lieu, id], callback);
  },

  /** Supprimer un événement */
  delete: (id, callback) => {
    db.query("DELETE FROM agenda WHERE id = ?", [id], callback);
  }
};

module.exports = Agenda;
