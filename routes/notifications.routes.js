// routes/notifications.routes.js

const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");

// Créer une notification
router.post("/creer", notificationController.creerNotification);

// Récupérer les notifications d’un utilisateur
router.get("/:utilisateur_id", notificationController.getNotifications);

// Marquer une notification comme lue
router.patch("/lue/:id", notificationController.marquerLue);

// Supprimer une notification
router.delete("/:id", notificationController.supprimerNotification);

module.exports = router;
