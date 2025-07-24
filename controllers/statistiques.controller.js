// controllers/statistique.controller.js

const Statistique = require("../models/statistique.model");

/**
 * @desc Enregistrer ou mettre à jour les statistiques de l’utilisateur
 * @route POST /api/statistiques
 * @access Auth
 */
exports.enregistrerStatistiques = (req, res) => {
  const utilisateur_id = req.user.id;
  const { nb_rencontres, nb_amis, nb_blocages } = req.body;

  if (nb_rencontres == null || nb_amis == null || nb_blocages == null) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires." });
  }

  Statistique.enregistrer({ utilisateur_id, nb_rencontres, nb_amis, nb_blocages }, (err) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    res.status(200).json({ message: "Statistiques mises à jour avec succès." });
  });
};

/**
 * @desc Récupérer les statistiques de l’utilisateur connecté
 * @route GET /api/statistiques
 * @access Auth
 */
exports.getStatistiques = (req, res) => {
  const utilisateur_id = req.user.id;

  Statistique.getByUtilisateur(utilisateur_id, (err, stats) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    res.status(200).json(stats[0] || {});
  });
};
