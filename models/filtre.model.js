// models/filtre.model.js

const db = require("../config/db");

const Filtre = {
  /** Créer un filtre personnalisé */
  creer: (data, callback) => {
    const sql = "INSERT INTO filtres (utilisateur_id, genre, age_min, age_max, distance_max) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [
      data.utilisateur_id,
      data.genre,
      data.age_min,
      data.age_max,
      data.distance_max
    ], callback);
  },

  /** Obtenir les filtres d’un utilisateur */
  getByUtilisateur: (utilisateur_id, callback) => {
    const sql = "SELECT * FROM filtres WHERE utilisateur_id = ?";
    db.query(sql, [utilisateur_id], callback);
  },

  /** Mettre à jour les filtres */
  update: (data, callback) => {
    const sql = `UPDATE filtres SET genre = ?, age_min = ?, age_max = ?, distance_max = ? WHERE utilisateur_id = ?`;
    db.query(sql, [
      data.genre,
      data.age_min,
      data.age_max,
      data.distance_max,
      data.utilisateur_id
    ], callback);
  },
};

module.exports = Filtre;
