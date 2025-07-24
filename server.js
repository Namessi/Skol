// server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const app = express();

// Sécurité & parsing
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Langue
const langueMiddleware = require("./middlewares/langue.middleware");
app.use(langueMiddleware);

// Fichiers statiques
app.use("/public", express.static(path.join(__dirname, "public")));

// Exemple de route d’accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Skol 🎉");
});

// Middleware global pour les erreurs
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 ✅ Serveur lancé sur http://localhost:${PORT}`);
});
