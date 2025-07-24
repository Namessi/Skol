// controllers/support.controller.js

const Support = require("../models/support.model");

/**
 * @desc Envoyer une demande de support
 * @route POST /api/support
 * @access Privé
 */
exports.envoyerDemande = (req, res) => {
  const utilisateur_id = req.user.id;
  const { sujet, message } = req.body;

  if (!sujet || !message) {
    return res.status(400).json({ message: "Sujet et message requis." });
  }

  Support.creer({ utilisateur_id, sujet, message }, (err, result) => {
    if (err) {
      console.error("Erreur lors de l’envoi de la demande de support :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(201).json({ message: "Demande envoyée avec succès." });
  });
};

/**
 * @desc Récupérer les demandes de l’utilisateur
 * @route GET /api/support
 * @access Privé
 */
exports.mesDemandes = (req, res) => {
  const utilisateur_id = req.user.id;

  Support.getParUtilisateur(utilisateur_id, (err, demandes) => {
    if (err) {
      console.error("Erreur lors de la récupération des demandes :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(200).json(demandes);
  });
};

/**
 * @desc Récupérer toutes les demandes (admin)
 * @route GET /api/support/toutes
 * @access Admin
 */
exports.toutesLesDemandes = (req, res) => {
  Support.getToutes((err, demandes) => {
    if (err) {
      console.error("Erreur lors de la récupération de toutes les demandes :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(200).json(demandes);
  });
};
