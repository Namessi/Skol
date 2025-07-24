// controllers/abonnement.controller.js

const Abonnement = require("../models/abonnement.model");

/**
 * Créer un nouvel abonnement
 */
exports.creerAbonnement = (req, res) => {
  const { utilisateur_id, type, date_debut, date_fin } = req.body;

  if (!utilisateur_id || !type || !date_debut || !date_fin) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  Abonnement.create({ utilisateur_id, type, date_debut, date_fin }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    res.status(201).json({ message: "Abonnement créé", id: result.insertId });
  });
};

/**
 * Récupérer tous les abonnements
 */
exports.getTousLesAbonnements = (req, res) => {
  Abonnement.getAll((err, abonnements) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    res.status(200).json(abonnements);
  });
};

/**
 * Supprimer un abonnement par ID
 */
exports.supprimerAbonnement = (req, res) => {
  const { id } = req.params;

  Abonnement.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Abonnement introuvable" });
    res.status(200).json({ message: "Abonnement supprimé" });
  });
};
