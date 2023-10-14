const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


// Menu show; 
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    })
}

// Menu hidden;

if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    });
};


// remove menu mobile; 
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// Swiper

let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // use arrow to go through the projects
    keyboard: true,
  });