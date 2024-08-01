window.addEventListener('load', function() {

  // TIMELINE 
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
  
  // EFFET SMOOTH AU SCROLL DE 2 IMAGES
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
  
  // TIMELINE DE CHARGEMENT DE PAGE
  let loadTimeline = gsap.timeline();
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

  // FONCTION D'ANIMATION DE TEXTE EFFET MANUSCRIT / ECRITURE PROGRESSIVE
    function animateText(element, delay = 0) {
      const words = element.textContent.split(" ");
      element.innerHTML = ""; // Clear the text content

      // Wrap each word in a span and append to the element
      words.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        element.appendChild(span);
      });

      // Create a GSAP timeline
      let tl = gsap.timeline({ delay: delay });

      // Add each word animation to the timeline
      tl.from(element.querySelectorAll("span"), {
        opacity: 0,
        y: 20,
        ease: "power2.out",
        duration: 0.5,
        stagger: {amount: 2}
      });
    }

    // Function to reset text
    function resetText(element) {
      gsap.set(element.querySelectorAll("span"), {opacity: 0, y: 20});
    }

    // Intersection Observer callback
    function intersectionCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.hasAttribute('data-delayed-handwritten-effect') ? 1.2 : 0;
          animateText(entry.target, delay);
        } else {
          resetText(entry.target);
        }
      });
    }

    // Set up Intersection Observer
    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.1
    });

    // Observe all elements with the custom attributes
    document.querySelectorAll("[data-handwritten-effect='true'], [data-delayed-handwritten-effect='true']").forEach(element => {
      resetText(element); // Ensure initial state is reset
      observer.observe(element);
    });

});

