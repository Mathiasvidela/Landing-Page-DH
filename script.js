const menu = document.querySelector('#menu_icon');
const nav_bar_list = document.querySelector('.nav_bar_list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_bar_list.classList.toggle('open');
}

const sr = ScrollReveal({
    distance:'65px',
    duration: 2000,
    delay: 450,
    reset:true
})

sr.reveal('.hero_text',{delay:200,origin: 'top'});
sr.reveal('.img_hero_sr',{delay:200,origin: 'top'});
sr.reveal('.icons',{delay:500,origin: 'left'});
sr.reveal('.scroll_down',{delay:150,origin: 'right'});
sr.reveal('.nosotros',{delay:50});
sr.reveal('.services',{delay:50});
sr.reveal('.services',{delay:50});
sr.reveal('.contact',{delay:50});
// sr.reveal('.scroll_down',{delay:450,origin: 'right'});