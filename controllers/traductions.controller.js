// controllers/traduction.controller.js

const Traduction = require("../models/traduction.model");

/**
 * Ajouter une nouvelle traduction
 */
exports.ajouterTraduction = (req, res) => {
  const { cle, texte, langue_id } = req.body;
  if (!cle || !texte || !langue_id) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  Traduction.creer({ cle, texte, langue_id }, (err, result) => {
    if (err) {
      console.error("Erreur lors de l’ajout de la traduction :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(201).json({ message: "Traduction ajoutée avec succès." });
  });
};

/**
 * Récupérer les traductions par langue
 */
exports.getTraductionsParLangue = (req, res) => {
  const { langue_id } = req.params;

  Traduction.getParLangue(langue_id, (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des traductions :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(200).json(result);
  });
};

/**
 * Supprimer une traduction
 */
exports.supprimerTraduction = (req, res) => {
  const { id } = req.params;

  Traduction.supprimer(id, (err, result) => {
    if (err) {
      console.error("Erreur lors de la suppression de la traduction :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(200).json({ message: "Traduction supprimée." });
  });
};
