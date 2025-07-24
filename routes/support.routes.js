// routes/support.routes.js

const express = require("express");
const router = express.Router();
const supportController = require("../controllers/support.controller");
const auth = require("../middleware/auth.middleware");

// Authentification requise pour envoyer une demande ou voir ses demandes
router.post("/", auth, supportController.envoyerDemande);
router.get("/", auth, supportController.mesDemandes);

// Route accessible uniquement aux administrateurs
router.get("/toutes", auth, supportController.toutesLesDemandes);

module.exports = router;
