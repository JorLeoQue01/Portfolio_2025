// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES
// ==========================================
const translations = {
    es: {
        profileRole: "Artista 3D Generalista",
        profileDesc: "Hola. soy Jorge, un artista generalista 3D y programador Front-End Junior. Tengo experiencia en modelado 3D y texturizado de objetos y personajes, así como en la creación de interfaces interactivas para aplicaciones móviles.",
        downloadCv: "Descargar CV",
        contactMeBtn: "Contacto",
        titleExperience: "Experiencia Laboral",
        dateIlmex: "Marzo 2021 - Junio 2021",
        roleIlmex: "Creador de recursos digitales - Ílmex",
        descIlmex: "Prácticas <b>FCT</b> pertenecientes al CFGS de <b>A2D3DVEI</b>. Realización de montajes audiovisuales y modelado de elementos 3D para RRSS.",
        datePromvi: "Marzo 2023 - Febrero 2024",
        rolePromvi: "Artista 3D - PROMVI Games",
        descPromvi: "Modelado 3D y texturizado de vehículos, armas y otros props para el videojuego <b> World Titan War </b>.",
        dateAyto: "Junio 2024 - Junio 2025",
        roleAyto: "Programador Informático - Ayto. Cañada Rosal",
        descAyto: "Desarrollo y diseño de interfaz en Figma y Android Studio para la app <b>\"Colonos Felinos\"</b>.",
        titleEducation: "Educación",
        dateEdu1: "Septiembre 2019 - Junio 2021",
        descEdu1: "Ciclo Formativo de Grado Superior en Animación 2D, 3D, Videojuegos y Entornos Interactivos.",
        dateEdu2: "Octubre 2021 - Diciembre 2022",
        dateEdu3: "Junio 2024 - Junio 2025",
        titleEdu2: "Máster Modelado 3D - EVAD",
        descEdu2: "Master en animación y modelado 3D. <br>Profundización de conceptos a nivel técnico orientados al trabajo en la industria del videojuego.",
        descEdu3: "Programación en lenguajes estructurados de aplicaciones de gestión. Nivel 3",
        descEdu4: "Programación con lenguajes orientados a objetos y bases de datos relacionales. Nivel 3",
        dateEdu5: "Octubre 2025 - Enero 2027",
        titleEdu5: "Diploma en Creación de Videojuegos - Universidad de Málaga",
        descEdu5: "Especialidad en Arte y Programación. Desarrollo de habilidades de carácter generalista para el trabajo en videojuegos.",
        titleServices: "Mis Servicios",
        service1Title: "Modelado 3D - Low / High poly",
        service1Desc: "Elaboración de modelos 3D para videojuegos o animación a medida, tanto de objetos como de personajes.",
        service2Title: "Texturizado",
        service2Desc: "Realización de texturas para modelos 3D, desde cartoon hasta semi-realistas, adaptadas a las necesidades del proyecto.",
        service3Title: "Diseño de interfaces",
        service3Desc: "Diseño de interfaces para aplicaciones móviles y web, con un enfoque en la usabilidad y la estética.",
        service4Title: "Edición de vídeo",
        service4Desc: "Edición de vídeos y creación de montajes audiovisuales para YouTube o RRSS.",
        titleSkills: "Mis Habilidades",
        skills3D: "Modelado 3D",
        skillsText: "Texturizado",
        skillsEngines: "Motores de juego",
        skillsOthers: "Otros conocimientos",
        titleProjects: "Mis proyectos",
        projectTitle: "Render Habitación",
        sketchfabGal: "Galería de Sketchfab",
        aboutProject: "Sobre el proyecto:",
        projectDesc: "Render de una composición en una habitación donde se muestran algunos elementos de otros proyectos.",
        detailsBtn: "Detalles",
        moreProjectsBtn: "Más proyectos",
        titleContact: "Contacto",
        profileBack: "Perfil",
        // Placeholders e Inputs
        placeholders: {
            "form-name": "Nombre Completo",
            "form-email": "Email",
            "form-msg": "Escriba aquí su mensaje"
        },
        submitValue: "Enviar"
    },
    en: {
        profileRole: "3D Generalist Artist",
        profileDesc: "Hi, I'm Jorge, a Junior 3D generalist artist and Front-End programmer. I have experience in 3D modeling and texturing objects and characters, as well as creating interactive interfaces for mobile applications.",
        downloadCv: "Download CV",
        contactMeBtn: "Contact Me",
        titleExperience: "Work Experience",
        dateIlmex: "March 2021 - June 2021",
        roleIlmex: "Digital Resource Creator - Ílmex",
        descIlmex: "<b>FCT</b> Internship belonging to the Higher Degree in <b>A2D3DVEI</b>. Production of audiovisual materials and 3D modeling for social media.",
        datePromvi: "March 2023 - February 2024",
        rolePromvi: "3D Artist - PROMVI Games",
        descPromvi: "3D modeling and texturing of vehicles, weapons, and other props for the video game <b>World Titan War</b>.",
        dateAyto: "June 2024 - June 2025",
        roleAyto: "Computer Programmer - Cañada Rosal Town Hall",
        descAyto: "Interface design and development in Figma and Android Studio for the app <b>\"Colonos Felinos\"</b>.",
        titleEducation: "Education",
        dateEdu1: "September 2019 - June 2021",
        descEdu1: "Higher Degree in 2D, 3D Animation, Video Games, and Interactive Environments.",
        dateEdu2: "October 2021 - December 2022",
        dateEdu3: "June 2024 - June 2025",
        titleEdu2: "Master's Degree in 3D Modeling - EVAD",
        descEdu2: "Master's in animation and 3D modeling. <br>In-depth technical concepts tailored for the gaming industry.",
        descEdu3: "Structured programming languages for management applications. Level 3",
        descEdu4: "Object-oriented programming languages and relational databases. Level 3",
        dateEdu5: "October 2025 - January 2027",
        titleEdu5: "Diploma in Video Game Creation - University of Málaga",
        descEdu5: "Specialization in Art and Programming. Development of generalist skills for game development.",
        titleServices: "My Services",
        service1Title: "3D Modeling - Low / High poly",
        service1Desc: "Custom 3D model crafting for video games or animation, both for props and characters.",
        service2Title: "Texturing",
        service2Desc: "Creation of textures for 3D models, ranging from stylized cartoon to semi-realistic, tailored to project needs.",
        service3Title: "Interface Design",
        service3Desc: "UI/UX design for web and mobile applications, focusing on usability and aesthetics.",
        service4Title: "Video Editing",
        service4Desc: "Video editing and audio-visual post-production for YouTube or social media platforms.",
        titleSkills: "My Skills",
        skills3D: "3D Modeling",
        skillsText: "Texturing",
        skillsEngines: "Game Engines",
        skillsOthers: "Other Knowledge",
        titleProjects: "My Projects",
        projectTitle: "Room Render",
        sketchfabGal: "Sketchfab Gallery",
        aboutProject: "About the project:",
        projectDesc: "Room composition render showcases assets from other various individual projects.",
        detailsBtn: "Details",
        moreProjectsBtn: "More Projects",
        titleContact: "Contact",
        profileBack: "Profile",
        // Placeholders e Inputs
        placeholders: {
            "form-name": "Full Name",
            "form-email": "Email Address",
            "form-msg": "Write your message here"
        },
        submitValue: "Send"
    }
};

