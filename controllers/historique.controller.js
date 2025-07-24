// controllers/historique.controller.js

const Historique = require("../models/historique.model");

/**
 * Créer une nouvelle entrée d'historique
 */
exports.creerHistorique = (req, res) => {
  const data = {
    utilisateur_id: req.user.id,
    action: req.body.action,
    cible_type: req.body.cible_type,
    cible_id: req.body.cible_id,
    date_action: new Date(),
  };

  if (!data.action || !data.cible_type || !data.cible_id) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires." });
  }

  Historique.creer(data, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'enregistrement de l'historique :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(201).json({ message: "Historique enregistré avec succès" });
  });
};

/**
 * Récupérer tous les historiques
 */
exports.getHistoriques = (req, res) => {
  Historique.getAll((err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des historiques :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json(result);
  });
};

/**
 * Supprimer un historique par son ID
 */
exports.supprimerHistorique = (req, res) => {
  const id = req.params.id;
  Historique.supprimer(id, (err, result) => {
    if (err) {
      console.error("Erreur lors de la suppression :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Historique supprimé" });
  });
};
