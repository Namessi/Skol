// controllers/notification.controller.js

const Notification = require("../models/notification.model");

/** Créer une notification */
exports.creerNotification = (req, res) => {
  const { utilisateur_id, message, lu, date_envoi } = req.body;

  if (!utilisateur_id || !message || lu === undefined || !date_envoi) {
    return res.status(400).json({ message: "Données manquantes." });
  }

  Notification.creer({ utilisateur_id, message, lu, date_envoi }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    res.status(201).json({ message: "Notification créée.", id: result.insertId });
  });
};

/** Obtenir les notifications d’un utilisateur */
exports.getNotifications = (req, res) => {
  const { utilisateur_id } = req.params;

  Notification.getByUserId(utilisateur_id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(result);
  });
};

/** Marquer une notification comme lue */
exports.marquerLue = (req, res) => {
  const { id } = req.params;

  Notification.marquerCommeLue(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de mise à jour.", erreur: err });
    res.json({ message: "Notification marquée comme lue." });
  });
};

/** Supprimer une notification */
exports.supprimerNotification = (req, res) => {
  const { id } = req.params;

  Notification.supprimer(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    res.json({ message: "Notification supprimée." });
  });
};
