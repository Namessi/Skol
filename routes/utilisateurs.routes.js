// routes/utilisateur.routes.js

const express = require("express");
const router = express.Router();
const utilisateurController = require("../controllers/utilisateur.controller");
const auth = require("../middleware/auth.middleware");

// Créer un utilisateur (par un admin ou ouverture de compte public)
router.post("/", utilisateurController.creerUtilisateur);

// Obtenir tous les utilisateurs (optionnel : restreint aux admins)
router.get("/", auth, utilisateurController.getUtilisateurs);

// Supprimer un utilisateur
router.delete("/:id", auth, utilisateurController.supprimerUtilisateur);

module.exports = router;
