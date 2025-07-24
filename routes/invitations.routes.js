// routes/invitation.routes.js

const express = require("express");
const router = express.Router();
const invitationController = require("../controllers/invitation.controller");
const auth = require("../middleware/auth.middleware");

// Créer une invitation
router.post("/", auth, invitationController.creerInvitation);

// Obtenir toutes les invitations
router.get("/", auth, invitationController.getInvitations);

// Supprimer une invitation
router.delete("/:id", auth, invitationController.supprimerInvitation);

module.exports = router;
