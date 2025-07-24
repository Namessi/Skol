// routes/localisations.routes.js

const express = require("express");
const router = express.Router();
const localisationController = require("../controllers/localisation.controller");

// Enregistrer ou mettre à jour une localisation
router.post("/enregistrer", localisationController.enregistrerLocalisation);

// Obtenir la dernière localisation d'un utilisateur
router.get("/:id", localisationController.getLocalisation);

module.exports = router;
