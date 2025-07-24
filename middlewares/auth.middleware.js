// middlewares/auth.middleware.js
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Accès non autorisé : Token manquant." });
  }
  // Logique de vérification JWT ou autre (à compléter plus tard)
  next();
};