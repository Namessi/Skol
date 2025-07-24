// controllers/superlikes.controller.js

const Superlike = require("../models/superlike.model");

/**
 * @desc Créer un superlike
 * @route POST /api/superlikes
 * @access Auth
 */
exports.creerSuperlike = (req, res) => {
  const utilisateur_id = req.user.id;
  const { cible_id } = req.body;

  if (!cible_id) {
    return res.status(400).json({ message: "L'identifiant de la cible est requis." });
  }

  // Vérifier l'existence
  Superlike.existeDeja(utilisateur_id, cible_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la vérification.", error: err });

    if (result.length > 0) {
      return res.status(409).json({ message: "Superlike déjà envoyé à cet utilisateur." });
    }

    // Créer le superlike
    Superlike.creer({ utilisateur_id, cible_id }, (err2) => {
      if (err2) return res.status(500).json({ message: "Erreur lors de l'enregistrement.", error: err2 });

      res.status(201).json({ message: "Superlike envoyé avec succès." });
    });
  });
};

/**
 * @desc Récupérer les superlikes envoyés
 * @route GET /api/superlikes
 * @access Auth
 */
exports.getSuperlikes = (req, res) => {
  const utilisateur_id = req.user.id;

  Superlike.getParUtilisateur(utilisateur_id, (err, rows) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });

    res.status(200).json(rows);
  });
};
