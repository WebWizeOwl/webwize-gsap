window.addEventListener('load', function() {

  
  // Timelines de chargement de page
  let loadTimeline = gsap.timeline();
  let loopTimelineBreathing = gsap.timeline({repeat: -1, yoyo: true, paused: true});
  
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
  
  // Apparition d'image
  loadTimeline.from(
    ".cours_nos-cours-d-equitation_image",
    {
      opacity: 0,
      borderRadius: "50%",
      duration: 1,
      ease: "power4.out",
      onComplete: loopTimelineBreathing.play(),
    },
    "<0.5"
  );


  // Apparition scalin-fadein
  gsap.from(
    ".scaling-fadein",
    {
      scale: 0,
      opacity: 0,
    },
    1.5
  );
  
  loopTimelineBreathing.to(
    ".cours_nos-cours-d-equitation_image",
    {
      y: "-1rem",
      duration: 2.5,
      ease: "power3.inOut",
    }
  )
});



