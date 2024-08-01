console.log("hello world")

// Anime l'affichage de l'élément en le faisant apparaitre en glissant vers le haut
gsap.from(
  "#upslide-fadein", {
    opacity: 0,
    y: "6rem",
    duration: 1,
    ease: "power4.out"}
)

gsap.from("#delayed-scale",
  {
    scale: 0,
    duration: 1,
  }
)


