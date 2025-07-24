// controllers/localisation.controller.js

const Localisation = require("../models/localisation.model");

/** Créer ou mettre à jour une localisation */
exports.enregistrerLocalisation = (req, res) => {
  const { utilisateur_id, latitude, longitude, last_seen } = req.body;

  if (!utilisateur_id || !latitude || !longitude || !last_seen) {
    return res.status(400).json({ message: "Données incomplètes." });
  }

  // Tentative de mise à jour
  Localisation.update({ utilisateur_id, latitude, longitude, last_seen }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la mise à jour.", erreur: err });

    // Si aucune ligne affectée, on insère
    if (result.affectedRows === 0) {
      Localisation.creer({ utilisateur_id, latitude, longitude, last_seen }, (err2) => {
        if (err2) return res.status(500).json({ message: "Erreur lors de l'insertion.", erreur: err2 });
        res.status(201).json({ message: "Localisation enregistrée." });
      });
    } else {
      res.json({ message: "Localisation mise à jour." });
    }
  });
};

/** Obtenir la localisation la plus récente d’un utilisateur */
exports.getLocalisation = (req, res) => {
  const { id } = req.params;

  Localisation.getByUtilisateurId(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(result[0] || {});
  });
};
