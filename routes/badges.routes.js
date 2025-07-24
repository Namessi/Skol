// routes/badges.routes.js

const express = require("express");
const router = express.Router();
const badgeController = require("../controllers/badges.controller");

// Créer un badge
router.post("/", badgeController.creerBadge);

// Récupérer tous les badges
router.get("/", badgeController.getTousLesBadges);

// Récupérer un badge par ID
router.get("/:id", badgeController.getBadgeParId);

// Mettre à jour un badge
router.put("/:id", badgeController.mettreAJourBadge);

// Supprimer un badge
router.delete("/:id", badgeController.supprimerBadge);

module.exports = router;
