// routes/recherche.routes.js

const express = require("express");
const router = express.Router();
const rechercheController = require("../controllers/recherche.controller");
const auth = require("../middleware/auth.middleware"); // pour sécuriser la recherche

// Lancer une recherche d'utilisateurs selon des critères
router.post("/", auth, rechercheController.rechercherUtilisateurs);

module.exports = router;
