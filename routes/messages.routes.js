// routes/messages.routes.js

const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");

// Envoyer un message
router.post("/envoyer", messageController.envoyerMessage);

// Récupérer la conversation entre deux utilisateurs
router.get("/conversation/:user1/:user2", messageController.getConversation);

// Supprimer un message
router.delete("/:id", messageController.supprimerMessage);

module.exports = router;
