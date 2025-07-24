// routes/suggestion_ia.routes.js

const express = require("express");
const router = express.Router();
const suggestionIAController = require("../controllers/suggestion_ia.controller");
const auth = require("../middleware/auth.middleware"); // Middleware de vérification du token

// Récupérer les suggestions IA de l'utilisateur connecté
router.get("/", auth, suggestionIAController.getSuggestions);

// Enregistrer une nouvelle suggestion générée par l'IA
router.post("/", auth, suggestionIAController.enregistrerSuggestion);

module.exports = router;
