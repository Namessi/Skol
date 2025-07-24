# 🍻 Backend – Application sociale Skol

Skol est une application mobile sociale conçue pour permettre à des inconnus de se rencontrer dans un cadre convivial autour d’un **apéritif**, d’un **petit-déjeuner**, d’un **déjeuner**, d’un **dîner** ou d’un **after**.

Contrairement aux applications de dating classiques, **Skol favorise la création de liens humains authentiques**, dans une ambiance détendue et festive. Elle mise sur les préférences (boissons, lieux, musique, alimentation), la géolocalisation, et des moments de vie simples, pour déclencher des échanges sincères.

# 🎯 Objectif :

Créer une plateforme moderne de **rencontres sociales géolocalisées**, centrée sur le **partage de moments conviviaux**, la découverte humaine, l’échange culturel et la spontanéité — sans logique de séduction ou de réseau pro.

# 🧩 Exemples d’utilisation

## 🍷 Apéro chez un particulier

- Thomas propose un apéro chez lui à 19h.
- Il aime le vin rouge et les ambiances jazzy.
- Charline, à 500 m, reçoit la notification et accepte.
- Après cette rencontre, ils peuvent désormais s'inviter à dîner ou prendre un café ensemble.

## 🌅 Petit-déjeuner en plein air

- Sofia souhaite organiser un petit-déj dans un parc dimanche matin.
- Elle a déjà partagé un apéro avec Julien, qui accepte l'invitation.
- Le lieu est visible dans l’appli, d'autres peuvent rejoindre.

# 🔓 Déblocage progressif

Un utilisateur ne peut :
- participer à un **déjeuner**, **dîner**, **petit-déjeuner** ou **after** avec un autre profil,  
👉 **qu’après avoir partagé un apéro ensemble**.

Ce système :

- renforce la confiance,
- évite les dérives,
- crée une première interaction courte avant des moments plus longs.

# 🧑‍💼 Profils et préférences

Chaque utilisateur configure :

- ✅ son **pseudo unique**
- 🥂 **boissons préférées**
- 🎵 **style musical**
- 🧀 **habitudes alimentaires** (tapas, vegan, etc.)
- 🧭 **lieux favoris** (bar, domicile, lieu public)
- 🎭 **ambiance souhaitée** (festive, calme, romantique…)
- 📆 **disponibilités**
- 🕶️ **niveau de visibilité** du profil

# 🔁 Fonctionnalités

- Création et gestion d’événements en duo ou en groupe
- Matching via likes, superlikes et croisements
- Suggestions basées sur goûts et géolocalisation
- Chat en temps réel (Socket.io)
- Messagerie différée (type email interne)
- Notifications (push + badge)
- Traduction multilingue (FR/EN/ES/DE/IT/JA)
- Blocage et signalement avancés
- Historique des interactions
- Recherche par pseudo ou ID
- Système de badges & niveaux
- Abonnement premium
- Agenda personnel
- IA pour suggestions personnalisées
- Invitations d’amis
- Support utilisateur intégré

# 🔧 Technologies & Modules utilisés

