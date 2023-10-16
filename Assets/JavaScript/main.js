
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




