// models/statistique.model.js

const db = require("../config/db");

const Statistique = {
  /**
   * Enregistrer ou mettre à jour une statistique utilisateur
   */
  enregistrer: (data, callback) => {
    const sql = `
      INSERT INTO statistiques (utilisateur_id, nb_rencontres, nb_amis, nb_blocages)
      VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        nb_rencontres = VALUES(nb_rencontres),
        nb_amis = VALUES(nb_amis),
        nb_blocages = VALUES(nb_blocages)
    `;
    db.query(sql, [data.utilisateur_id, data.nb_rencontres, data.nb_amis, data.nb_blocages], callback);
  },

  /**
   * Récupérer les statistiques d’un utilisateur
   */
  getByUtilisateur: (utilisateur_id, callback) => {
    const sql = "SELECT * FROM statistiques WHERE utilisateur_id = ?";
    db.query(sql, [utilisateur_id], callback);
  },
};

module.exports = Statistique;
