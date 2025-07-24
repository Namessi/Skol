// controllers/invitation.controller.js

const Invitation = require("../models/invitation.model");

/**
 * Créer une nouvelle invitation
 */
exports.creerInvitation = (req, res) => {
  const { expediteur_id, destinataire_id, type_rdv, date_heure, statut } = req.body;

  if (!expediteur_id || !destinataire_id || !type_rdv || !date_heure || !statut) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  Invitation.creer({ expediteur_id, destinataire_id, type_rdv, date_heure, statut }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création de l'invitation.", erreur: err });
    res.status(201).json({ message: "Invitation envoyée avec succès." });
  });
};

/**
 * Récupérer toutes les invitations
 */
exports.getInvitations = (req, res) => {
  Invitation.getAll((err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération des invitations.", erreur: err });
    res.status(200).json(result);
  });
};

/**
 * Supprimer une invitation
 */
exports.supprimerInvitation = (req, res) => {
  const id = req.params.id;

  Invitation.supprimer(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression.", erreur: err });
    res.status(200).json({ message: "Invitation supprimée." });
  });
};
