gsap.from(".text h1",{
  y: 150,
  stagger: .25
})

gsap.to(".loader",{
  delay: 4,
  y: -1500,
  opacity: 0,
  duration: 1
})

gsap.to(".text",{
  delay: 3,
  opacity: 0,
  stagger: .25
})