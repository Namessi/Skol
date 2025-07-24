// routes/evaluations.routes.js

const express = require("express");
const router = express.Router();
const evaluationController = require("../controllers/evaluation.controller");

// Créer une évaluation
router.post("/ajouter", evaluationController.creerEvaluation);

// Voir les évaluations reçues d’un utilisateur
router.get("/:utilisateur_id", evaluationController.getEvaluations);

// Supprimer une évaluation
router.delete("/:id", evaluationController.supprimerEvaluation);

module.exports = router;
