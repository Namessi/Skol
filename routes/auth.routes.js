// routes/auth.routes.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Inscription
router.post("/register", authController.inscription);

// Connexion
router.post("/login", authController.connexion);

// Vérification de session (optionnelle)
router.get("/check", authController.verifierSession);

module.exports = router;
