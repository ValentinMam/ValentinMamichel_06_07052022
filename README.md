# FishEye

- Pour résumer, notre objectif est de construire un prototype fonctionnel d'un nouveau site web que nous pourrons présenter à FishEye.
- Tu seras chargé de fournir tout le HTML, le CSS et le JavaScript nécessaires au prototype.
- Notre équipe de back-end intégrera le système existant de FishEye une fois que tu auras terminé le code pour ta partie du projet.

# Notes de réunion

Lien : https://course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/Notes+de+reunion.pdf

## Fonctionnalités

### Page d'accueil :

- Liste de tous les photographes avec leur nom, leur slogan, leur
  localisation, leur prix/heure et une image miniature de leur choix.
- Lorsque l'utilisateur clique sur la vignette d'un photographe, il est
  amené à sa page.

### Page des photographes (contenu dynamique) :

- Affiche une galerie des travaux du photographe.
- Les photographes peuvent montrer à la fois des photos et des vidéos.

1. Dans le cas des vidéos, montrer une image miniature dans la
   galerie.

- Chaque média comprend un titre et un nombre de likes.

1. Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes
   affiché est incrémenté.
2. Le nombre de likes total d’un photographe doit correspondre à la
   somme des likes de chacun de ses médias.aw

- Les médias peuvent être triés par popularité ou par titre.
- Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
  lightbox :

1. Lorsque la lightbox est affichée, il y a une croix dans le coin pour
   fermer la fenêtre.
2. Des boutons de navigation permettent de passer d'un élément
   média à l'autre dans la lightbox (les utilisateurs peuvent cliquer
   sur ces boutons pour naviguer).
3. Les touches fléchées du clavier permettent également de
   naviguer entre les médias dans la lightbox.

- Afficher un bouton pour contacter le photographe.

1. Le formulaire de contact est une modale qui s'affiche par-dessus
   le reste.
2. Il comprend des champs pour les noms, l'adresse électronique et
   le message.
3. Plus tard, le bouton de contact enverra un message au
   photographe. Pour l'instant, seulement afficher le contenu des
   trois champs dans les logs de la console

## Responsive Design

“Pour cette itération, pas besoin que le site soit responsive sur mobile.”

## Accessibilité

"Il est très important que notre site soit accessible aux utilisateurs malvoyants.
Toutes nos photos doivent comporter des descriptions textuelles, et vous devez les
inclure dans la page. De plus, l'utilisateur doit pouvoir utiliser les commandes du
clavier pour naviguer sur le site, comme les touches fléchées de la lightbox".

- Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant
  que possible, au lieu de mettre des éléments <div> et <span> partout.
- Lorsque vous devez créer un élément personnalisé, ajoutez des attributs ARIA
  pour décrire ce qu'il fait.
- Les images doivent présenter un attribut “alt”. Utilisez le titre des photos pour
  remplir cet attribut, et le nom du photographe dans le cas d’une photo de
  profil de photographe.
- Le code devrait passer les tests AChecker sans “known issue” (afin qu'il soit
  conforme aux WCAG).
- Toute la gestion des événements (par exemple, les clics et les pressions au
  clavier) doit être configurée (utilisez KeyboardEvent.key ou
  KeyboardEvent.code.).
- Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que
  représente l'utilisation du site pour une personne malvoyante.

## Contraintes techniques

- Le code est séparé en différents fichiers (HTML, CSS, JavaScript).
- ESLint est utilisé (avec les paramètres par défaut) pour garantir que le
  code est robuste. Ceci est particulièrement facile à intégrer avec l'IDE
  VSCode.
- Une version moderne (ES6 ou supérieure) de JavaScript est utilisée et
  les fonctionnalités obsolètes ne sont pas utilisées.

# maquettes

Lien : https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0%3A1

Points importants :

- page index (header/banner + main)
- page photographer (header/banner + main)

- couleurs primaires : #901C1C + #D3573C
- couleurs secondaires : #D3573C + #525252 / #FAFAFA + #901C1C

# photos et vidéos

- téléchargés => dossier assets/photographers/...

# données JSON

- fichier photographers.json

# Echanges avec Zoé

Amanda a mentionné que FishEye a des vidéos et des photos pour le photographe. Pour ça il faudra que tu utilises un pattern Factory Method, ça sera idéal pour créer les media en distinguant les vidéos des photos.
