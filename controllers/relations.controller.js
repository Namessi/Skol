// controllers/relation.controller.js

const Relation = require("../models/relation.model");

/**
 * Créer une relation entre deux utilisateurs (ami, bloqué, etc.)
 */
exports.creerRelation = (req, res) => {
  const utilisateur_id = req.user.id;
  const { cible_id, type, statut } = req.body;

  if (!cible_id || !type || !statut) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  const data = {
    utilisateur_id,
    cible_id,
    type,
    statut,
  };

  Relation.creer(data, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création de la relation.", erreur: err });
    res.status(201).json({ message: "Relation créée avec succès." });
  });
};

/**
 * Obtenir toutes les relations d’un utilisateur connecté
 */
exports.getRelations = (req, res) => {
  const utilisateur_id = req.user.id;

  Relation.getByUtilisateur(utilisateur_id, (err, relations) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération des relations.", erreur: err });
    res.status(200).json(relations);
  });
};

/**
 * Supprimer une relation entre deux utilisateurs
 */
exports.supprimerRelation = (req, res) => {
  const utilisateur_id = req.user.id;
  const { cible_id } = req.params;

  if (!cible_id) {
    return res.status(400).json({ message: "L'identifiant de la cible est requis." });
  }

  Relation.supprimer(utilisateur_id, cible_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression.", erreur: err });
    res.status(200).json({ message: "Relation supprimée avec succès." });
  });
};
