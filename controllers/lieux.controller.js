// controllers/lieu.controller.js

const Lieu = require("../models/lieux.model");

/** Créer un lieu */
exports.creerLieu = (req, res) => {
  const { nom, adresse, ville, latitude, longitude } = req.body;

  if (!nom || !ville) {
    return res.status(400).json({ message: "Nom et ville sont requis." });
  }

  Lieu.creer({ nom, adresse, ville, latitude, longitude }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création du lieu.", erreur: err });
    res.status(201).json({ message: "Lieu créé avec succès.", id: result.insertId });
  });
};

/** Obtenir tous les lieux */
exports.getLieux = (req, res) => {
  Lieu.getAll((err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération des lieux.", erreur: err });
    res.json(result);
  });
};

/** Supprimer un lieu */
exports.supprimerLieu = (req, res) => {
  const { id } = req.params;

  Lieu.supprimer(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression du lieu.", erreur: err });
    res.json({ message: "Lieu supprimé avec succès." });
  });
};
