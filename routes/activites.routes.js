// routes/activites.routes.js

const express = require("express");
const router = express.Router();
const activiteController = require("../controllers/activite.controller");

// Créer une activité
router.post("/activites", activiteController.creerActivite);

// Récupérer toutes les activités
router.get("/activites", activiteController.getToutesLesActivites);

// Récupérer une activité par ID
router.get("/activites/:id", activiteController.getActiviteParId);

// Mettre à jour une activité
router.put("/activites/:id", activiteController.mettreAJourActivite);

// Supprimer une activité
router.delete("/activites/:id", activiteController.supprimerActivite);

module.exports = router;
