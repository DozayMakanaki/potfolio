const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=================================remove menu mobile================*/
const navLink = document.querySelectorAll('.navL__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link we remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*================SWIPER PROJECTS====================*/
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
        1200:{
            slidesPerView: 2,
            spaceBetween: -56,
        },
       
},
}
);

/*===============SWIPER TESTIMONIAL===================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

/*================EMAILJS================*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //check if the field has a value
    if(contactName.value === ''|| contactEmail.value === '' || contactProject.value === '' ){
        //add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //SHOW MESSAGE
        contactMessage.textContent = 'Write all the input fields '
    }else 
    //serviceID TEMPLATE
    
    emailjs.sendForm('service_v13yg73','template_1hq6etl','#contact-form','pg09Mt7R3DRf_Tz1N')
    .then(() =>{
        //show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent✅'

        //remove message after 5 seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

    }, (error) =>{
        alert('OOPS! SOMETHING WENT WRONG....', error)
    })

    //to clear the input 
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
    }


contactForm.addEventListener('submit', sendEmail)

/*===============scroll sections active link===========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight, 
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scollY > sectionTop && scollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============shoe scroll up===================*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 35o view point , add the show scroll clas 

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

//dark theme 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
 
// we obtain current theme that the interfac has by validating  the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously  chose a topic
if (selectedTheme){
    //if the alidation is fufilled, we ask what the issue was to knw if we activated 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-linr' ? 'add' : 'remove'](iconTheme)
}

//activate/deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
})

//change  background header
const scrollHeader = () => {
    const header = document.getElementById('header')
    //when scroll is grater than 50 viewport height, add the scroll- header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

}
window.addEventListener('scroll', scrollHeader)

//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //rese: true /*animations repeAT
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin:'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'up'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'down'})
sr.reveal(`.qualification__content, services__card`, {interval: '100'})