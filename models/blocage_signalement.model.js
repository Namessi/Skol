// models/blocage_signalement.model.js

const db = require("../config/db");

const BlocageSignalement = {
  /** Créer un blocage */
  creerBlocage: (blocage, callback) => {
    const sql = "INSERT INTO blocages (utilisateur_id, bloque_utilisateur_id, date_blocage) VALUES (?, ?, NOW())";
    db.query(sql, [blocage.utilisateur_id, blocage.bloque_utilisateur_id], callback);
  },

  /** Créer un signalement */
  creerSignalement: (signalement, callback) => {
    const sql = "INSERT INTO signalements (utilisateur_id, signale_utilisateur_id, raison, date_signalement) VALUES (?, ?, ?, NOW())";
    db.query(sql, [signalement.utilisateur_id, signalement.signale_utilisateur_id, signalement.raison], callback);
  },

  /** Récupérer tous les blocages d’un utilisateur */
  getBlocagesParUtilisateur: (utilisateurId, callback) => {
    const sql = "SELECT * FROM blocages WHERE utilisateur_id = ?";
    db.query(sql, [utilisateurId], callback);
  },

  /** Récupérer tous les signalements d’un utilisateur */
  getSignalementsParUtilisateur: (utilisateurId, callback) => {
    const sql = "SELECT * FROM signalements WHERE utilisateur_id = ?";
    db.query(sql, [utilisateurId], callback);
  },

  /** Supprimer un blocage */
  supprimerBlocage: (id, callback) => {
    const sql = "DELETE FROM blocages WHERE id = ?";
    db.query(sql, [id], callback);
  },

  /** Supprimer un signalement */
  supprimerSignalement: (id, callback) => {
    const sql = "DELETE FROM signalements WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = BlocageSignalement;
