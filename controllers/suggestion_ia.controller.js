// controllers/suggestion_ia.controller.js

const SuggestionIA = require("../models/suggestion_ia.model");

/**
 * @desc Enregistrer une suggestion générée par l’IA
 * @route POST /api/suggestions-ia
 * @access Auth
 */
exports.enregistrerSuggestion = (req, res) => {
  const utilisateur_id = req.user.id;
  const { suggestion, type } = req.body;

  if (!suggestion || !type) {
    return res.status(400).json({ message: "Suggestion et type requis." });
  }

  SuggestionIA.enregistrer({ utilisateur_id, suggestion, type }, (err) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    res.status(201).json({ message: "Suggestion enregistrée avec succès." });
  });
};

/**
 * @desc Récupérer les suggestions IA d’un utilisateur
 * @route GET /api/suggestions-ia
 * @access Auth
 */
exports.getSuggestions = (req, res) => {
  const utilisateur_id = req.user.id;

  SuggestionIA.getByUtilisateur(utilisateur_id, (err, suggestions) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", error: err });
    res.status(200).json(suggestions);
  });
};
