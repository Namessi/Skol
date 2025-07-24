// controllers/auth.controller.js

const Auth = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/** Inscription */
exports.inscription = (req, res) => {
  const utilisateur = req.body;
  if (!utilisateur.nom || !utilisateur.prenom || !utilisateur.email || !utilisateur.mot_de_passe) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  Auth.register(utilisateur, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur lors de l'inscription.", erreur: err });
    res.status(201).json({ message: "Inscription réussie.", id: result.insertId });
  });
};

/** Connexion */
exports.connexion = (req, res) => {
  const { email, mot_de_passe } = req.body;
  if (!email || !mot_de_passe) {
    return res.status(400).json({ message: "Email et mot de passe requis." });
  }

  Auth.login(email, async (err, rows) => {
    if (err) return res.status(500).json({ message: "Erreur serveur.", erreur: err });
    if (rows.length === 0) return res.status(401).json({ message: "Utilisateur non trouvé." });

    const utilisateur = rows[0];
    const match = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);
    if (!match) return res.status(401).json({ message: "Mot de passe incorrect." });

    const token = jwt.sign({ id: utilisateur.id, role: utilisateur.role_id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.json({ message: "Connexion réussie.", token });
  });
};

/** Vérifier session */
exports.verifierSession = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token manquant." });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token invalide." });
    res.json({ message: "Session valide.", utilisateur: decoded });
  });
};
