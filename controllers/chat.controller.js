// controllers/chat.controller.js

const Chat = require("../models/chat.model");

/** Envoyer un message */
exports.envoyerMessage = (req, res) => {
  const { expediteur_id, destinataire_id, contenu } = req.body;
  if (!expediteur_id || !destinataire_id || !contenu) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  Chat.envoyerMessage({ expediteur_id, destinataire_id, contenu }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de l'envoi du message.", erreur: err });
    res.status(201).json({ message: "Message envoyé avec succès.", id: result.insertId });
  });
};

/** Obtenir les messages entre deux utilisateurs */
exports.getMessagesEntreUtilisateurs = (req, res) => {
  const { id1, id2 } = req.params;
  Chat.getMessagesEntreUtilisateurs(id1, id2, (err, messages) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération des messages.", erreur: err });
    res.json(messages);
  });
};

/** Supprimer un message */
exports.supprimerMessage = (req, res) => {
  const { id } = req.params;
  Chat.supprimerMessage(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression du message.", erreur: err });
    res.json({ message: "Message supprimé." });
  });
};
