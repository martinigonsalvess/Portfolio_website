/*menu show y hidden */
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

/*menu show */
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/*menu hidden */
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
/*remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*scroll sections active link */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add(active);
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove(active);
    }
  });
}
/**Start GSAP */

gsap.from(".home_intro_text", {
  opacity: 0,
  duration: 1,
  y: -100,
  ease: "Power2.easeInOut",
});
gsap.from("span", {
  opacity: 0,
  duration: 1,
  y: -100,
  stagger: 0.1,
  ease: "Power2.easeInOut",
});
gsap.from(".nav_item", {
  opacity: 0,
  delay: 0.8,
  duration: 1,
  y: -50,
  stagger: 0.6,
  ease: "Power2.easeInOut",
});
gsap.from(".cv_link", {
  opacity: 0,
  delay: 1.2,
  duration: 3,
  y: -50,
  ease: "Power2.easeInOut",
});
gsap.from(".home_social", {
  opacity: 0,
  delay: 1.6,
  duration: 1,
  y: -1,
  ease: "Power2.easeInOut",
});

/**End GSAP */
