-- 1. Table des rôles utilisateurs

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE  -- ex: 'utilisateur', 'admin', 'moderateur'
);


-- 2. Table des utilisateurs

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100),
    email VARCHAR(150) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_naissance DATE,
    genre VARCHAR(20),
    photo_profil VARCHAR(255),
    bio TEXT,
    langue_preferee VARCHAR(10),
    role_id INT DEFAULT 1,  -- 1 = rôle "utilisateur"
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);


-- 3. Table des langues disponibles (multilingue)

CREATE TABLE langues (
    code VARCHAR(10) PRIMARY KEY,  -- ex: 'fr', 'en', 'es'
    nom VARCHAR(50) NOT NULL       -- ex: 'Français', 'Anglais'
);

-- 4. Types de moments conviviaux (apéro, dîner, etc.)

CREATE TABLE types_moments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,        -- ex: Apéro, Déjeuner, Afterwork
    description TEXT
);

-- 5. Badges pour gamification

CREATE TABLE badges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    niveau INT DEFAULT 1,             -- Niveau du badge (optionnel)
    icone VARCHAR(255)                -- URL ou nom de fichier d’icône
);

-- 6. Abonnements (types d’offres)

CREATE TABLE abonnements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,         -- ex: Gratuit, Premium
    description TEXT,
    prix DECIMAL(6,2) DEFAULT 0.00,   -- ex: 15.00 €
    duree_jours INT NOT NULL          -- ex: 365 pour un an
);

-- 7. Préférences utilisateur (type de moment, distance max, etc.)

CREATE TABLE preferences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    type_moment_prefere INT,
    distance_max_km INT DEFAULT 10,
    langue_preferee VARCHAR(10),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (type_moment_prefere) REFERENCES types_moments(id),
    FOREIGN KEY (langue_preferee) REFERENCES langues(code)
);

-- 8. Paramètres utilisateurs (notifications, confidentialité)

CREATE TABLE parametres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    notifications_email BOOLEAN DEFAULT TRUE,
    notifications_push BOOLEAN DEFAULT TRUE,
    profil_public BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 9. Localisation (coordonnées GPS de l'utilisateur)

CREATE TABLE localisation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    rayon_recherche_km INT DEFAULT 10,
    last_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 10. Disponibilités par jour/heure

CREATE TABLE disponibilites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    jour_semaine ENUM('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche') NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 11. Badges obtenus par les utilisateurs

CREATE TABLE utilisateur_badges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    badge_id INT NOT NULL,
    date_obtention DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (badge_id) REFERENCES badges(id)
);

-- 12. Abonnement actuel de l’utilisateur

CREATE TABLE utilisateur_abonnement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    abonnement_id INT NOT NULL,
    date_debut DATETIME NOT NULL,
    date_fin DATETIME NOT NULL,
    actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (abonnement_id) REFERENCES abonnements(id)
);

-- 13. Relations entre utilisateurs (match, rendez-vous accepté, etc.)

