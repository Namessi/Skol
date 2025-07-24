// routes/statistiques.routes.js

const express = require("express");
const router = express.Router();
const statistiqueController = require("../controllers/statistique.controller");
const auth = require("../middleware/auth.middleware"); // Protection par token

// Récupérer les statistiques de l’utilisateur connecté
router.get("/", auth, statistiqueController.getStatistiques);

// Enregistrer ou mettre à jour les statistiques
router.post("/", auth, statistiqueController.enregistrerStatistiques);

module.exports = router;
