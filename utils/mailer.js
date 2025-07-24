// utils/mailer.js

const nodemailer = require("nodemailer");

/**
 * Transporteur SMTP configuré avec .env
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Envoie un e-mail générique
 * @param {string} to - Destinataire
 * @param {string} subject - Sujet
 * @param {string} html - Contenu HTML du mail
 */
function envoyerMail(to, subject, html) {
  const mailOptions = {
    from: `"Skol App" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Erreur lors de l’envoi du mail :", err);
    } else {
      console.log("Mail envoyé :", info.response);
    }
  });
}

module.exports = { envoyerMail };
