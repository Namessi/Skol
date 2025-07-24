// models/auth.model.js

const db = require("../config/db");
const bcrypt = require("bcrypt");

const Auth = {
  /** Inscrire un utilisateur */
  register: async (utilisateur, callback) => {
    const { nom, prenom, email, mot_de_passe, role_id } = utilisateur;
    try {
      const hash = await bcrypt.hash(mot_de_passe, 10);
      const sql = `INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe, role_id) VALUES (?, ?, ?, ?, ?)`;
      db.query(sql, [nom, prenom, email, hash, role_id || 2], callback);
    } catch (error) {
      callback(error);
    }
  },

  /** Connexion d'un utilisateur */
  login: (email, callback) => {
    const sql = `SELECT * FROM utilisateurs WHERE email = ?`;
    db.query(sql, [email], callback);
  }
};

module.exports = Auth;
