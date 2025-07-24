// routes/blocage_signalement.routes.js

const express = require("express");
const router = express.Router();
const blocageSignalementController = require("../controllers/blocage_signalement.controller");

// Bloquer un utilisateur
router.post("/blocage", blocageSignalementController.creerBlocage);

// Signaler un utilisateur
router.post("/signalement", blocageSignalementController.creerSignalement);

// Récupérer les blocages d'un utilisateur
router.get("/blocages/:utilisateurId", blocageSignalementController.getBlocagesParUtilisateur);

// Récupérer les signalements d'un utilisateur
router.get("/signalements/:utilisateurId", blocageSignalementController.getSignalementsParUtilisateur);

// Supprimer un blocage
router.delete("/blocage/:id", blocageSignalementController.supprimerBlocage);

// Supprimer un signalement
router.delete("/signalement/:id", blocageSignalementController.supprimerSignalement);

module.exports = router;
