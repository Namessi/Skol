// config/db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",       // mets ton mot de passe ici
  database: "skol",   // ou le nom de ta base
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err.message);
    return;
  }
  console.log("✅ Connecté à la base de données MySQL !");
});

module.exports = connection;
