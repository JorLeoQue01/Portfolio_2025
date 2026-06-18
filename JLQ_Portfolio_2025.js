// ==========================================
// 1. SISTEMA DE TRADUCCIÓN (DICCIONARIO)
// ==========================================
const translations = {
    es: {
        profession: "Artista 3D Generalista",
        about: "Hola. soy Jorge, un artista generalista 3D y programador Front-End. Tengo experiencia en modelado 3D y texturizado de objetos y personajes, así como en la creación de interfaces interactivas para aplicaciones móviles.",
        btnCv: "Descargar CV",
        btnContact: "Contacto",
        titleExp: "Experiencia Laboral",
        titleEdu: "Educación",
        titleServices: "Mis Servicios",
        titleSkills: "Mis Habilidades",
        titleProjects: "Mis proyectos",
        titleContact: "Contacto",
        // Contenidos específicos de Experiencia (en orden de aparición)
        exp: [
            { role: "Creador de recursos digitales - Ílmex", desc: "Prácticas <b>FCT</b> pertenecientes al CFGS de <b>A2D3DVEI</b>. Realización de montajes audiovisuales y modelado de elementos 3D para RRSS." },
            { role: "Artista 3D - PROMVI Games", desc: "Modelado 3D y texturizado de vehículos, armas y otros props para el videojuego <b> World Titan War </b>." },
            { role: "Programador Informático - Ayto. Cañada Rosal", desc: "Desarrollo y diseño de interfaz en Figma y Android Studio para la app <b>\"Colonos Felinos\"</b>." }
        ],
        // Contenidos de Educación (en orden de aparición)
        edu: [
            { title: "CFGS A2D3DVEI - I.E.S. Ángel de Saavedra", desc: "Ciclo Formativo de Grado Superior en Animación 2D, 3D, Videojuegos y Entornos Interactivos." },
            { title: "Máster Modelado 3D - EVAD", desc: "Master en animación y modelado 3D. <br>Profundización de conceptos a nivel técnico orientados al trabajo en la industria del videojuego." },
            { title: "IFCD 0111 - Ayto. Cañada Rosal", desc: "Programación en lenguajes estructurados de aplicaciones de gestión. Nivel 3" },
            { title: "IFCD 0112 - Ayto. Cañada Rosal", desc: "Programación con lenguajes orientados a objetos y bases de datos relacionales. Nivel 3" },
            { title: "Diploma en Creación de Videojuegos - Universidad de Málaga", desc: "Especialidad en Arte y Programación. Desarrollo de habilidades de carácter generalista para el trabajo en videojuegos." }
        ],
        // Contenidos de Servicios
        services: [
            { title: "Modelado 3D - Low / High poly", desc: "Elaboración de modelos 3D para videojuegos o animación a medida, tanto de objetos como de personajes." },
            { title: "Texturizado", desc: "Realización de texturas para modelos 3D, desde cartoon hasta semi-realistas, adaptadas a las necesidades del proyecto." },
            { title: "Diseño de interfaces", desc: "Diseño de interfaces para aplicaciones móviles y web, con un enfoque en la usabilidad y la estética." },
            { title: "Edición de vídeo", desc: "Edición de vídeos y creación de montajes audiovisuales para YouTube o RRSS." }
        ],
        // Proyecto
        projectTitle: "Flechas elementales",
        projectLink: "Ver modelo en 3D",
        projectAbout: "Sobre el proyecto:",
        projectDesc: "Pequeño estudio personal sobre toon shading y efectos de partículas. El objetivo era crear un conjunto de flechas elementales con efectos de fuego, hielo, electricidad y veneno.",
        projectBtnDetails: "Detalles del modelo",
        projectBtnMore: "Más proyectos",
        // Contacto
        formName: "Nombre Completo",
        formMessage: "Escriba aquí su mensaje",
        formSubmit: "Enviar",
        profileLink: "Perfil"
    },
    en: {
        profession: "Generalist 3D Artist",
        about: "Hi, I'm Jorge, a generalist 3D artist and Front-End programmer. I have experience in 3D modeling and texturing of objects and characters, as well as creating interactive interfaces for mobile applications.",
        btnCv: "Download CV",
        btnContact: "Contact",
        titleExp: "Work Experience",
        titleEdu: "Education",
        titleServices: "My Services",
        titleSkills: "My Skills",
        titleProjects: "My Projects",
        titleContact: "Contact",
        exp: [
            { role: "Digital Resource Creator - Ílmex", desc: "<b>FCT</b> internship belonging to the Higher Degree in <b>A2D3DVEI</b>. Production of audiovisual montages and 3D modeling for social media." },
            { role: "3D Artist - PROMVI Games", desc: "3D modeling and texturing of vehicles, weapons, and other props for the video game <b>World Titan War</b>." },
            { role: "Computer Programmer - Cañada Rosal Town Hall", desc: "Interface design and development in Figma and Android Studio for the <b>\"Colonos Felinos\"</b> app." }
        ],
        edu: [
            { title: "Higher Degree A2D3DVEI - I.E.S. Ángel de Saavedra", desc: "Higher Vocational Training in 2D, 3D Animation, Video Games, and Interactive Environments." },
            { title: "3D Modeling Master - EVAD", desc: "Master's in 3D animation and modeling. Advanced technical concepts oriented towards the video game industry." },
            { title: "IFCD 0111 - Cañada Rosal Town Hall", desc: "Programming in structured languages for management applications. Level 3." },
            { title: "IFCD 0112 - Cañada Rosal Town Hall", desc: "Programming with object-oriented languages and relational databases. Level 3." },
            { title: "Diploma in Video Game Creation - University of Málaga", desc: "Specialization in Art and Programming. Development of generalist skills for game development." }
        ],
        services: [
            { title: "3D Modeling - Low / High poly", desc: "Custom 3D model creation for video games or animation, including both assets and characters." },
            { title: "Texturing", desc: "Texturing for 3D models, from cartoon to semi-realistic styles, tailored to project requirements." },
            { title: "UI/UX Design", desc: "Interface design for mobile and web applications, focusing on usability and aesthetics." },
            { title: "Video Editing", desc: "Video editing and audiovisual montage production for YouTube or social media." }
        ],
        projectTitle: "Elemental Arrows",
        projectLink: "View 3D Model",
        projectAbout: "About the project:",
        projectDesc: "Small personal study on toon shading and particle effects. The goal was to create a set of elemental arrows with fire, ice, electricity, and poison effects.",
        projectBtnDetails: "Model details",
        projectBtnMore: "More projects",
        formName: "Full Name",
        formMessage: "Write your message here",
        formSubmit: "Send",
        profileLink: "Profile"
    }
};

