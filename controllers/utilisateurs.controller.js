// controllers/utilisateur.controller.js

const Utilisateur = require("../models/utilisateur.model");

/**
 * Créer un nouvel utilisateur
 */
exports.creerUtilisateur = (req, res) => {
  const data = req.body;

  if (!data.email || !data.pseudo || !data.mot_de_passe) {
    return res.status(400).json({ message: "Champs obligatoires manquants." });
  }

  Utilisateur.creer(data, (err, result) => {
    if (err) {
      console.error("Erreur lors de la création :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.status(201).json({ message: "Utilisateur créé avec succès.", id: result.insertId });
  });
};

/**
 * Obtenir tous les utilisateurs
 */
exports.getUtilisateurs = (req, res) => {
  Utilisateur.getAll((err, result) => {
    if (err) {
      console.error("Erreur récupération :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.json(result);
  });
};

/**
 * Supprimer un utilisateur
 */
exports.supprimerUtilisateur = (req, res) => {
  const id = req.params.id;

  Utilisateur.supprimer(id, (err, result) => {
    if (err) {
      console.error("Erreur suppression :", err);
      return res.status(500).json({ message: "Erreur serveur." });
    }
    res.json({ message: "Utilisateur supprimé avec succès." });
  });
};
