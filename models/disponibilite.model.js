// models/disponibilite.model.js

const db = require("../config/db");

const Disponibilite = {
  /** Ajouter une disponibilité */
  ajouter: (dispo, callback) => {
    const sql = "INSERT INTO disponibilites (utilisateur_id, jour, heure_debut, heure_fin) VALUES (?, ?, ?, ?)";
    db.query(sql, [dispo.utilisateur_id, dispo.jour, dispo.heure_debut, dispo.heure_fin], callback);
  },

  /** Récupérer les disponibilités d’un utilisateur */
  getByUtilisateur: (utilisateur_id, callback) => {
    const sql = "SELECT * FROM disponibilites WHERE utilisateur_id = ?";
    db.query(sql, [utilisateur_id], callback);
  },

  /** Supprimer une disponibilité */
  supprimer: (id, callback) => {
    const sql = "DELETE FROM disponibilites WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Disponibilite;
