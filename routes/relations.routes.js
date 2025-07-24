// routes/relations.routes.js

const express = require("express");
const router = express.Router();
const relationController = require("../controllers/relation.controller");
const auth = require("../middleware/auth.middleware"); // Sécurisation des routes

// Créer une nouvelle relation
router.post("/", auth, relationController.creerRelation);

// Obtenir les relations de l’utilisateur connecté
router.get("/", auth, relationController.getRelations);

// Supprimer une relation avec un utilisateur cible
router.delete("/:cible_id", auth, relationController.supprimerRelation);

module.exports = router;
