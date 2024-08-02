window.addEventListener('load', function() {

  // ANIMATION NAVBAR BATTANT DE PORTE

  let doorWingTimeline = gsap.timeline()
  
  doorWingTimeline.set(
    ".navbar",
    {
      opacity: 0,
      rotateX: -90,
      backgroundColor: "#482e33",
      transformOrigin: "top",
    }
  )

  doorWingTimeline.to(
    ".navbar",
    {
      opacity: 100,
      rotateX: 0,
      duration:2.5,
      ease: "elastic.out(1,0.3)",
    }
  )
  
})
