// controllers/parametre.controller.js

const Parametre = require("../models/parametre.model");

/** Enregistrer ou mettre à jour les paramètres utilisateur */
exports.sauvegarderParametres = (req, res) => {
  const utilisateur_id = req.params.utilisateur_id;
  const { langue, theme, notifications_push } = req.body;

  if (!langue || !theme || notifications_push === undefined) {
    return res.status(400).json({ message: "Données manquantes." });
  }

  Parametre.sauvegarder(utilisateur_id, { langue, theme, notifications_push }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la sauvegarde.", erreur: err });
    res.status(200).json({ message: "Paramètres enregistrés." });
  });
};

/** Obtenir les paramètres d’un utilisateur */
exports.getParametres = (req, res) => {
  const utilisateur_id = req.params.utilisateur_id;

  Parametre.getByUserId(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    if (result.length === 0) return res.status(404).json({ message: "Aucun paramètre trouvé." });
    res.json(result[0]);
  });
};

/** Supprimer les paramètres */
exports.supprimerParametres = (req, res) => {
  const utilisateur_id = req.params.utilisateur_id;

  Parametre.supprimer(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Paramètres supprimés." });
  });
};
