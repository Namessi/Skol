// routes/preferences.routes.js

const express = require("express");
const router = express.Router();
const preferenceController = require("../controllers/preference.controller");

// Créer ou mettre à jour les préférences
router.post("/:utilisateur_id", preferenceController.sauvegarderPreferences);

// Récupérer les préférences d’un utilisateur
router.get("/:utilisateur_id", preferenceController.getPreferences);

// Supprimer les préférences d’un utilisateur
router.delete("/:utilisateur_id", preferenceController.supprimerPreferences);

module.exports = router;
