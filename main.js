

function firstanimationoftheloafingpage() {
  const firstanimationoftheloafingpage = document.querySelector('.name')
  gsap.from(firstanimationoftheloafingpage, {
    y: 100,
    opacity: -1,
    delay: 0.5,
    duration: 1,
  })
}

function mainTextAnimationOnPage1() {
  const mainText = new SplitType('#main-text')
  gsap.from('.char', {
    y: 100,
    stagger: 0.1,
    delay: 1,
    duration: 1,
    opacity: 0,
    ease:'back.out(2)'
  })
  
}

function secoundanimationoftheloadingpage() {
  const secoundanimationoftheloadingpage = document.querySelector('.name2')
  gsap.from(secoundanimationoftheloadingpage, {
    y : 100,
    opacity: -1,
    duration:1.5,
    delay: 1.4
  })
}

function paraAnimationoftheloadingpage() {
  const paraAnimationoftheloadingpage = document.querySelector('.para')
  gsap.from(paraAnimationoftheloadingpage, {
    y: 50,
    opacity:0,
    duration: 1.5,
    delay: 3,
  })
}
function imgLoadingAnimation() {
  gsap.to('#img1', {
    y: 300,
    delay: 0.5,
    duration: 0.5,
    opacity: 1
  })
}

function navbarMainElementAnimation() {
  gsap.from("#navbar h1", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5
  })
}

function navbarPart2Animation() {
  const navbarPart2Animation = document.querySelectorAll("nav-part2 li a")
  gsap.to(navbarPart2Animation, {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.4
  })
}

gsap.registerPlugin(ScrollTrigger)

function htmlServices() {
  gsap.from(".HTML-services h2", {
    scrollTrigger: ".HTML-services h2",
    y: 100,
    opacity: 0,
    delay: 0.1,
    duration: 1,
  })
}

function cssServices() {
  gsap.from(".CSS-services h2", {
    scrollTrigger: ".CSS-services h2",
    y: 100,
    opacity: 0,
    delay: 0.1,
    duration: 1,
  })
}

function jsServices() {
  gsap.from(".JS-services h2", {
    scrollTrigger: ".JS-services h2",
    y: 100,
    opacity: 0,
    delay: 0.1,
    duration: 1,
  })
}

function servicesTextAnimation() {
  gsap.from(".page2 h1", {
    scrollTrigger:{
      trigger: ".page2 h1",
      start: "top 90%"
    },
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  })
}

function skillsLoadingAnimaionDisplay() {
  gsap.from(".main-skill-display", {
    scrollTrigger: ".main-skill-display",
    delay: 1,
    duration: 2,
  })
}

function skillsHTMLmainTextLoader() {
  gsap.from(".text-of-skill-HTML", {
    scrollTrigger: ".text-of-skill-HTML",
    opacity: 0,
    y: 100,
    delay: 1,
    duration: 2,
  })
}

function skillsCSSmainTextLoader() {
  gsap.from(".text-of-skill-CSS", {
    scrollTrigger: ".text-of-skill-CSS",
    opacity: 0,
    y: 100,
    delay: 1,
    duration: 2,
  })
}

function skillsJSmainTextLoader() {
  gsap.from(".text-of-skill-JS", {
    scrollTrigger: ".text-of-skill-JS",
    opacity: 0,
    y: 100,
    delay: 1,
    duration: 2,
  })
}

//caling the func
firstanimationoftheloafingpage()
mainTextAnimationOnPage1()
secoundanimationoftheloadingpage()
paraAnimationoftheloadingpage()
imgLoadingAnimation()
navbarMainElementAnimation()
navbarPart2Animation()
htmlServices()
cssServices()
jsServices()
servicesTextAnimation()
skillsLoadingAnimaionDisplay()
skillsHTMLmainTextLoader()
skillsJSmainTextLoader()
skillsCSSmainTextLoader()