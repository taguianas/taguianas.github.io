/* ============================================================
   i18n.js - FR / EN translations + toggle logic
   Usage: add data-i18n="key" (text), data-i18n-html="key" (innerHTML),
          data-i18n-placeholder="key" (placeholder attr) to elements.
          Call setLang('fr') or setLang('en') from any page.
============================================================ */

window.translations = {
  fr: {
    /* --- SHARED --- */
    'nav.home'        : 'Accueil',
    'nav.projects'    : 'Projets',
    'nav.parcours'    : 'Parcours',
    'nav.volunteer'   : 'Bénévolat',
    'nav.contact'     : 'Contact',
    'footer.rights'   : '© 2025 Anas TAGUI. Tous droits réservés.',

    /* --- INDEX --- */
    'hero.badge'      : 'Disponible pour alternance - Septembre 2025',
    'hero.cv'         : 'Télécharger mon CV',
    'hero.projects'   : 'Voir mes projets',
    'hero.description': 'Actuellement en 4ème année du cycle ingénieur, je recherche activement une <strong>alternance</strong>. Ayant un vif intérêt pour les défis techniques en cybersécurité et réseaux, je suis déterminé à m\'investir pour contribuer à la sécurité de vos projets.',
    'typewriter.0'    : 'Étudiant Ingénieur en Informatique & Cybersécurité',
    'typewriter.1'    : 'Passionné de Sécurité Offensive & Défensive',
    'typewriter.2'    : 'Builder, CTF Player, Top 4% TryHackMe',

    /* --- PROJETS --- */
    'projects.title'  : 'Mes Projets',
    'projects.sub'    : 'Voici une sélection de projets qui démontrent mes compétences techniques.',
    'filter.all'      : 'Tous',
    'filter.cyber'    : 'Cybersécurité',
    'filter.dev'      : 'Développement',
    'badge.flagship'  : 'Projet Phare',
    'badge.wip'       : 'En cours',
    'link.github'     : 'Voir sur GitHub',
    'link.demo'       : 'Voir la Démo',
    'link.writeup'    : 'Voir le Writeup',
    'link.app'        : 'Voir l\'application',

    'proj.phishguard.title' : 'PhishGuard AI',
    'proj.phishguard.desc'  : 'Plateforme full-stack d\'analyse de phishing combinant règles heuristiques, détection de typosquatting, APIs de threat intelligence, un classificateur <strong>XGBoost</strong> entraîné et une analyse d\'emails par <strong>LLM</strong>. Système d\'authentification complet avec isolation des données par utilisateur.',
    'proj.extension.title'  : 'PhishGuard Extension',
    'proj.extension.desc'   : 'Extension Chrome de détection de phishing en temps réel directement dans vos emails. Moteur heuristique de <strong>21 points</strong> combiné à 5 couches de threat intelligence (OpenPhish, Google Safe Browsing, PhishTank...). Analyse 100% locale, zéro transmission de données.',
    'proj.nettools.title'   : 'NetTools : Boîte à Outils Réseau',
    'proj.nettools.desc'    : 'Plateforme professionnelle de <strong>27 outils réseau</strong> fonctionnant entièrement dans le navigateur : calculateurs de sous-réseaux, parseurs de logs, outils de diagnostic et plus. Zéro transmission de données, confidentialité totale.',
    'proj.kalimcp.title'    : 'Kali MCP Server',
    'proj.kalimcp.desc'     : 'Serveur <strong>MCP (Model Context Protocol)</strong> Dockerisé exposant 18+ outils Kali Linux (nmap, nikto, sqlmap...) à des clients IA comme Claude Code. Permet d\'exécuter des tests de pénétration en langage naturel via <strong>FastMCP 3.x</strong>.',
    'proj.soc.title'        : 'SOC virtuel (SIEM/SOAR)',
    'proj.soc.desc'         : 'Déploiement d\'un homelab avec <strong>Wazuh (SIEM)</strong>, <strong>TheHive (SOAR)</strong> et <strong>Shuffle</strong>. Mise en œuvre de scénarios d\'attaques contrôlées (ex: brute-force, injection SQL) et automatisation des réponses de sécurité.',
    'proj.ctf.title'        : 'CTF : Operation Endgame (AD)',
    'proj.ctf.desc'         : 'Writeup complet d\'un challenge TryHackMe : compromission totale d\'un domaine <strong>Active Directory</strong> via Kerberoasting, abus de GenericWrite, et exploitation de credentials codés en dur. Outils : BloodHound, Impacket.',
    'proj.owasp.title'      : 'Labs Sécurité Web (OWASP)',
    'proj.owasp.desc'       : 'Labs pratiques couvrant les vulnérabilités web critiques : <strong>CSRF</strong>, failles d\'authentification, <strong>JWT bypass</strong>, <strong>IDOR</strong> et contrôle d\'accès défaillant. Environnements DVWA et PortSwigger Web Academy.',
    'proj.smurf.title'      : 'Lab : Smurf Attack (DoS ICMP)',
    'proj.smurf.desc'       : 'Lab réseau en environnement virtualisé démontrant une attaque <strong>ICMP Amplification DoS</strong> (Smurf). Utilisation de <strong>hping3</strong>, 4 amplificateurs Knoppix et une victime Windows IIS. Analyse de l\'impact selon la bande passante et mise en oeuvre de contre-mesures.',
    'proj.redteam.title'    : 'RedTeam Shell Framework',
    'proj.redteam.desc'     : 'Framework modulaire Bash pour les opérations de Red Teaming : gestion de reverse shells chiffrés avec mécanismes d\'obfuscation avancés pour tester la résilience des EDR/AV.',
    'proj.terminal.title'   : 'Terminal Portfolio',
    'proj.terminal.desc'    : 'Portfolio interactif simulant une interface en ligne de commande (CLI). Une expérience utilisateur originale permettant de découvrir mon profil via des commandes shell simulées dans le navigateur.',
    'proj.encryption.title' : 'Encryption App',
    'proj.encryption.desc'  : 'Application sécurisée de chiffrement et déchiffrement de données. Implémentation d\'algorithmes cryptographiques (<strong>AES-GCM</strong> & <strong>RSA-OAEP</strong>) pour assurer la confidentialité et l\'intégrité des informations sensibles.',
    'proj.scripts.title'    : 'Scripts d\'Automatisation',
    'proj.scripts.desc'     : 'Collection de scripts Python, Bash et PowerShell pour automatiser les tâches d\'administration système sur <strong>Windows et Linux</strong> : gestion des utilisateurs, sauvegardes incrémentielles, et surveillance de services réseaux.',
    'proj.d4g.title'        : 'API de Résumé Éco-Conçue (D4G)',
    'proj.d4g.desc'         : 'Contribution technique majeure au projet Design4Green (ESAIP). Développement d\'une API Flask (Python) pour le résumé de texte via un modèle ML (Transformers). Implémentation de techniques d\'optimisation (Pruning, SVD, Quantization INT8) et mesure d\'impact (CodeCarbon, psutil).',
    'proj.portfolio.title'  : 'Site Web Portfolio (Ce site)',
    'proj.portfolio.desc'   : 'Développement de mon portfolio personnel pour présenter mes compétences et projets. Conçu avec <strong>HTML5</strong> sémantique et stylisé avec le framework <strong>Tailwind CSS</strong> pour un design moderne et adaptatif.',

    /* --- PARCOURS --- */
    'parcours.title'    : 'Mon Parcours',
    'parcours.sub'      : 'Expériences, formations et compétences clés.',
    'parcours.exp'      : 'Expériences Professionnelles',
    'parcours.edu'      : 'Formations',
    'parcours.skills'   : 'Compétences Techniques',
    'parcours.soft'     : 'Savoir-être',
    'parcours.langs'    : 'Langues',
    'parcours.train'    : 'Auto-formation',

    'exp1.date'   : 'Juillet 2025 - Août 2025 (2 mois)',
    'exp1.title'  : 'Technicien Fibre Optique (Stage)',
    'exp1.b1'     : 'Installation et dépannage de réseaux fibre optique (FTTH) sur le terrain.',
    'exp1.b2'     : 'Configuration des équipements et support technique auprès des clients.',
    'exp2.date'   : 'Juin 2023 - Septembre 2023 (4 mois)',
    'exp2.title'  : 'Technicien Informatique (Stage)',
    'exp2.b1'     : 'Installation et configuration des systèmes d\'exploitation et des logiciels.',
    'exp2.b2'     : 'Formatage et optimisation des performances des ordinateurs.',

    'edu1.date'   : '2024 - 2027 (en cours)',
    'edu1.title'  : 'Cycle d\'Ingénieur Informatique',
    'edu1.spec'   : 'Spécialisation en Cybersécurité et Réseaux.',
    'edu2.date'   : 'Février 2025 - Juillet 2025',
    'edu2.title'  : 'Échange Universitaire',
    'edu2.school' : 'Politechnika Warszawska, Varsovie, Pologne',
    'edu2.desc'   : 'Focus sur l\'informatique et la sécurité de l\'information.',

    'skills.dev'    : 'Développement',
    'skills.cyber'  : 'Cybersécurité',
    'skills.net'    : 'Réseaux',
    'skills.sys'    : 'Systèmes',
    'badge.intrus'  : 'Détection d\'intrusions',
    'badge.access'  : 'Gestion des accès',
    'badge.netadm'  : 'Administration réseaux',
    'badge.config'  : 'Config. équipements',

    'soft.1' : 'Autonomie et initiative (projet personnel)',
    'soft.2' : 'Relation client (support technique)',
    'soft.3' : 'Curiosité et apprentissage continu',
    'soft.4' : 'Résolution de problèmes',
    'soft.5' : 'Analyse et diagnostic',
    'soft.6' : 'Adaptabilité',

    'lang.arabic'  : 'Arabe :',
    'lang.native'  : 'Langue maternelle',
    'lang.french'  : 'Français :',
    'lang.fluent'  : 'Courant',
    'lang.english' : 'Anglais :',
    'lang.spanish' : 'Espagnol :',
    'lang.inter'   : 'Intermédiaire',
    'train.desc'   : 'Je renforce constamment mes compétences pratiques sur des plateformes de cybersécurité.',

    /* --- BÉNÉVOLAT --- */
    'benev.title'     : 'Mes Engagements',
    'benev.sub'       : 'Allier compétences techniques et engagement citoyen.',
    'benev.app.title' : 'Application Web - Snooker Shoot-Out',
    'benev.app.desc'  : 'Développement d\'une application web en React.js pour le club de snooker (affilié FFB) afin de gérer les tournois "Shoot-Out". L\'outil gère le chronomètre de match et de tir, le score, et les fautes en temps réel avec une interface dynamique.',
    'benev.app.link'  : 'Voir l\'application',
    'benev.cop.title' : 'Bénévole Distribution Alimentaire',
    'benev.cop.desc'  : 'Participation active aux opérations de distribution alimentaire pour l\'association Cop1 - Solidarités Étudiantes à Angers. Aide à la logistique, accueil et distribution des denrées aux étudiants.',
    'benev.cop.badge' : 'Engagement Social',
    'benev.cop.text'  : 'Engagement associatif',

    /* --- CONTACT --- */
    'contact.title'      : 'Me Contacter',
    'contact.sub'        : 'Je suis à votre disposition pour toute opportunité d\'alternance ou pour échanger sur mes projets et compétences.',
    'contact.info'       : 'Informations',
    'contact.phone'      : 'Téléphone',
    'contact.location'   : 'Localisation',
    'contact.social'     : 'Réseaux Professionnels',
    'contact.social.sub' : 'Retrouvez-moi sur LinkedIn et consultez mes projets sur GitHub.',
    'contact.li.sub'     : 'Voir mon profil professionnel',
    'contact.gh.sub'     : 'Explorer mes dépôts de code',
    'contact.thm.sub'    : 'Voir mon profil de challenges',
    'form.title'         : 'Envoyer un message',
    'form.reply'         : 'Réponse sous 24h.',
    'form.name'          : 'Nom',
    'form.name.ph'       : 'Votre nom complet',
    'form.email.ph'      : 'votre@email.com',
    'form.message'       : 'Message',
    'form.msg.ph'        : 'Votre message...',
    'form.send'          : 'Envoyer',
    'form.sending'       : 'Envoi en cours...',
    'form.success'       : 'Message envoyé ! Je vous répondrai dans les plus brefs délais.',
    'form.error'         : 'Erreur lors de l\'envoi. Contactez-moi directement par email.',
    'copy.ok'            : 'Copié !',

    /* --- CERTIFICATIONS --- */
    'parcours.certs'  : 'Certifications',
    'cert.link'       : 'Voir le diplôme',
    'cert.wip'        : 'Formations en cours',
    'cert.inprog'     : 'En cours',
    'cert.ceh.name'   : 'CEH - Certified Ethical Hacker',
    'cert.ceh.org'    : 'EC-Council (préparation via TryHackMe)',
  },

  en: {
    /* --- SHARED --- */
    'nav.home'        : 'Home',
    'nav.projects'    : 'Projects',
    'nav.parcours'    : 'Background',
    'nav.volunteer'   : 'Volunteering',
    'nav.contact'     : 'Contact',
    'footer.rights'   : '© 2025 Anas TAGUI. All rights reserved.',

    /* --- INDEX --- */
    'hero.badge'      : 'Available for apprenticeship - September 2025',
    'hero.cv'         : 'Download my CV',
    'hero.projects'   : 'View my projects',
    'hero.description': 'Currently in my 4th year of engineering school, I am actively looking for an <strong>apprenticeship</strong>. With a keen interest in cybersecurity and networking challenges, I am determined to contribute to the security of your projects.',
    'typewriter.0'    : 'Computer Science & Cybersecurity Engineering Student',
    'typewriter.1'    : 'Passionate about Offensive & Defensive Security',
    'typewriter.2'    : 'Builder, CTF Player, Top 4% TryHackMe',

    /* --- PROJETS --- */
    'projects.title'  : 'My Projects',
    'projects.sub'    : 'A selection of projects showcasing my technical skills.',
    'filter.all'      : 'All',
    'filter.cyber'    : 'Cybersecurity',
    'filter.dev'      : 'Development',
    'badge.flagship'  : 'Flagship',
    'badge.wip'       : 'In Progress',
    'link.github'     : 'View on GitHub',
    'link.demo'       : 'View Demo',
    'link.writeup'    : 'View Writeup',
    'link.app'        : 'View App',

    'proj.phishguard.title' : 'PhishGuard AI',
    'proj.phishguard.desc'  : 'Full-stack phishing analysis platform combining heuristic rules, typosquatting detection, threat intelligence APIs, a trained <strong>XGBoost</strong> classifier and email analysis via <strong>LLM</strong>. Complete authentication system with per-user data isolation.',
    'proj.extension.title'  : 'PhishGuard Extension',
    'proj.extension.desc'   : 'Real-time phishing detection Chrome extension directly in your emails. A <strong>21-point</strong> heuristic engine combined with 5 threat intelligence layers (OpenPhish, Google Safe Browsing, PhishTank...). 100% local analysis, zero data transmission.',
    'proj.nettools.title'   : 'NetTools: Network Toolkit',
    'proj.nettools.desc'    : 'Professional platform featuring <strong>27 network tools</strong> running entirely in the browser: subnet calculators, log parsers, diagnostic tools and more. Zero data transmission, total privacy.',
    'proj.kalimcp.title'    : 'Kali MCP Server',
    'proj.kalimcp.desc'     : 'Dockerized <strong>MCP (Model Context Protocol)</strong> server exposing 18+ Kali Linux tools (nmap, nikto, sqlmap...) to AI clients like Claude Code. Enables penetration testing through natural language via <strong>FastMCP 3.x</strong>.',
    'proj.soc.title'        : 'Virtual SOC (SIEM/SOAR)',
    'proj.soc.desc'         : 'Homelab deployment with <strong>Wazuh (SIEM)</strong>, <strong>TheHive (SOAR)</strong> and <strong>Shuffle</strong>. Implementation of controlled attack scenarios (e.g. brute-force, SQL injection) and security response automation.',
    'proj.ctf.title'        : 'CTF: Operation Endgame (AD)',
    'proj.ctf.desc'         : 'Complete TryHackMe challenge writeup: full <strong>Active Directory</strong> domain compromise via Kerberoasting, GenericWrite abuse, and exploitation of hardcoded credentials. Tools: BloodHound, Impacket.',
    'proj.owasp.title'      : 'Web Security Labs (OWASP)',
    'proj.owasp.desc'       : 'Hands-on labs covering critical web vulnerabilities: <strong>CSRF</strong>, authentication flaws, <strong>JWT bypass</strong>, <strong>IDOR</strong> and broken access control. DVWA and PortSwigger Web Academy environments.',
    'proj.smurf.title'      : 'Lab: Smurf Attack (ICMP DoS)',
    'proj.smurf.desc'       : 'Virtualized network lab demonstrating an <strong>ICMP Amplification DoS</strong> (Smurf) attack. Using <strong>hping3</strong>, 4 Knoppix amplifiers and a Windows IIS victim. Impact analysis by bandwidth and countermeasure implementation.',
    'proj.redteam.title'    : 'RedTeam Shell Framework',
    'proj.redteam.desc'     : 'Modular Bash framework for Red Teaming operations: encrypted reverse shell management with advanced obfuscation mechanisms to test EDR/AV resilience.',
    'proj.terminal.title'   : 'Terminal Portfolio',
    'proj.terminal.desc'    : 'Interactive portfolio simulating a command-line interface (CLI). An original experience to discover my profile through simulated shell commands in the browser.',
    'proj.encryption.title' : 'Encryption App',
    'proj.encryption.desc'  : 'Secure data encryption and decryption application. Implementation of cryptographic algorithms (<strong>AES-GCM</strong> & <strong>RSA-OAEP</strong>) to ensure the confidentiality and integrity of sensitive information.',
    'proj.scripts.title'    : 'Automation Scripts',
    'proj.scripts.desc'     : 'Collection of Python, Bash and PowerShell scripts to automate system administration tasks on <strong>Windows and Linux</strong>: user management, incremental backups, and network service monitoring.',
    'proj.d4g.title'        : 'Eco-Designed Summary API (D4G)',
    'proj.d4g.desc'         : 'Major technical contribution to the Design4Green project (ESAIP). Development of a Flask (Python) API for text summarization via an ML model (Transformers). Implementation of optimization techniques (Pruning, SVD, INT8 Quantization) and impact measurement (CodeCarbon, psutil).',
    'proj.portfolio.title'  : 'Portfolio Website (This site)',
    'proj.portfolio.desc'   : 'Development of my personal portfolio to showcase my skills and projects. Designed with semantic <strong>HTML5</strong> and styled with the <strong>Tailwind CSS</strong> framework for a modern, responsive design.',

    /* --- PARCOURS --- */
    'parcours.title'  : 'My Background',
    'parcours.sub'    : 'Experiences, education and key skills.',
    'parcours.exp'    : 'Professional Experience',
    'parcours.edu'    : 'Education',
    'parcours.skills' : 'Technical Skills',
    'parcours.soft'   : 'Soft Skills',
    'parcours.langs'  : 'Languages',
    'parcours.train'  : 'Self-Training',

    'exp1.date'   : 'July 2025 - August 2025 (2 months)',
    'exp1.title'  : 'Fiber Optic Technician (Internship)',
    'exp1.b1'     : 'Installation and troubleshooting of fiber optic networks (FTTH) in the field.',
    'exp1.b2'     : 'Equipment configuration and technical support for customers.',
    'exp2.date'   : 'June 2023 - September 2023 (4 months)',
    'exp2.title'  : 'IT Technician (Internship)',
    'exp2.b1'     : 'Installation and configuration of operating systems and software.',
    'exp2.b2'     : 'Formatting and performance optimization of computers.',

    'edu1.date'   : '2024 - 2027 (ongoing)',
    'edu1.title'  : 'Computer Engineering Degree',
    'edu1.spec'   : 'Specialization in Cybersecurity and Networks.',
    'edu2.date'   : 'February 2025 - July 2025',
    'edu2.title'  : 'University Exchange Program',
    'edu2.school' : 'Politechnika Warszawska, Warsaw, Poland',
    'edu2.desc'   : 'Focus on computer science and information security.',

    'skills.dev'    : 'Development',
    'skills.cyber'  : 'Cybersecurity',
    'skills.net'    : 'Networks',
    'skills.sys'    : 'Systems',
    'badge.intrus'  : 'Intrusion Detection',
    'badge.access'  : 'Access Management',
    'badge.netadm'  : 'Network Administration',
    'badge.config'  : 'Equipment Config.',

    'soft.1' : 'Autonomy and initiative (personal projects)',
    'soft.2' : 'Client relations (technical support)',
    'soft.3' : 'Curiosity and continuous learning',
    'soft.4' : 'Problem solving',
    'soft.5' : 'Analysis and diagnosis',
    'soft.6' : 'Adaptability',

    'lang.arabic'  : 'Arabic:',
    'lang.native'  : 'Native language',
    'lang.french'  : 'French:',
    'lang.fluent'  : 'Fluent',
    'lang.english' : 'English:',
    'lang.spanish' : 'Spanish:',
    'lang.inter'   : 'Intermediate',
    'train.desc'   : 'I constantly strengthen my practical skills on cybersecurity platforms.',

    /* --- BÉNÉVOLAT --- */
    'benev.title'     : 'My Commitments',
    'benev.sub'       : 'Combining technical skills with civic engagement.',
    'benev.app.title' : 'Web App - Snooker Shoot-Out',
    'benev.app.desc'  : 'Development of a React.js web application for the snooker club (affiliated with FFB) to manage "Shoot-Out" tournaments. The tool handles match and shot timers, score, and fouls in real time with a dynamic interface.',
    'benev.app.link'  : 'View App',
    'benev.cop.title' : 'Food Distribution Volunteer',
    'benev.cop.desc'  : 'Active participation in food distribution operations for the Cop1 - Solidarités Étudiantes association in Angers. Assistance with logistics, reception and distribution of food to students.',
    'benev.cop.badge' : 'Social Engagement',
    'benev.cop.text'  : 'Associative commitment',

    /* --- CONTACT --- */
    'contact.title'      : 'Contact Me',
    'contact.sub'        : 'I am available for any apprenticeship opportunity or to discuss my projects and skills.',
    'contact.info'       : 'Information',
    'contact.phone'      : 'Phone',
    'contact.location'   : 'Location',
    'contact.social'     : 'Professional Networks',
    'contact.social.sub' : 'Find me on LinkedIn and check out my projects on GitHub.',
    'contact.li.sub'     : 'View my professional profile',
    'contact.gh.sub'     : 'Explore my code repositories',
    'contact.thm.sub'    : 'View my challenge profile',
    'form.title'         : 'Send a Message',
    'form.reply'         : 'Reply within 24h.',
    'form.name'          : 'Name',
    'form.name.ph'       : 'Your full name',
    'form.email.ph'      : 'your@email.com',
    'form.message'       : 'Message',
    'form.msg.ph'        : 'Your message...',
    'form.send'          : 'Send',
    'form.sending'       : 'Sending...',
    'form.success'       : 'Message sent! I will reply as soon as possible.',
    'form.error'         : 'Error sending message. Contact me directly by email.',
    'copy.ok'            : 'Copied!',

    /* --- CERTIFICATIONS --- */
    'parcours.certs'  : 'Certifications',
    'cert.link'       : 'View certificate',
    'cert.wip'        : 'In Progress',
    'cert.inprog'     : 'In progress',
    'cert.ceh.name'   : 'CEH - Certified Ethical Hacker',
    'cert.ceh.org'    : 'EC-Council (preparation via TryHackMe)',
  }
};

/* ── Engine ─────────────────────────────────────────────── */
window.setLang = function(lang) {
  var t = window.translations[lang];
  if (!t) return;

  /* text nodes */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  /* innerHTML (bold tags etc.) */
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  /* placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var v = t[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  /* active button highlight */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active-lang', btn.dataset.lang === lang);
  });

  /* html lang attr + persist */
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  window._lang = lang;

  /* typewriter re-phrases (index page only) */
  if (window._twPhrases !== undefined) {
    window._twPhrases = [t['typewriter.0'], t['typewriter.1'], t['typewriter.2']];
  }
  /* contact form strings */
  window._i18nForm = { sending: t['form.sending'], success: t['form.success'], error: t['form.error'] };
};

/* ── Init on DOM ready ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  window.setLang(localStorage.getItem('lang') || 'fr');
});
