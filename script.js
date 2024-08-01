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
    ease: "power4.out"
  }
)

gsap.from(
  ".cours_types-de-cours-proposes_item",
  {
    scale: 0,
    opacity: 0,
    stagger: {amount: 5, from: "random"},
    duration: 1,
    ease: "power4.out"}
  }
)

