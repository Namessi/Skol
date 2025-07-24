// routes/traduction.routes.js

const express = require("express");
const router = express.Router();
const traductionController = require("../controllers/traduction.controller");

// Ajouter une traduction
router.post("/", traductionController.ajouterTraduction);

// Obtenir les traductions par langue
router.get("/:langue_id", traductionController.getTraductionsParLangue);

// Supprimer une traduction
router.delete("/:id", traductionController.supprimerTraduction);

module.exports = router;