// Cambiar el idioma en el DOM
function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Cambiar placeholders del formulario
    for (const id in translations[lang].placeholders) {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.placeholder = translations[lang].placeholders[id];
        }
    }

    // Cambiar el botón de submit
    const submitBtn = document.getElementById('form-submit');
    if (submitBtn) submitBtn.value = translations[lang].submitValue;
}

// Configuración de botones selectores de idioma
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');

btnEs.onclick = () => {
    if (!btnEs.classList.contains('active')) {
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
        changeLanguage('es');
    }
};

btnEn.onclick = () => {
    if (!btnEn.classList.contains('active')) {
        btnEn.classList.add('active');
        btnEs.classList.remove('active');
        changeLanguage('en');
    }
};


// ==========================================
// 2. LÓGICA DE ANIMACIONES DEL PORTFOLIO
// ==========================================

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
const backProfileBtn = document.querySelector('.back-profile');
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Pasar páginas al hacer clic en botones de siguiente/anterior
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => { pageTurn.style.zIndex = 20 - index; }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => { pageTurn.style.zIndex = 20 + index; }, 500);
        }
    };
});

// Botón Contacto (Pasa todas las páginas hacia adelante)
contactMeBtn.onclick = (e) => {
    e.preventDefault();
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => { page.style.zIndex = 20 + index; }, 500);
        }, (index + 1) * 200);
    });
};

// Botón regresar al perfil (Cierra todas las páginas de atrás hacia adelante)
backProfileBtn.onclick = (e) => {
    e.preventDefault();
    const totalPages = pages.length;
    pages.forEach((page, index) => {
        setTimeout(() => {
            const targetPage = pages[totalPages - 1 - index];
            targetPage.classList.remove('turn');
            setTimeout(() => {
                targetPage.style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200);
    });
};

// Animación de apertura inicial controlada
setTimeout(() => { coverRight.classList.add('turn'); }, 2000);
setTimeout(() => { coverRight.style.zIndex = -1; }, 2500);
setTimeout(() => { pageLeft.style.zIndex = 20; }, 3000);

// Restablecer el zIndex inicial de las páginas derechas de forma ordenada
pages.forEach((page, index) => {
    setTimeout(() => {
        page.classList.remove('turn');
        page.style.zIndex = 10 + (pages.length - index);
    }, 2100 + (index * 200));
});