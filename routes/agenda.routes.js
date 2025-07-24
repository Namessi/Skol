// routes/agenda.routes.js

const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agenda.controller");

// Créer un événement dans l'agenda
router.post("/", agendaController.creerAgenda);

// Récupérer tous les événements
router.get("/", agendaController.getTousLesAgendas);

// Récupérer un événement par ID
router.get("/:id", agendaController.getAgendaParId);

// Mettre à jour un événement
router.put("/:id", agendaController.mettreAJourAgenda);

// Supprimer un événement
router.delete("/:id", agendaController.supprimerAgenda);

module.exports = router;
