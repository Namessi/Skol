// routes/filtres.routes.js

const express = require("express");
const router = express.Router();
const filtreController = require("../controllers/filtre.controller");

// Créer un filtre
router.post("/ajouter", filtreController.creerFiltre);

// Obtenir les filtres d’un utilisateur
router.get("/:utilisateur_id", filtreController.getFiltresUtilisateur);

// Modifier un filtre
router.put("/modifier", filtreController.updateFiltre);

module.exports = router;
