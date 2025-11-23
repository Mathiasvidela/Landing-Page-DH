/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('menu_toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav_bar_list a');


// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navToggle.checked){
            navToggle.checked = false;
        }
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_bar_list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_bar_list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('.nav_bar')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    // reset: true 
})

sr.reveal('.hero_text, .nosotros_img')
sr.reveal('.img_hero', {delay: 500})
sr.reveal('.float_icon', {delay: 800, interval: 200})
sr.reveal('.nosotros_text', {origin: 'right'})
sr.reveal('.s_card', {interval: 100})
sr.reveal('.testimonial_card', {interval: 100})
sr.reveal('.faq_item', {interval: 100})
sr.reveal('.cta_content', {origin: 'bottom', scale: 0.9})
sr.reveal('.contact_content', {origin: 'bottom'})
sr.reveal('.footer_nav', {origin: 'bottom'})

/*==================== NUMBER COUNTER ANIMATION ====================*/
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = Math.ceil(count + inc);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	// Trigger animation when element is in view
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                updateCount();
                observer.unobserve(entry.target);
            }
        })
    }, { threshold: 1.0 });
    
    
    observer.observe(counter);
});

/*==================== MODAL LOGIC ====================*/
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const serviceCards = document.querySelectorAll('.s_card');

// Service Data
const serviceData = {
    "Jubilaciones": "Nos encargamos de todo el proceso jubilatorio, desde el análisis de tu situación previsional hasta la obtención del beneficio. Realizamos cálculos de haberes, moratorias y reconocimientos de servicios para asegurar que recibas lo que te corresponde.",
    "Asociaciones": "Brindamos soporte integral a asociaciones civiles, clubes y ONGs. Gestionamos la obtención de personería jurídica, rúbrica de libros, presentación de balances y cumplimiento de normativas ante la Dirección de Personas Jurídicas.",
    "Monotributo": "Te asesoramos en la inscripción, recategorización y bajas del Monotributo. Mantenemos tu cuenta al día, gestionamos tus facturas electrónicas y te alertamos sobre vencimientos para evitar multas y exclusiones.",
    "Fundaciones": "Asesoramiento especializado en la constitución y administración de fundaciones. Te guiamos en la redacción de estatutos, planes trienales y en la presentación de documentación contable y legal requerida por los organismos de control.",
    "Sociedades": "Constitución de S.A., S.R.L. y S.A.S. Asesoramiento en reformas estatutarias, aumentos de capital, disoluciones y liquidaciones. Llevamos la contabilidad y los libros societarios al día.",
    "Impositivo": "Liquidación de impuestos nacionales (IVA, Ganancias, Bienes Personales) y provinciales (Ingresos Brutos). Planificación fiscal para optimizar tu carga tributaria dentro del marco legal vigente.",
    "Laboral": "Liquidación de sueldos y cargas sociales. Altas y bajas de empleados, confección de legajos y asesoramiento en materia de derecho laboral y convenios colectivos de trabajo.",
    "Empresas": "Soluciones contables a medida para PyMEs y grandes empresas. Auditorías, balances anuales, informes de gestión y asesoramiento financiero para la toma de decisiones estratégicas.",
    "Responsables Inscriptos": "Gestión integral para Responsables Inscriptos. Liquidación de impuestos mensuales y anuales, regímenes de información y atención a requerimientos de AFIP.",
    "Monotributistas y Emprendedores": "Acompañamos a los emprendedores en sus primeros pasos. Te ayudamos a formalizar tu negocio, elegir la categoría adecuada y cumplir con tus obligaciones fiscales de manera sencilla."
};

// Open Modal
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const description = serviceData[title] || "Contáctanos para más información sobre este servicio.";
        
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close Modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);

// Close on overlay click
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

/*==================== FAQ ACCORDION ====================*/
const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq_question');
    const answer = item.querySelector('.faq_answer');
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq_answer').style.maxHeight = null;
            }
        });

        // Toggle current item
        if (isOpen) {
            item.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
