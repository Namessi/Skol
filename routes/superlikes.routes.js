// routes/superlikes.routes.js

const express = require("express");
const router = express.Router();
const superlikeController = require("../controllers/superlikes.controller");
const auth = require("../middleware/auth.middleware");

/**
 * @route POST /api/superlikes
 * @desc Envoyer un superlike à un autre utilisateur
 * @access Privé
 */
router.post("/", auth, superlikeController.creerSuperlike);

/**
 * @route GET /api/superlikes
 * @desc Voir les superlikes envoyés
 * @access Privé
 */
router.get("/", auth, superlikeController.getSuperlikes);

module.exports = router;
