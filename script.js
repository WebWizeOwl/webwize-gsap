window.addEventListener('load', function() {
  // Anime l'affichage de l'élément en le faisant apparaitre en glissant vers le haut
  gsap.from(
    ".headline-component", 
    {
      opacity: 0,
      y: "6rem",
      duration: 1,
      ease: "power4.out"
    }
  );

  // Animation de scale-in et de fade-in
  gsap.fromTo(
    ".scaling-button", 
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power4.out"
    }
  );

  
  // Apparition d'image
  gsap.from(
    ".cours_nos-cours-d-equitation_image",
    {
      opacity: 0,
      borderRadius: "50%",
    }
  )
});
