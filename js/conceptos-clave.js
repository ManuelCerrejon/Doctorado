document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("buscar-concepto");
    const limpiar = document.getElementById("limpiar-conceptos");

    const filtros = document.querySelectorAll(".concepto-filtro");
    const conceptos = document.querySelectorAll(".concepto-card");
    const secciones = document.querySelectorAll(".concepto-seccion");

    const resultados = document.getElementById("resultados-conceptos");

    let categoriaActiva = "todos";


    // ==========================================
    // NORMALIZAR TEXTO
    // ==========================================

    function normalizar(texto) {

        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    }


    // ==========================================
    // FILTRAR
    // ==========================================

    function filtrarConceptos() {

        const busqueda = normalizar(input.value.trim());

        let visibles = 0;


        conceptos.forEach((concepto) => {

            const categoria = concepto.dataset.categoria;

            const texto = normalizar(concepto.textContent);


            const coincideCategoria =
                categoriaActiva === "todos"
                ||
                categoria === categoriaActiva;


            const coincideBusqueda =
                busqueda === ""
                ||
                texto.includes(busqueda);


            const visible =
                coincideCategoria
                &&
                coincideBusqueda;


            concepto.classList.toggle(
                "oculto",
                !visible
            );


            if (visible) {
                visibles++;
            }

        });


        // Ocultar secciones que no tengan
        // ningún concepto visible.

        secciones.forEach((seccion) => {

            const visiblesEnSeccion =
                seccion.querySelectorAll(
                    ".concepto-card:not(.oculto)"
                ).length;


            seccion.classList.toggle(
                "oculto",
                visiblesEnSeccion === 0
            );

        });


        // Contador

        if (
            busqueda === ""
            &&
            categoriaActiva === "todos"
        ) {

            resultados.textContent =
                `Mostrando todos los conceptos (${conceptos.length})`;

        } else {

            resultados.textContent =
                `${visibles} concepto${visibles === 1 ? "" : "s"} encontrado${visibles === 1 ? "" : "s"}`;

        }

    }


    // ==========================================
    // BUSCADOR
    // ==========================================

    input.addEventListener(
        "input",
        filtrarConceptos
    );


    // ==========================================
    // FILTROS
    // ==========================================

    filtros.forEach((boton) => {

        boton.addEventListener("click", () => {

            categoriaActiva =
                boton.dataset.filter;


            filtros.forEach((filtro) => {
                filtro.classList.remove("activo");
            });


            boton.classList.add("activo");


            filtrarConceptos();

        });

    });


    // ==========================================
    // LIMPIAR
    // ==========================================

    limpiar.addEventListener("click", () => {

        input.value = "";

        categoriaActiva = "todos";


        filtros.forEach((filtro) => {
            filtro.classList.remove("activo");
        });


        document
            .querySelector('[data-filter="todos"]')
            .classList
            .add("activo");


        filtrarConceptos();

        input.focus();

    });


    // ==========================================
    // ABRIR CONCEPTO SI VIENE POR URL
    // Ejemplo:
    // conceptos-clave.html#ood
    // ==========================================

    if (window.location.hash) {

        const id =
            window.location.hash.substring(1);

        const concepto =
            document.getElementById(id);


        if (
            concepto
            &&
            concepto.tagName.toLowerCase() === "details"
        ) {

            concepto.open = true;

            setTimeout(() => {

                concepto.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        }

    }


    filtrarConceptos();

});