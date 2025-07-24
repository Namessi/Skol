// routes/evenements.routes.js

const express = require("express");
const router = express.Router();
const evenementController = require("../controllers/evenement.controller");

// Créer un événement
router.post("/ajouter", evenementController.creerEvenement);

// Voir tous les événements
router.get("/", evenementController.listeEvenements);

// Supprimer un événement
router.delete("/:id", evenementController.supprimerEvenement);

module.exports = router;