function changeLanguage(lang) {
    const data = translations[lang];

    // Perfil Izquierdo
    document.querySelector('.profile-page h3').innerText = data.profession;
    document.querySelector('.profile-page p').innerText = data.about;
    document.querySelector('.profile-page .btn-box .btn:not(.contact-me)').innerText = data.btnCv;
    document.querySelector('.profile-page .btn-box .btn.contact-me').innerText = data.btnContact;

    // Títulos de Páginas
    document.querySelector('#turn-1 .page-front .title').innerText = data.titleExp;
    document.querySelector('#turn-1 .page-back .title').innerText = data.titleEdu;
    document.querySelector('#turn-2 .page-front .title').innerText = data.titleServices;
    document.querySelector('#turn-2 .page-back .title').innerText = data.titleSkills;
    document.querySelector('#turn-3 .page-front .title').innerText = data.titleProjects;
    document.querySelector('#turn-3 .page-back .title').innerText = data.titleContact;

    // Experiencia Laboral (Modificando solo h3 y p individuales para mantener los eventos intactos)
    const expBlocks = document.querySelectorAll('#turn-1 .page-front .workeduc-content');
    expBlocks.forEach((block, index) => {
        if (data.exp[index]) {
            block.querySelector('h3').innerText = data.exp[index].role;
            block.querySelector('p').innerHTML = data.exp[index].desc;
        }
    });

    // Educación
    const eduBlocks = document.querySelectorAll('#turn-1 .page-back .workeduc-content');
    eduBlocks.forEach((block, index) => {
        if (data.edu[index]) {
            block.querySelector('h3').innerText = data.edu[index].title;
            block.querySelector('p').innerHTML = data.edu[index].desc;
        }
    });

    // Servicios
    const serviceBlocks = document.querySelectorAll('.services-content');
    serviceBlocks.forEach((block, index) => {
        if (data.services[index]) {
            block.querySelector('h3').innerText = data.services[index].title;
            block.querySelector('p').innerText = data.services[index].desc;
        }
    });

    // Proyectos
    document.querySelector('.info-title h3').innerText = data.projectTitle;
    const projectLink = document.querySelector('.info-title a');
    projectLink.innerHTML = `${data.projectLink} <i class='bx bx-link'></i>`;
    
    const projectParagraphs = document.querySelectorAll('.info-box p');
    if (projectParagraphs.length >= 2) {
        projectParagraphs[0].innerText = data.projectAbout;
        projectParagraphs[1].innerText = data.projectDesc;
    }
    document.querySelector('.portfolio-box .btn-box .btn:nth-child(1)').innerText = data.projectBtnDetails;
    document.querySelector('.portfolio-box .btn-box .btn:nth-child(2)').innerText = data.projectBtnMore;

    // Contacto
    document.querySelector('form[name="contact"] input[name="name"]').placeholder = data.formName;
    document.querySelector('form[name="contact"] textarea[name="message"]').placeholder = data.formMessage;
    document.querySelector('form[name="contact"] input[type="submit"]').value = data.formSubmit;
    document.querySelector('.back-profile p').innerText = data.profileLink;
}

// Inicializar listeners de los botones de idioma
document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (btnEs && btnEn) {
        btnEs.onclick = (e) => {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            changeLanguage('es');
        };

        btnEn.onclick = (e) => {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            changeLanguage('en');
        };
    }
});


// ==========================================
// 2. LÓGICA DE ANIMACIONES (TU CÓDIGO ORIGINAL)
// ==========================================

// turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
            page.classList.add('turn');
        }, (index + 1) * 200 + 100)
    })
}

// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2000)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2500)

// opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3300)

// opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 20 + index
        }, 500)

    }, (index + 1) * 200 + 2100)
})