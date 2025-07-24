// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error("Erreur capturée :", err);
  res.status(err.status || 500).json({
    message: err.message || "Erreur interne du serveur."
  });
};
