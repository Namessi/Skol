// controllers/admin.controller.js

const Admin = require("../models/admin.model");

/**
 * Créer un administrateur
 */
exports.creerAdmin = (req, res) => {
  const { utilisateur_id, niveau, date_nomination } = req.body;
  if (!utilisateur_id || !niveau || !date_nomination) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  Admin.create({ utilisateur_id, niveau, date_nomination }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    }
    res.status(201).json({ message: "Administrateur créé.", id: result.insertId });
  });
};

/**
 * Obtenir tous les administrateurs
 */
exports.getTousLesAdmins = (req, res) => {
  Admin.getAll((err, admins) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    }
    res.status(200).json(admins);
  });
};

/**
 * Obtenir un administrateur par ID
 */
exports.getAdminParId = (req, res) => {
  const id = req.params.id;
  Admin.getById(id, (err, admin) => {
    if (err) {
      return res.status(500).json({ message: "Erreur interne.", erreur: err });
    }
    if (admin.length === 0) {
      return res.status(404).json({ message: "Administrateur introuvable." });
    }
    res.status(200).json(admin[0]);
  });
};

/**
 * Mettre à jour un administrateur
 */
exports.mettreAJourAdmin = (req, res) => {
  const id = req.params.id;
  const { niveau, date_nomination } = req.body;

  Admin.update(id, { niveau, date_nomination }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de mise à jour.", erreur: err });
    }
    res.status(200).json({ message: "Administrateur mis à jour." });
  });
};

/**
 * Supprimer un administrateur
 */
exports.supprimerAdmin = (req, res) => {
  const id = req.params.id;
  Admin.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de suppression.", erreur: err });
    }
    res.status(200).json({ message: "Administrateur supprimé." });
  });
};
