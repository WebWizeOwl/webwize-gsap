window.addEventListener('load', function() {
  
  // Timelines de chargement de page
  let loadTimeline = gsap.timeline();
  let loopTimelineBreathing = gsap.timeline({repeat: -1, yoyo: true, paused: true});
  
  // Staggered fade-in animations for multiple sections
  $(".section-staggered_fade_in_animation").each(function() {
    let staggeredFadeInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "top 65%",
        markers: false,
        toggleActions: "none play none reset",
      }
    });
    
    staggeredFadeInTimeline.from($(this).find(".staggered_fadein-wrapper"), {
      opacity: 0,
      scale: 0.7,
      duration: 0.5,
      stagger: {
        each: 0.25,
        from: "center",
      }
    });
  });
  
  // Floating image couple animations for multiple sections
  $(".section_floating_image_couple").each(function() {
    let floatingImageCoupleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 30%",
        end: "bottom",
        markers: false,
        scrub: 2,
      }
    });
    
    floatingImageCoupleTimeline.to($(this).find(".floating-image_1"), {
      y: "-6rem"
    });
    
    floatingImageCoupleTimeline.to($(this).find(".floating-image_2"), {
      y: "-3rem"
    }, 0);
  });
  
  // Headline component animation
  loadTimeline.from(".headline-component", {
    opacity: 0,
    y: "6rem",
    duration: 1,
    ease: "power4.out",
  });
  
  // Image appearance animation with looping breathing effect
  loadTimeline.from(".big_image_appearance-wrapper", {
    opacity: 0,
    borderRadius: "50%",
    duration: 1,
    ease: "power4.out",
    onComplete: loopTimelineBreathing.play(),
  }, "<0.5");
  
  // Scaling fade-in animations for multiple elements
  $(".scaling-fadein").each(function() {
    gsap.from($(this), {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  });
  
  // Looping breathing effect for multiple images
  loopTimelineBreathing.to(".big_image_appearance-wrapper", {
    y: "-1rem",
    duration: 2,
    ease: "sine.inOut",
  });

});

