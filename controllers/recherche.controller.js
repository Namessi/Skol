// controllers/recherche.controller.js

const Recherche = require("../models/recherche.model");

/**
 * Effectuer une recherche d'utilisateurs selon des critères :
 * - genre visé
 * - tranche d'âge
 * - ville
 */
exports.rechercherUtilisateurs = (req, res) => {
  const utilisateur_id = req.user.id; // supposé authentifié
  const { genre_vise, age_min, age_max, ville } = req.body;

  if (!age_min || !age_max) {
    return res.status(400).json({ message: "Veuillez spécifier une tranche d'âge." });
  }

  const criteres = {
    utilisateur_id,
    genre_vise,
    age_min,
    age_max,
    ville,
  };

  Recherche.lancer(criteres, (err, utilisateurs) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la recherche.", erreur: err });
    res.status(200).json(utilisateurs);
  });
};
