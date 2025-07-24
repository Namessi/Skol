// routes/lieux.routes.js

const express = require("express");
const router = express.Router();
const lieuController = require("../controllers/lieu.controller");

// Créer un lieu
router.post("/ajouter", lieuController.creerLieu);

// Obtenir tous les lieux
router.get("/", lieuController.getLieux);

// Supprimer un lieu
router.delete("/:id", lieuController.supprimerLieu);

module.exports = router;
