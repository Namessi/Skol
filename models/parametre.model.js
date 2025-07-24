// models/parametre.model.js

const db = require("../config/db");

const Parametre = {
  /** Créer ou mettre à jour les paramètres d’un utilisateur */
  sauvegarder: (utilisateur_id, donnees, callback) => {
    const sql = `REPLACE INTO parametres (utilisateur_id, langue, theme, notifications_push) VALUES (?, ?, ?, ?)`;
    db.query(sql, [utilisateur_id, donnees.langue, donnees.theme, donnees.notifications_push], callback);
  },

  /** Obtenir les paramètres d’un utilisateur */
  getByUserId: (utilisateur_id, callback) => {
    db.query("SELECT * FROM parametres WHERE utilisateur_id = ?", [utilisateur_id], callback);
  },

  /** Supprimer les paramètres d’un utilisateur */
  supprimer: (utilisateur_id, callback) => {
    db.query("DELETE FROM parametres WHERE utilisateur_id = ?", [utilisateur_id], callback);
  },
};

module.exports = Parametre;
