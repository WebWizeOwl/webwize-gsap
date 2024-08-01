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

  gsap.fromTo(
    ".scaling-button", 
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
      ease: "power4.out"
    }
  );

  gsap.from(
    ".cours_types-de-cours-proposes_item", 
    {
      scale: 0,
      opacity: 0,
      stagger: 
      {
        amount: 1,
        from: "random"
      },
      duration: 0.5,
      ease: "power4.out"
    }
  );
});
