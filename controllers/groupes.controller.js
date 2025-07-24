// controllers/groupe.controller.js

const Groupe = require("../models/groupe.model");

/** Créer un groupe */
exports.creerGroupe = (req, res) => {
  const { nom, description, createur_id } = req.body;
  if (!nom || !createur_id) return res.status(400).json({ message: "Nom et créateur requis." });

  Groupe.creer({ nom, description, createur_id }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur création groupe.", erreur: err });
    res.status(201).json({ message: "Groupe créé.", id: result.insertId });
  });
};

/** Obtenir tous les groupes */
exports.getGroupes = (req, res) => {
  Groupe.getAll((err, result) => {
    if (err) return res.status(500).json({ message: "Erreur récupération groupes.", erreur: err });
    res.json(result);
  });
};

/** Supprimer un groupe */
exports.supprimerGroupe = (req, res) => {
  const { id } = req.params;
  Groupe.supprimer(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur suppression groupe.", erreur: err });
    res.json({ message: "Groupe supprimé." });
  });
};
