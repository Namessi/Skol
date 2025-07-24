// routes/admin.routes.js

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

// Créer un administrateur
router.post("/", adminController.creerAdmin);

// Obtenir tous les administrateurs
router.get("/", adminController.getTousLesAdmins);

// Obtenir un administrateur par ID
router.get("/:id", adminController.getAdminParId);

// Mettre à jour un administrateur
router.put("/:id", adminController.mettreAJourAdmin);

// Supprimer un administrateur
router.delete("/:id", adminController.supprimerAdmin);

module.exports = router;
