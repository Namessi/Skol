// routes/groupes.routes.js

const express = require("express");
const router = express.Router();
const groupeController = require("../controllers/groupe.controller");

// Créer un groupe
router.post("/ajouter", groupeController.creerGroupe);

// Obtenir tous les groupes
router.get("/", groupeController.getGroupes);

// Supprimer un groupe
router.delete("/:id", groupeController.supprimerGroupe);

module.exports = router;
