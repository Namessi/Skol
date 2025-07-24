// controllers/filtre.controller.js

const Filtre = require("../models/filtre.model");

/** Créer un filtre */
exports.creerFiltre = (req, res) => {
  const { utilisateur_id, genre, age_min, age_max, distance_max } = req.body;
  if (!utilisateur_id) return res.status(400).json({ message: "ID utilisateur requis." });

  Filtre.creer({ utilisateur_id, genre, age_min, age_max, distance_max }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur création filtre.", erreur: err });
    res.status(201).json({ message: "Filtre créé.", id: result.insertId });
  });
};

/** Obtenir les filtres d’un utilisateur */
exports.getFiltresUtilisateur = (req, res) => {
  const { utilisateur_id } = req.params;
  Filtre.getByUtilisateur(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur récupération filtres.", erreur: err });
    res.json(result);
  });
};

/** Modifier un filtre */
exports.updateFiltre = (req, res) => {
  const { utilisateur_id, genre, age_min, age_max, distance_max } = req.body;
  if (!utilisateur_id) return res.status(400).json({ message: "ID utilisateur requis." });

  Filtre.update({ utilisateur_id, genre, age_min, age_max, distance_max }, (err) => {
    if (err) return res.status(500).json({ message: "Erreur mise à jour filtre.", erreur: err });
    res.json({ message: "Filtre mis à jour." });
  });
};
