// controllers/agenda.controller.js

const Agenda = require("../models/agenda.model");

/** Créer un événement agenda */
exports.creerAgenda = (req, res) => {
  const agenda = req.body;
  if (!agenda.utilisateur_id || !agenda.titre || !agenda.date_evenement) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }
  Agenda.create(agenda, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la création.", erreur: err });
    res.status(201).json({ message: "Événement agenda créé.", id: result.insertId });
  });
};

/** Obtenir tous les événements agenda */
exports.getTousLesAgendas = (req, res) => {
  Agenda.getAll((err, rows) => {
    if (err) return res.status(500).json({ message: "Erreur de récupération.", erreur: err });
    res.json(rows);
  });
};

/** Obtenir un agenda par ID */
exports.getAgendaParId = (req, res) => {
  const id = req.params.id;
  Agenda.getById(id, (err, rows) => {
    if (err) return res.status(500).json({ message: "Erreur serveur.", erreur: err });
    if (rows.length === 0) return res.status(404).json({ message: "Événement non trouvé." });
    res.json(rows[0]);
  });
};

/** Mettre à jour un événement agenda */
exports.mettreAJourAgenda = (req, res) => {
  const id = req.params.id;
  const maj = req.body;
  Agenda.update(id, maj, (err) => {
    if (err) return res.status(500).json({ message: "Erreur de mise à jour.", erreur: err });
    res.json({ message: "Événement agenda mis à jour." });
  });
};

/** Supprimer un événement agenda */
exports.supprimerAgenda = (req, res) => {
  const id = req.params.id;
  Agenda.delete(id, (err) => {
    if (err) return res.status(500).json({ message: "Erreur lors de la suppression.", erreur: err });
    res.json({ message: "Événement agenda supprimé." });
  });
};