CREATE TABLE relations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_1_id INT NOT NULL,
    utilisateur_2_id INT NOT NULL,
    date_relation DATETIME DEFAULT CURRENT_TIMESTAMP,
    statut ENUM('en_attente', 'accepte', 'refuse', 'expiré') DEFAULT 'en_attente',
    FOREIGN KEY (utilisateur_1_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (utilisateur_2_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 14. Superlikes envoyés

CREATE TABLE superlikes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emetteur_id INT NOT NULL,
    cible_id INT NOT NULL,
    date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emetteur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (cible_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 15. Blocages entre utilisateurs

CREATE TABLE bloquages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bloqueur_id INT NOT NULL,
    bloque_id INT NOT NULL,
    raison VARCHAR(255),
    date_blocage DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (bloqueur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (bloque_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 16. Signalements (utilisateur ou comportement)

CREATE TABLE signalements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    auteur_id INT NOT NULL,
    cible_id INT NOT NULL,
    motif TEXT NOT NULL,
    date_signalement DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (auteur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (cible_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 17. Évaluations après un moment partagé

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    evaluateur_id INT NOT NULL,
    evalue_id INT NOT NULL,
    note INT CHECK (note >= 1 AND note <= 5),
    commentaire TEXT,
    date_evaluation DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (evaluateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (evalue_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 18. Lieux des moments (bars, domiciles, lieux publics)

CREATE TABLE lieux (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150),
    type ENUM('domicile', 'bar', 'lieu_public', 'autre') DEFAULT 'autre',
    adresse VARCHAR(255),
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    acces_public BOOLEAN DEFAULT TRUE
);

-- 19. Moments proposés (apéro, dîner, etc.)

CREATE TABLE moments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    organisateur_id INT NOT NULL,
    type_moment_id INT NOT NULL,
    lieu_id INT,
    date_heure DATETIME NOT NULL,
    description TEXT,
    nb_places INT DEFAULT 2,
    statut ENUM('ouvert', 'complet', 'annulé') DEFAULT 'ouvert',
    FOREIGN KEY (organisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (type_moment_id) REFERENCES types_moments(id),
    FOREIGN KEY (lieu_id) REFERENCES lieux(id)
);

-- 20. Événements publics ou privés (groupés ou spéciaux)

CREATE TABLE evenements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(150),
    description TEXT,
    date_heure DATETIME,
    lieu_id INT,
    organisateur_id INT NOT NULL,
    is_public BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (lieu_id) REFERENCES lieux(id),
    FOREIGN KEY (organisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 21. Activités associées à un moment ou un événement

CREATE TABLE activites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    description TEXT,
    moment_id INT,
    evenement_id INT,
    FOREIGN KEY (moment_id) REFERENCES moments(id) ON DELETE CASCADE,
    FOREIGN KEY (evenement_id) REFERENCES evenements(id) ON DELETE CASCADE
);

-- 22. Historique des moments partagés (entre utilisateurs)

CREATE TABLE historique (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_1_id INT NOT NULL,
    utilisateur_2_id INT NOT NULL,
    moment_id INT,
    date_partagee DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_1_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (utilisateur_2_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (moment_id) REFERENCES moments(id)
);

-- 23. Agenda utilisateur (planification future)

CREATE TABLE agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    moment_id INT NOT NULL,
    statut ENUM('prévu', 'confirmé', 'annulé') DEFAULT 'prévu',
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (moment_id) REFERENCES moments(id) ON DELETE CASCADE
);

-- 24. Groupes de discussion (publics ou privés)

CREATE TABLE groupes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    createur_id INT NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_public BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (createur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 25. Membres d’un groupe

CREATE TABLE membres_groupes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    groupe_id INT NOT NULL,
    utilisateur_id INT NOT NULL,
    date_entree DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (groupe_id) REFERENCES groupes(id) ON DELETE CASCADE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 26. Messages (privés ou de groupe)

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    expediteur_id INT NOT NULL,
    destinataire_id INT, -- NULL si message de groupe
    groupe_id INT,       -- NULL si message privé
    contenu TEXT,
    date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,
    lu BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (expediteur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (destinataire_id) REFERENCES utilisateurs(id) ON DELETE SET NULL,
    FOREIGN KEY (groupe_id) REFERENCES groupes(id) ON DELETE CASCADE
);

-- 27. Fichiers joints à un message (image, audio, etc.)

CREATE TABLE fichiers_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message_id INT NOT NULL,
    type_fichier ENUM('image', 'audio', 'video', 'document') DEFAULT 'document',
    url_fichier VARCHAR(255) NOT NULL,
    FOREIGN KEY (message_id) REFERENCES messages(id) ON DELETE CASCADE
);

-- 28. Suggestions IA personnalisées

CREATE TABLE suggestion_ia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,              -- utilisateur pour qui on génère la suggestion
    suggestion_id INT NOT NULL,               -- utilisateur suggéré
    type_suggestion ENUM('moment', 'profil') DEFAULT 'profil',
    score DECIMAL(5,2) DEFAULT 0.00,          -- score calculé
    date_suggestion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (suggestion_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 29. Score d’affinité entre deux utilisateurs

CREATE TABLE score_affinite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_1_id INT NOT NULL,
    utilisateur_2_id INT NOT NULL,
    score DECIMAL(5,2) DEFAULT 0.00,           -- de 0 à 100
    dernier_calcul DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_1_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (utilisateur_2_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    UNIQUE KEY unique_pair (utilisateur_1_id, utilisateur_2_id)
);

-- 30. Historique des paiements

CREATE TABLE paiements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    abonnement_id INT NOT NULL,
    montant DECIMAL(6,2) NOT NULL,
    devise VARCHAR(10) DEFAULT 'EUR',
    moyen_paiement VARCHAR(50), -- ex: Stripe, PayPal, CB
    statut ENUM('en_attente', 'reussi', 'échoué') DEFAULT 'reussi',
    date_paiement DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (abonnement_id) REFERENCES abonnements(id)
);

-- 31. Tickets de support envoyés par les utilisateurs

CREATE TABLE tickets_support (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    sujet VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    statut ENUM('ouvert', 'en_cours', 'fermé') DEFAULT 'ouvert',
    date_ouverture DATETIME DEFAULT CURRENT_TIMESTAMP,
    date_resolution DATETIME,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 32. Invitations envoyées par les utilisateurs

CREATE TABLE invitations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parrain_id INT NOT NULL,
    email_invite VARCHAR(150) NOT NULL,
    code_invitation VARCHAR(50) UNIQUE NOT NULL,
    statut ENUM('envoyée', 'acceptée', 'expirée') DEFAULT 'envoyée',
    date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parrain_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 33. Notifications (push, email, système)

CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    type_notification VARCHAR(100),
    message TEXT NOT NULL,
    lu BOOLEAN DEFAULT FALSE,
    date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 34. Filtres de recherche personnalisés (âge, moment, etc.)

CREATE TABLE filtres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    age_min INT DEFAULT 18,
    age_max INT DEFAULT 99,
    genre_preferes SET('homme', 'femme', 'autre'),
    types_moments_prefere TEXT,
    distance_max_km INT DEFAULT 10,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 35. Recherches sauvegardées ou effectuées récemment

CREATE TABLE recherches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    criteres TEXT,
    date_recherche DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- 36. Traductions de contenu (multilingue)

CREATE TABLE traductions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clef VARCHAR(100) NOT NULL,          -- ex : "bienvenue_message"
    langue_code VARCHAR(10) NOT NULL,    -- ex : "fr", "en"
    texte TEXT NOT NULL,
    UNIQUE KEY unique_trad (clef, langue_code),
    FOREIGN KEY (langue_code) REFERENCES langues(code)
);

-- 37. Statistiques globales ou par utilisateur

CREATE TABLE statistiques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    type_statistique VARCHAR(100),
    valeur NUMERIC,
    date_statistique DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);
