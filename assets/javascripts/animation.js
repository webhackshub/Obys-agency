const loaderAnimation = () => {
  const tl = gsap.timeline();

  gsap.from(".text h1", {
    y: 150,
    stagger: 0.25,
  });

  gsap.to(".loader", {
    delay: 4,
    y: -1500,
    opacity: 0,
    duration: 1.5,
  });

  tl.to(".text", {
    delay: 3,
    opacity: 0,
    stagger: 0.25,
  });

  tl.from(".home-text h1", {
    y: 120,
    stagger: 0.15,
  });
};
// loaderAnimation();

const mouseCursor = () => {
  const website = document.querySelector("body");
  website.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      top: dets.y,
      left: dets.x,
    });
  });
};
mouseCursor();

const makeMagnet = () => {
  Shery.makeMagnet(".nav-magnet");
};
makeMagnet();
