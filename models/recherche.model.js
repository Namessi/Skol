// models/recherche.model.js

const db = require("../config/db");

const Recherche = {
  /** Lancer une recherche d’utilisateurs selon des critères */
  lancer: (criteres, callback) => {
    let sql = `
      SELECT u.id, u.nom, u.prenom, u.genre, u.age, u.photo_profil
      FROM utilisateurs u
      INNER JOIN disponibilites d ON u.id = d.utilisateur_id
      WHERE u.id != ?
    `;
    const params = [criteres.utilisateur_id];

    if (criteres.genre_vise) {
      sql += " AND u.genre = ?";
      params.push(criteres.genre_vise);
    }

    if (criteres.age_min && criteres.age_max) {
      sql += " AND u.age BETWEEN ? AND ?";
      params.push(criteres.age_min, criteres.age_max);
    }

    if (criteres.ville) {
      sql += " AND u.ville = ?";
      params.push(criteres.ville);
    }

    db.query(sql, params, callback);
  },
};

module.exports = Recherche;
