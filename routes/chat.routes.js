// routes/chat.routes.js

const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chat.controller");

// Envoyer un message
router.post("/envoyer", chatController.envoyerMessage);

// Récupérer les messages entre deux utilisateurs
router.get("/:id1/:id2", chatController.getMessagesEntreUtilisateurs);

// Supprimer un message
router.delete("/:id", chatController.supprimerMessage);

module.exports = router;
