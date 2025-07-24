// controllers/blocage_signalement.controller.js

const BlocageSignalement = require("../models/blocage_signalement.model");

/** Bloquer un utilisateur */
exports.creerBlocage = (req, res) => {
  const { utilisateur_id, bloque_utilisateur_id } = req.body;
  if (!utilisateur_id || !bloque_utilisateur_id) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  BlocageSignalement.creerBlocage({ utilisateur_id, bloque_utilisateur_id }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors du blocage.", erreur: err });
    res.status(201).json({ message: "Utilisateur bloqué avec succès.", id: result.insertId });
  });
};

/** Signaler un utilisateur */
exports.creerSignalement = (req, res) => {
  const { utilisateur_id, signale_utilisateur_id, raison } = req.body;
  if (!utilisateur_id || !signale_utilisateur_id || !raison) {
    return res.status(400).json({ message: "Tous les champs sont requis pour le signalement." });
  }

  BlocageSignalement.creerSignalement({ utilisateur_id, signale_utilisateur_id, raison }, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors du signalement.", erreur: err });
    res.status(201).json({ message: "Utilisateur signalé avec succès.", id: result.insertId });
  });
};

/** Voir les blocages */
exports.getBlocagesParUtilisateur = (req, res) => {
  const { utilisateurId } = req.params;
  BlocageSignalement.getBlocagesParUtilisateur(utilisateurId, (err, blocages) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération des blocages.", erreur: err });
    res.json(blocages);
  });
};

/** Voir les signalements */
exports.getSignalementsParUtilisateur = (req, res) => {
  const { utilisateurId } = req.params;
  BlocageSignalement.getSignalementsParUtilisateur(utilisateurId, (err, signalements) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la récupération des signalements.", erreur: err });
    res.json(signalements);
  });
};

/** Supprimer un blocage */
exports.supprimerBlocage = (req, res) => {
  const { id } = req.params;
  BlocageSignalement.supprimerBlocage(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression du blocage.", erreur: err });
    res.json({ message: "Blocage supprimé." });
  });
};

/** Supprimer un signalement */
exports.supprimerSignalement = (req, res) => {
  const { id } = req.params;
  BlocageSignalement.supprimerSignalement(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression du signalement.", erreur: err });
    res.json({ message: "Signalement supprimé." });
  });
};
