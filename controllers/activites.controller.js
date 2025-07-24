// controllers/activite.controller.js

const Activite = require("../models/activite.model");

/**
 * Créer une activité
 */
exports.creerActivite = (req, res) => {
  const { utilisateur_id, type, description, date_activite } = req.body;
  if (!utilisateur_id || !type || !date_activite) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  Activite.create({ utilisateur_id, type, description, date_activite }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    }
    res.status(201).json({ message: "Activité créée.", id: result.insertId });
  });
};

/**
 * Obtenir toutes les activités
 */
exports.getToutesLesActivites = (req, res) => {
  Activite.getAll((err, activites) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    }
    res.status(200).json(activites);
  });
};

/**
 * Obtenir une activité par ID
 */
exports.getActiviteParId = (req, res) => {
  const id = req.params.id;
  Activite.getById(id, (err, activite) => {
    if (err) {
      return res.status(500).json({ message: "Erreur interne.", erreur: err });
    }
    if (activite.length === 0) {
      return res.status(404).json({ message: "Activité introuvable." });
    }
    res.status(200).json(activite[0]);
  });
};

/**
 * Mettre à jour une activité
 */
exports.mettreAJourActivite = (req, res) => {
  const id = req.params.id;
  const { type, description, date_activite } = req.body;

  Activite.update(id, { type, description, date_activite }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de mise à jour.", erreur: err });
    }
    res.status(200).json({ message: "Activité mise à jour." });
  });
};

/**
 * Supprimer une activité
 */
exports.supprimerActivite = (req, res) => {
  const id = req.params.id;
  Activite.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    }
    res.status(200).json({ message: "Activité supprimée." });
  });
};
