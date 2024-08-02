# Librairie d'animation GSAP de WebWize

Ce dépôt stocke les animations GSAP utilisées par WebWize dans ses projets Webflow.

---

## Utilisation dans les projets Webflow

La librairie d'animation GSAP de WebWize est conçue pour être utilisée dans les projets Webflow. Le code d'animation doit être collé dans le code de la page. Il est recommandé de le placer dans la section "Footer" pour s'assurer que les animations se chargent après le chargement complet du DOM, ce qui peut améliorer les performances et éviter les problèmes de rendu.


### Exemple d'intégration dans Webflow

Placez le code suivant dans la section "Footer Code" de votre projet Webflow :

```html
<script src="https://webwize-gsap.vercel.app/edm/services-gsap.js"></script>
```

---

## Lien vers le framework GSAP

Selon le type d'animations que vous souhaitez utiliser dans votre projet, vous devez lier les scripts GSAP appropriés. Voici les liens vers les scripts actuellement utilisés :

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js"></script>
```

---

## Organisation du dépôt

Chaque projet a son propre dossier (comme `edm` sur la capture d'écran), contenant le code d'animation approprié pour une page spécifique. Voici comment organiser le dépôt :

- Nommez le fichier de code d'animation de la manière suivante : `pagename-gsap.js`
- Nommez le dossier de manière à ce qu'il soit reconnaissable pour le projet


### Exemple de structure de dépôt

```
/webwize-gsap
  /edm
    services-gsap.js
  README.md
  gsap-animation-library.js
  index.html
```

---

## Déploiement avec Vercel

Le dépôt est connecté à un compte Vercel pour héberger et déployer le code plus rapidement que l'utilisation de GitHub Pages. Cela permet des itérations plus rapides sur Webflow.


### URL de base pour utiliser le code déployé

```html
<script src="https://webwize-gsap.vercel.app/edm/services-gsap.js"></script>
```

Remplacez `edm/services-gsap.js` par le chemin approprié pour le fichier d'animation que vous souhaitez utiliser.

---

## Implémentation des animations

### Types d'animations

Voici un aperçu des types d'animations disponibles et comment les implémenter :

1. **Animations par échelonnement (Staggered Fade-In Animation)**
    - Utilisez la classe `section-staggered_fade_in_animation` pour le conteneur.
    - Utilisez la classe `staggered_fadein-wrapper` pour les éléments à animer.

    ```html
    <div class="section-staggered_fade_in_animation">
      <div class="staggered_fadein-wrapper">Élément 1</div>
      <div class="staggered_fadein-wrapper">Élément 2</div>
      <div class="staggered_fadein-wrapper">Élément 3</div>
    </div>
    ```

2. **Effet de défilement en douceur de 2 images (Smooth Scroll Effect for Images)**
    - Utilisez la classe `section_floating_image_couple` pour le conteneur.
    - Utilisez les classes `floating-image_1` et `floating-image_2` pour les images à animer.

    ```html
    <div class="section_floating_image_couple">
      <img class="floating-image_1" src="image1.jpg">
      <img class="floating-image_2" src="image2.jpg">
    </div>
    ```

3. **Animations de texte effet manuscrit (Handwritten Text Animation)**
    - Utilisez l'attribut `data-handwritten-effect='true'` ou `data-delayed-handwritten-effect='true'` sur les éléments de texte.

    ```html
    <div data-handwritten-effect="true">Texte à animer</div>
    <div data-delayed-handwritten-effect="true">Texte à animer avec délai</div>
    ```

### Exemple complet

Voici un exemple de page Webflow avec les différentes animations intégrées :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page avec animations GSAP</title>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js"></script>
</head>
<body>
  <div class="section-staggered_fade_in_animation">
    <div class="staggered_fadein-wrapper">Élément 1</div>
    <div class="staggered_fadein-wrapper">Élément 2</div>
    <div class="staggered_fadein-wrapper">Élément 3</div>
  </div>
  
  <div class="section_floating_image_couple">
    <img class="floating-image_1" src="image1.jpg">
    <img class="floating-image_2" src="image2.jpg">
  </div>
  
  <div data-handwritten-effect="true">Texte à animer</div>
  <div data-delayed-handwritten-effect="true">Texte à animer avec délai</div>

  <script src="https://webwize-gsap.vercel.app/edm/services-gsap.js"></script>
</body>
</html>
```

Avec ces instructions et exemples, vous pouvez facilement intégrer les animations GSAP dans vos projets Webflow et utiliser cette bibliothèque d'animations GSAP de WebWize.
