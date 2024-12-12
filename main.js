//header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0 )
});

// menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//removes menu on click
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset : true
})

sr.reveal('.home-text',{origin: 'up'})
sr.reveal('.home-img',{origin: 'down'})
sr.reveal('.heading',{delay: 200})
sr.reveal('.style-details .box',{origin: 'left', interval:200})
sr.reveal('.style-img',{delay: 600})
sr.reveal('.shop-container .box, .footer, .logo, .footer .footer-box',{interval:150})
