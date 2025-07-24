// routes/disponibilite.routes.js

const express = require("express");
const router = express.Router();
const disponibiliteController = require("../controllers/disponibilite.controller");

// Ajouter une disponibilité
router.post("/ajouter", disponibiliteController.ajouterDisponibilite);

// Récupérer les disponibilités d’un utilisateur
router.get("/:utilisateur_id", disponibiliteController.getDisponibilites);

// Supprimer une disponibilité
router.delete("/:id", disponibiliteController.supprimerDisponibilite);

module.exports = router;
