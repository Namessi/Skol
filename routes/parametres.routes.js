// routes/parametres.routes.js

const express = require("express");
const router = express.Router();
const parametreController = require("../controllers/parametre.controller");

// Sauvegarder ou mettre à jour les paramètres
router.post("/:utilisateur_id", parametreController.sauvegarderParametres);

// Obtenir les paramètres d’un utilisateur
router.get("/:utilisateur_id", parametreController.getParametres);

// Supprimer les paramètres d’un utilisateur
router.delete("/:utilisateur_id", parametreController.supprimerParametres);

module.exports = router;
