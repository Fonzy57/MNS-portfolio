# Portfolio Stéphane SCHEERES

Portfolio fait uniquement avec **HTML 5**, **CSS 3** et **Javascript** _(vanilla)_.  
Aucun framework ou librairies utilisés (sauf boxicons pour les icones).

Les projets de la section `projects` de la page d'acceuil, sont ceux que j'ai fait durant mon emploi chez Ilium en tant que développeur web (pendant 3 ans).

## Organisation des dossiers et fichiers :

- Dans le dossier `js` vous trouverez les différents fichiers javascript.

- Dans le dossier `pages` vous trouverez les différentes pages HTML du projet.

- Dans le dossier `public` il y a les images et mon CV au format PDF.

- Dans le dossier `styles` vous trouverez tous les fichiers CSS.  
  Un fichier CSS `app.css` pour le style global de l'application et un fichier CSS par section pour maintenir plus facilement le projet.

## Spécificités

- Sur mon CV (fichier PDF), j'ai volontairement enlevé mon adresse et mon numéro de téléphone comme le repo github est public.
- Pour le formulaire :
  - J'ai omis volontairement les `required` en HTML afin de faire les vérifications des inputs en Javascript
  - L'input email à `type="text"` à la place de `type="email"`, car je fais la vérification en javascript à l'aide d'une regex, changement volontaire de ma part
  - Dans le fichier `form.js` il y a un timeout qui a été ajouté pour simuler l'envoie du message
  - Pour voir les informations récupérées des inputs (s'il n'y a pas d'erreurs dans le formulaire et que le message a bien été envoyé), ouvrir la console du navigateur.
