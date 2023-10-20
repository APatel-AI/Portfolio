
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



    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
       
      },
  });


//   email
  const contactForm = document.getElementById('contact-form'), 
  contactName = document.getElementById('contact-name'), 
  contactEmail = document.getElementById('contact-email'), 
  contactProject = document.getElementById('contact-project'), 
  contactMessage = document.getElementById('contact-message')



const sendEmail = (e) => {
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' ){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Please complete all input fields '
    }else{
        // TemplateID, templateID, #form, 
        emailjs.sendForm('service_yx6aldb','template_cflrsqg','#contact-form', 'Uz41UjpIUG3c7HJdH')

        .then(()=> {
            // Message sent success
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message Sent 🎉 '
            // Timer for message
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {
            alert('Error, please try again later !', error)
        })

        // clear input field after form submission
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
 }

  contactForm.addEventListener('submit', sendEmail)


//   Scroll section
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector(`.nav__menu a[href="#${sectionId}"]`)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);


// show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Dark Light toggle



// Dark Light toggle
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx bx-sun';

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () => getCurrentTheme() === 'dark' ? 'bx-sun' : 'bx-moon';

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  const newIcon = getCurrentIcon(); // Get the new icon class
  themeButton.classList.remove('bx-sun', 'bx-moon'); // Remove both possible icon classes
  themeButton.classList.add(newIcon); // Add the new icon class
});

// scroll reveal

const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px', 
    duration: 2500, 
    delay: 400, 
    //  reset: true, //animations repeat
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info`, {delay: 600, origin: 'bottom', interval:100} )
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'} )
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'} )
sr.reveal(`.cred__content:nth-child(1)`, {interval:100 , origin: 'top'} )
sr.reveal(`.cred__content:nth-child(2)`, {interval:10 , origin: 'bottom'} )

const typedText = document.getElementById('typed-text');
const cursor = '<span class="cursor"></span>';
const textArray = ["Fullstack Developer" + " & UI/UX Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (textIndex < textArray.length) {
    if (charIndex < textArray[textIndex].length) {
      typedText.innerHTML += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typedText.innerHTML += ' ' + cursor;
      textIndex++;
      charIndex = 0;
      setTimeout(removeCursor, 5000); // 
    }
  }
}

function removeCursor() {
  const cursorElement = document.querySelector('.cursor');
  if (cursorElement) {
    cursorElement.style.display = 'none'; 
  }
}

type();



