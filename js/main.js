// ==========================================
// NAVEGACIÓN ACTIVA SEGÚN SCROLL
// ==========================================


// Secciones de la portada que tienen ID
const sections =
    document.querySelectorAll(
        "main section[id]"
    );


// Solo enlaces internos del menú:
// #inicio, #investigacion, etc.
const navLinks =
    document.querySelectorAll(
        'nav a[href^="#"]'
    );


// Barra de navegación
const navbar =
    document.querySelector(
        ".navbar"
    );


let ticking = false;


// ==========================================
// ACTUALIZAR NAVEGACIÓN
// ==========================================

function actualizarNavegacion() {

    if (
        sections.length === 0
        ||
        navLinks.length === 0
    ) {
        return;
    }


    // Altura real de la navbar.
    // Así funciona también si cambia
    // de tamaño en móvil.
    const navbarHeight =
        navbar
            ? navbar.offsetHeight
            : 0;


    const offset =
        navbarHeight + 40;


    let seccionActual =
        sections[0].id;


    sections.forEach(
        (section) => {

            const posicion =
                section
                    .getBoundingClientRect()
                    .top;


            if (posicion <= offset) {

                seccionActual =
                    section.id;

            }

        }
    );


    // Si hemos llegado prácticamente
    // al final de la página,
    // activamos la última sección.
    const cercaDelFinal =
        window.innerHeight
        +
        window.scrollY
        >=
        document.documentElement.scrollHeight
        - 10;


    if (cercaDelFinal) {

        seccionActual =
            sections[
                sections.length - 1
            ].id;

    }


    // Actualizamos el menú
    navLinks.forEach(
        (link) => {

            const href =
                link.getAttribute(
                    "href"
                );


            const estaActivo =
                href ===
                `#${seccionActual}`;


            link.classList.toggle(
                "active",
                estaActivo
            );


            // Mejora de accesibilidad
            if (estaActivo) {

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            } else {

                link.removeAttribute(
                    "aria-current"
                );

            }

        }
    );


    ticking = false;

}


// ==========================================
// SCROLL
// ==========================================

function solicitarActualizacion() {

    if (!ticking) {

        window.requestAnimationFrame(
            actualizarNavegacion
        );

        ticking = true;

    }

}


window.addEventListener(
    "scroll",
    solicitarActualizacion,
    {
        passive: true
    }
);


// También recalculamos
// si cambia el tamaño de pantalla.
window.addEventListener(
    "resize",
    solicitarActualizacion
);


// ==========================================
// ESTADO INICIAL
// ==========================================

actualizarNavegacion();