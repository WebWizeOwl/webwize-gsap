window.addEventListener('load', function() {

  
  // Timelines de chargement de page
  let loadTimeline = gsap.timeline();
  let loopTimelineBreathing = gsap.timeline({repeat: -1, yoyo: true, paused: true});
  $(".section-staggered_fade_in_animation").each(function(){
    let staggeredFadeInTimeline = gsap.timeline(
    {
      scrollTrigger: 
        {
          trigger: $(this), 
          start: "top bottom", 
          end: "top 65%", 
          markers: false,
          // play pause resume reset restart complete reverse none
          toggleActions: "none play none reset",
        }
    }
  )
     staggeredFadeInTimeline.from(
    $(this).find(".staggered_fadein-wrapper"), {
      opacity: 0,
      scale: 0.7,
      duration: 0.5,
      stagger: 
      {
        each: 0.25,
        from: "center",
      }
    }
  )
  })
  
  let floatingImageCoupleTimeline = gsap.timeline(
    {
      scrollTrigger: {
        trigger: ".section_floating_image_couple",
        start: "top 30%",
        end: "bottom",
        markers: true,
        scrub: 2,
      }    
    }
  )
  
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
      duration: 2,
      ease: "sine.inOut",
    }
  )

 

  floatingImageCoupleTimeline.to(
    ".floating-image_1",
    {
      y: "-6rem"
    }
  )

  floatingImageCoupleTimeline.to(
    ".floating-image_2",
    {
      y: "-3rem"
    },
    0
  )

  
});





