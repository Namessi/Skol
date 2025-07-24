// controllers/message.controller.js

const Message = require("../models/message.model");

/** Envoyer un message */
exports.envoyerMessage = (req, res) => {
  const { expediteur_id, destinataire_id, contenu, type, date_envoi } = req.body;

  if (!expediteur_id || !destinataire_id || !contenu || !type || !date_envoi) {
    return res.status(400).json({ message: "Données incomplètes." });
  }

  Message.creer({ expediteur_id, destinataire_id, contenu, type, date_envoi }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de l'envoi.", erreur: err });
    res.status(201).json({ message: "Message envoyé avec succès.", id: result.insertId });
  });
};

/** Récupérer la conversation entre deux utilisateurs */
exports.getConversation = (req, res) => {
  const { user1, user2 } = req.params;

  Message.getConversation(user1, user2, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(result);
  });
};

/** Supprimer un message */
exports.supprimerMessage = (req, res) => {
  const { id } = req.params;

  Message.supprimer(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Message supprimé." });
  });
};
