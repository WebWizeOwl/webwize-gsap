window.addEventListener('load', function() {
  
  gsap.set(
    ".scaling-button",
    {
      scale: 0,
      opacity: 0,
    }
  );

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

  gsap.to(
    ".scaling-fadein",
    {
      scale: 1,
      opacity: 1,
    },
    2
  )

  // Apparition d'image
  loadTimeline.from(
    ".cours_nos-cours-d-equitation_image",
    {
      opacity: 0,
      borderRadius: "50%",
      duration: 1,
      ease: "power4.out",
    }
  )
});
