// controllers/preference.controller.js

const Preference = require("../models/preference.model");

/** Enregistrer ou mettre à jour les préférences utilisateur */
exports.sauvegarderPreferences = (req, res) => {
  const utilisateur_id = req.params.utilisateur_id;
  const { tranche_age, genre_vise, distance_max } = req.body;

  if (!tranche_age || !genre_vise || distance_max === undefined) {
    return res.status(400).json({ message: "Données incomplètes." });
  }

  Preference.sauvegarder(utilisateur_id, { tranche_age, genre_vise, distance_max }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de l'enregistrement.", erreur: err });
    res.status(200).json({ message: "Préférences enregistrées." });
  });
};

/** Récupérer les préférences */
exports.getPreferences = (req, res) => {
  const utilisateur_id = req.params.utilisateur_id;

  Preference.getByUserId(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    if (result.length === 0) return res.status(404).json({ message: "Aucune préférence trouvée." });
    res.json(result[0]);
  });
};

/** Supprimer les préférences */
exports.supprimerPreferences = (req, res) => {
  const utilisateur_id = req.params.utilisateur_id;

  Preference.supprimer(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Préférences supprimées." });
  });
};
