window.addEventListener('load', function() {

  let loadTimeline = gsap.timeline();
  // Anime l'affichage de l'élément en le faisant apparaitre en glissant vers le haut
  loadTimeline.from(
    ".headline-component", 
    {
      opacity: 0,
      y: "6rem",
      duration: 1,
      ease: "power4.out",
    }
  );

  // Animation de scale-in et de fade-in
  loadTimeline.from(
    ".scaling-button", 
    {
      scale: 0.5,
      opacity: 0.5,
      duration: 1,
      ease: "power4.out",
    },
    "<0.5"
  );

  
  // Apparition d'image
  loadTimeline.from(
    ".cours_nos-cours-d-equitation_image",
    {
      opacity: 0,
      borderRadius: "50%",
      duration: 1,
      ease: "power4.out",
    },
    "<0.5"
  )
});
