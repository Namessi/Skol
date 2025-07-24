// middlewares/langue.middleware.js
module.exports = (req, res, next) => {
  const lang = req.headers["accept-language"] || "fr";
  req.langue = lang.toLowerCase().split(",")[0];
  next();
};