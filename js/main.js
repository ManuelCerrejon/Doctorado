const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");


function actualizarNavegacion() {

    let seccionActual = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            seccionActual = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${seccionActual}`) {
            link.classList.add("active");
        }

    });

}


window.addEventListener("scroll", actualizarNavegacion);

actualizarNavegacion();