// models/evaluation.model.js

const db = require("../config/db");

const Evaluation = {
  /** Créer une évaluation */
  creer: (evaluation, callback) => {
    const sql = "INSERT INTO evaluations (auteur_id, cible_id, note, commentaire, date) VALUES (?, ?, ?, ?, NOW())";
    db.query(sql, [
      evaluation.auteur_id,
      evaluation.cible_id,
      evaluation.note,
      evaluation.commentaire
    ], callback);
  },

  /** Récupérer les évaluations reçues par un utilisateur */
  getByUtilisateur: (cible_id, callback) => {
    const sql = "SELECT * FROM evaluations WHERE cible_id = ? ORDER BY date DESC";
    db.query(sql, [cible_id], callback);
  },

  /** Supprimer une évaluation */
  supprimer: (id, callback) => {
    const sql = "DELETE FROM evaluations WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Evaluation;
