
// Hiding preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hidePreloader');
    document.body.style.overflow = "visible";
});

// navbar toggle
const navBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');
navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('toggleNav');
});

// typewriter
let app = document.getElementById('typeEffect');
let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I\'m James Rodriguez')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m Web Developer')
    .pauseFor(2500)
    .start();


// stopping transition during resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-transition-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-transition-stopper');
    }, 400);
});

// showing navbar after scrolling
window.addEventListener('scroll', () => {
    let position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbar = document.querySelector('.navbar');
    if(position >= 800){
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
});

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})