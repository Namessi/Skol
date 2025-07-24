// controllers/badges.controller.js

const Badge = require("../models/badges.model");

/** Créer un badge */
exports.creerBadge = (req, res) => {
  const badge = req.body;
  if (!badge.nom || !badge.description || !badge.type || !badge.critere) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  Badge.create(badge, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    res.status(201).json({ message: "Badge créé avec succès.", id: result.insertId });
  });
};

/** Récupérer tous les badges */
exports.getTousLesBadges = (req, res) => {
  Badge.getAll((err, badges) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(badges);
  });
};

/** Récupérer un badge par ID */
exports.getBadgeParId = (req, res) => {
  const id = req.params.id;
  Badge.getById(id, (err, badge) => {
    if (err) return res.status(500).json({ message: "Erreur serveur.", erreur: err });
    if (badge.length === 0) return res.status(404).json({ message: "Badge non trouvé." });
    res.json(badge[0]);
  });
};

/** Mettre à jour un badge */
exports.mettreAJourBadge = (req, res) => {
  const id = req.params.id;
  const badge = req.body;
  Badge.update(id, badge, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la mise à jour.", erreur: err });
    res.json({ message: "Badge mis à jour avec succès." });
  });
};

/** Supprimer un badge */
exports.supprimerBadge = (req, res) => {
  const id = req.params.id;
  Badge.delete(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression.", erreur: err });
    res.json({ message: "Badge supprimé avec succès." });
  });
};
