// controllers/evenement.controller.js

const Evenement = require("../models/evenement.model");

/** Créer un événement */
exports.creerEvenement = (req, res) => {
  const { organisateur_id, titre, description, date, lieu } = req.body;

  if (!organisateur_id || !titre || !date || !lieu) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  Evenement.creer({ organisateur_id, titre, description, date, lieu }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    res.status(201).json({ message: "Événement créé.", id: result.insertId });
  });
};

/** Obtenir tous les événements */
exports.listeEvenements = (req, res) => {
  Evenement.getAll((err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(result);
  });
};

/** Supprimer un événement */
exports.supprimerEvenement = (req, res) => {
  const { id } = req.params;
  Evenement.supprimer(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Événement supprimé." });
  });
};
