window.addEventListener('load', function() {

  // TIMELINE DE CHARGEMENT DE PAGE
  let loadTimeline = gsap.timeline();
  
  // Animation du composant titre principal
  loadTimeline.from(".headline-component", {
    opacity: 0,
    y: "6rem",
    duration: 1,
    ease: "power4.out",
  });
  
  // ANIMATION D'APPARITION D'IMAGE AVEC EFFET DE RESPIRATION EN BOUCLE
  let loopTimelineBreathing = gsap.timeline({repeat: -1, yoyo: true, paused: true});
  
  loadTimeline.from(".big_image_appearance-wrapper", {
    opacity: 0,
    borderRadius: "50%",
    duration: 1,
    ease: "power4.out",
    onComplete: loopTimelineBreathing.play(),
  }, "<0.5");

  // Effet de respiration en boucle pour plusieurs images
  loopTimelineBreathing.to(".big_image_appearance-wrapper", {
    y: "-1rem",
    duration: 2,
    ease: "sine.inOut",
  });

  // ANIMATION FADE-IN PAR ÉCHELLE POUR PLUSIEURS SECTIONS
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

  // EFFET DE DÉFILEMENT EN DOUCEUR DE 2 IMAGES
  $(".section_floating_image_couple").each(function() {
    let floatingImageCoupleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top center",
        end: "bottom",
        markers: false,
        scrub: 2,
      }
    });
    
    floatingImageCoupleTimeline.to($(this).find(".floating-image_1"), {
      y: "-6rem"
    }, 0);
    
    floatingImageCoupleTimeline.to($(this).find(".floating-image_2"), {
      y: "-3rem"
    }, 0);
  });
  
  // ANIMATIONS FADE-IN AVEC SCALING POUR PLUSIEURS ÉLÉMENTS
  $(".scaling-fadein").each(function() {
    gsap.from($(this), {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  });

  // ANIMATION AU SCROLL D'AGRANDISSEMENT DE COLONNE DE GAUCHE ET DE RAPEUTISSEMENT DE COLONNE DE DROITE
  let growShrinkTimeline = gsap.timeline(
    {
      scrollTrigger : {
        trigger: ".section-symetric_shrink_right_and_grow-left",
        start: "top 80%",
        end: "80% 50%",
        markers: true,
        scrub: 2,
      }
    }
  )
  gsap.set(
    ".symetric-shrink",
      {
        scale: 0.7,
        rotationY: 100,
        rotationX: 80,
      }
  )
  growShrinkTimeline.to(
    ".symetric-shrink",
    {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
    }
  )

  growShrinkTimeline.to(
    ".symetric-grow",
    {
      scale: 1.15,
    }, 0
  )
  

  
  
  
  // FONCTION D'ANIMATION DE TEXTE EFFET MANUSCRIT / ÉCRITURE PROGRESSIVE
  function animateText(element, delay = 0) {
    const words = element.textContent.split(" ");
    element.innerHTML = ""; // Efface le contenu textuel

    // Enveloppe chaque mot dans un span et l'ajoute à l'élément
    words.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      element.appendChild(span);
    });

    // Crée une timeline GSAP
    let tl = gsap.timeline({ delay: delay });

    // Ajoute chaque animation de mot à la timeline
    tl.from(element.querySelectorAll("span"), {
      opacity: 0,
      y: 20,
      ease: "power2.out",
      duration: 0.5,
      stagger: { amount: 2 }
    });
  }

  // Fonction pour réinitialiser le texte
  function resetText(element) {
    gsap.set(element.querySelectorAll("span"), { opacity: 0, y: 20 });
  }

  // Callback de l'Intersection Observer
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

  // Configuration de l'Intersection Observer
  const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.1
  });

  // Observer tous les éléments avec les attributs personnalisés
  document.querySelectorAll("[data-handwritten-effect='true'], [data-delayed-handwritten-effect='true']").forEach(element => {
    resetText(element); // Assure que l'état initial est réinitialisé
    observer.observe(element);
  });

});
