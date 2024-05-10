const options = {
  'damping' : 0.05
}

Scrollbar.init(document.querySelector('#main0'), options)

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

//caling the func
firstanimationoftheloafingpage()
mainTextAnimationOnPage1()
secoundanimationoftheloadingpage()
paraAnimationoftheloadingpage()
imgLoadingAnimation()
navbarMainElementAnimation()
navbarPart2Animation()