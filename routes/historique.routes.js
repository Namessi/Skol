// routes/historique.routes.js

const express = require("express");
const router = express.Router();
const historiqueController = require("../controllers/historique.controller");
const auth = require("../middleware/auth.middleware");

// Créer une entrée d'historique
router.post("/", auth, historiqueController.creerHistorique);

// Récupérer toutes les entrées
router.get("/", auth, historiqueController.getHistoriques);

// Supprimer une entrée spécifique
router.delete("/:id", auth, historiqueController.supprimerHistorique);

module.exports = router;
