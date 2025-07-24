// controllers/evaluation.controller.js

const Evaluation = require("../models/evaluation.model");

/** Créer une évaluation */
exports.creerEvaluation = (req, res) => {
  const { auteur_id, cible_id, note, commentaire } = req.body;

  if (!auteur_id || !cible_id || !note) {
    return res.status(400).json({ message: "Auteur, cible et note sont requis." });
  }

  Evaluation.creer({ auteur_id, cible_id, note, commentaire }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    res.status(201).json({ message: "Évaluation enregistrée.", id: result.insertId });
  });
};

/** Voir les évaluations reçues */
exports.getEvaluations = (req, res) => {
  const { utilisateur_id } = req.params;
  Evaluation.getByUtilisateur(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération.", erreur: err });
    res.json(result);
  });
};

/** Supprimer une évaluation */
exports.supprimerEvaluation = (req, res) => {
  const { id } = req.params;
  Evaluation.supprimer(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Évaluation supprimée." });
  });
};