- Node.js (JavaScript côté serveur)
- Express.js (framework HTTP)
- MySQL2 (base de données relationnelle)
- dotenv (gestion des variables d'environnement)
- jsonwebtoken (authentification sécurisée JWT)
- bcrypt (hachage sécurisé des mots de passe)
- cors (autorisation des requêtes cross-origine)
- morgan (logs HTTP)
- socket.io (communication temps réel)
- nodemon (rechargement automatique en dev)

# 📁 Structure du projet

skol/

config :

- db.js
- schema.sql

controllers :

- auth.controller.js
- utilisateurs.controller.js
- localisation.controller.js
- evenements.controller.js
- relations.controller.js
- disponibilites.controller.js
- preferences.controller.js
- lieux.controller.js
- chat.controller.js
- messages.controller.js
- groupes.controller.js
- blocage_signalement.controller.js
- notifications.controller.js
- parametres.controller.js
- admin.controller.js
- traductions.controller.js
- recherche.controller.js
- activites.controller.js
- filtres.controller.js
- statistiques.controller.js
- historique.controller.js
- evaluations.controller.js
- superlikes.controller.js
- badget.controller.js
- abonnement.controller.js
- support.controller.js
- invitations.controller.js
- suggestion_ia.controller.js
- agenda.controller.js

models :

- auth.model.js
- utilisateur.model.js
- localisation.model.js
- evenement.model.js
- relation.model.js
- disponibilite.model.js
- preference.model.js
- lieu.model.js
- chat.model.js
- message.model.js
- groupe.model.js
- blocage_signalement.model.js
- notification.model.js
- parametre.model.js
- admin.model.js
- traduction.model.js
- recherche.model.js
- activite.model.js
- filtre.model.js
- statistique.model.js
- historique.model.js
- evaluation.model.js
- superlike.model.js
- badget.model.js
- abonnement.model.js
- support.model.js
- invitation.model.js
- suggestion_ia.model.js
- agenda.model.js

routes :

- auth.routes.js
- utilisateurs.routes.js
- localisation.routes.js
- evenements.routes.js
- relations.routes.js
- disponibilites.routes.js
- preferences.routes.js
- lieux.routes.js
- chat.routes.js
- messages.routes.js
- groupes.routes.js
- blocage_signalement.routes.js
- notifications.routes.js
- parametres.routes.js
- admin.routes.js
- traductions.routes.js
- recherche.routes.js
- activites.routes.js
- filtres.routes.js
- statistiques.routes.js
- historique.routes.js
- evaluations.routes.js
- superlikes.routes.js
- badget.routes.js
- abonnement.routes.js
- support.routes.js
- invitations.routes.js
- suggestion_ia.routes.js
- agenda.routes.js

middlewares :

- auth.middleware.js
- validation.middleware.js
- langue.middleware.js
- errorHandler.js

utils :

- logger.js
- helpers.js
- mailer.js

public :

- .gitkeep

fichiers racine :

- .env
- .gitignore
- server.js
- package.json

# 📌 Exemples de points de terminaison

## 🔐 Authentification

- `POST /api/auth/inscription`  
  → Enregistre un nouvel utilisateur avec ses informations et ses préférences.  
  (hash du mot de passe + génération d’un token JWT à la création)

- `POST /api/auth/connexion`  
  → Vérifie les identifiants et renvoie un token JWT pour maintenir la session.

## 👤 Utilisateurs

- `GET /api/utilisateurs`  
  → Récupère tous les profils visibles à proximité (en fonction des préférences, rayon, etc.).

- `PUT /api/utilisateurs/:id`  
  → Met à jour les informations personnelles et les préférences d’un utilisateur spécifique.

- `DELETE /api/utilisateurs/:id`  
  → Supprime le compte utilisateur (suppression logique ou définitive selon le paramétrage).

## 🍽️ Événements (apéros, repas...)

- `POST /api/evenements`  
  → Crée une nouvelle proposition de rencontre (apéritif par défaut, repas si débloqué).

- `POST /api/evenements/groupe`  
  → Crée un événement en groupe, ouvert à plusieurs utilisateurs (optionnellement public ou privé).

- `PUT /api/evenements/:id/valider`  
  → Permet à un utilisateur d’accepter ou refuser une invitation à un apéro/repas.

## 💘 Matching

- `POST /api/relations/aimer/:id`  
  → Envoie un like ou superlike à un autre utilisateur (selon le type de relation choisie).

- `GET /api/relations/matchs`  
  → Affiche la liste des matchs mutuels confirmés entre utilisateurs.

## 💬 Chat / Messages

- `GET /api/messages/:id_utilisateur`  
  → Récupère l’historique de la messagerie différée avec un utilisateur spécifique.

- `POST /api/messages/envoyer`  
  → Envoie un message asynchrone (différé) à un autre utilisateur, même s’il est hors ligne.

- **Socket.io (WebSocket)**  

  → Permet une communication en **temps réel** :
  - Connexion à un salon de discussion privé entre 2 utilisateurs
  - Affichage de l’état “en ligne” ou “en train d’écrire”
  - Notifications instantanées de nouveaux messages

# ✅ Bonnes pratiques

- Architecture **MVC** claire
- Routes **RESTful**
- Middleware centralisé pour les erreurs et l’authentification
- Sécurité `.env` + mot de passe haché
- Code modulaire, commenté et propre
- Fichiers séparés pour chaque module
- Utilisation de middlewares globaux (`langue`, `auth`, `errorHandler`)
- Nommage cohérent des fichiers (`.controller.js`, `.model.js`, `.routes.js`)

# 🔐 Sécurité

- JWT + rôles (admin / utilisateur)
- Blocage / signalement d’abus
- Contrôle d’accès middleware sur chaque route sensible
- Nettoyage automatique des données sensibles
- Protection contre les injections SQL (requêtes préparées)
- Headers sécurisés via `helmet`
- Gestion des erreurs centralisée

# 📂 Étapes suivantes

- 🧪 **Tests Postman** sur toutes les routes (CRUD)
- 📦 Ajout de tests automatisés (Jest / Supertest)
- 📱 Connexion au front mobile (React Native)
- 📈 Déploiement backend + base distante (Railway / PlanetScale / Render)
- 🛠️ Monitoring et logs de production
- 💬 Intégration notifications push Firebase

# ✍️ Auteur

**Kossi Boris Namessi**  
Développeur Web Full Stack – Formation RNCP – 2025  
📩 boris.namessi@outlook.fr