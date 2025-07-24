// models/utilisateur.model.js

const db = require("../config/db");

const Utilisateur = {
  /** Créer un utilisateur */
  creer: (data, callback) => {
    const sql = `
      INSERT INTO utilisateurs 
      (pseudo, email, mot_de_passe, nom, prenom, date_naissance, genre, bio, role_id, date_creation) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;
    const params = [
      data.pseudo,
      data.email,
      data.mot_de_passe,
      data.nom,
      data.prenom,
      data.date_naissance,
      data.genre,
      data.bio,
      data.role_id,
    ];
    db.query(sql, params, callback);
  },

  /** Récupérer tous les utilisateurs */
  getAll: (callback) => {
    db.query("SELECT * FROM utilisateurs", callback);
  },

  /** Supprimer un utilisateur */
  supprimer: (id, callback) => {
    db.query("DELETE FROM utilisateurs WHERE id = ?", [id], callback);
  },

  /** Récupérer un utilisateur par email */
  getByEmail: (email, callback) => {
    db.query("SELECT * FROM utilisateurs WHERE email = ?", [email], callback);
  },

  /** Récupérer un utilisateur par ID */
  getById: (id, callback) => {
    db.query("SELECT * FROM utilisateurs WHERE id = ?", [id], callback);
  },
};

module.exports = Utilisateur;
