// routes/abonnements.routes.js

const express = require("express");
const router = express.Router();
const abonnementController = require("../controllers/abonnement.controller");

// Créer un nouvel abonnement
router.post("/abonnements", abonnementController.creerAbonnement);

// Récupérer tous les abonnements
router.get("/abonnements", abonnementController.getTousLesAbonnements);

// Supprimer un abonnement
router.delete("/abonnements/:id", abonnementController.supprimerAbonnement);

module.exports = router;
