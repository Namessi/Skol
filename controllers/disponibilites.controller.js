// controllers/disponibilite.controller.js

const Disponibilite = require("../models/disponibilite.model");

/** Ajouter une disponibilité */
exports.ajouterDisponibilite = (req, res) => {
  const { utilisateur_id, jour, heure_debut, heure_fin } = req.body;
  if (!utilisateur_id || !jour || !heure_debut || !heure_fin) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  Disponibilite.ajouter({ utilisateur_id, jour, heure_debut, heure_fin }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de l'ajout.", erreur: err });
    res.status(201).json({ message: "Disponibilité ajoutée.", id: result.insertId });
  });
};

/** Récupérer les disponibilités d’un utilisateur */
exports.getDisponibilites = (req, res) => {
  const { utilisateur_id } = req.params;
  Disponibilite.getByUtilisateur(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(result);
  });
};

/** Supprimer une disponibilité */
exports.supprimerDisponibilite = (req, res) => {
  const { id } = req.params;
  Disponibilite.supprimer(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Disponibilité supprimée." });
  });
};
