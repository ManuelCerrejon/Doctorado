document.addEventListener("DOMContentLoaded", async () => {


    // ==========================================
    // TEMAS
    // ==========================================

    const temas = {

        ssl: {
            numero: "02",
            nombre: "Aprendizaje auto-supervisado",
            enlace: "../estado-arte/aprendizaje-auto-supervisado.html"
        },

        asr: {
            numero: "03",
            nombre: "Reconocimiento y comprensión del habla",
            enlace: "../estado-arte/reconocimiento-comprension-habla.html"
        },

        audio: {
            numero: "04",
            nombre: "Procesamiento de audio general",
            enlace: "../estado-arte/procesamiento-audio-general.html"
        },

        "audio-language": {
            numero: "05",
            nombre: "Modelos de lenguaje para audio y habla",
            enlace: "../estado-arte/modelos-lenguaje-audio-habla.html"
        },

        reasoning: {
            numero: "06",
            nombre: "Razonamiento y fundamentación acústica",
            enlace: "../estado-arte/razonamiento-fundamentacion-acustica.html"
        },

        adaptacion: {
            numero: "07",
            nombre: "Adaptación y aprendizaje continuo",
            enlace: "../estado-arte/adaptacion-aprendizaje-continuo.html"
        },

        xai: {
            numero: "08",
            nombre: "Explicabilidad en habla y audio",
            enlace: "../estado-arte/explicabilidad-habla-audio.html"
        },

        fiabilidad: {
            numero: "09",
            nombre: "Incertidumbre, calibración y OOD",
            enlace: "../estado-arte/incertidumbre-calibracion-ood.html"
        },

        eficiencia: {
            numero: "10",
            nombre: "Eficiencia, sostenibilidad y Edge AI",
            enlace: "../estado-arte/eficiencia-sostenibilidad-edge-ai.html"
        },

        datasets: {
            numero: "11",
            nombre: "Recursos, datasets y evaluación",
            enlace: "../estado-arte/recursos-datasets-evaluacion.html"
        },

        seguridad: {
            numero: "12",
            nombre: "Equidad, privacidad y seguridad",
            enlace: "../estado-arte/equidad-privacidad-seguridad.html"
        }

    };


    // ==========================================
    // REFERENCIAS
    // ==========================================

    // Fuente única de datos; las fichas HTML existentes se conservan.
    let referencias = [];


    // ==========================================
    // ELEMENTOS
    // ==========================================

    const contenedor =
        document.getElementById(
            "biblioteca-referencias"
        );

    const input =
        document.getElementById(
            "buscar-referencia"
        );

    const limpiar =
        document.getElementById(
            "limpiar-referencias"
        );

    const contador =
        document.getElementById(
            "resultados-referencias"
        );

    const filtros =
        document.querySelectorAll(
            ".concepto-filtro"
        );


    let filtroActivo = "todos";


    // ==========================================
    // NORMALIZAR
    // ==========================================

    function normalizar(texto) {

        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );

    }


    // ==========================================
    // FILTRAR
    // ==========================================

    function obtenerReferenciasFiltradas() {

        const busqueda =
            normalizar(
                input.value.trim()
            );


        return referencias.filter(
            (referencia) => {


                const coincideTema =
                    filtroActivo === "todos"
                    ||
                    referencia.tema === filtroActivo;


                const texto =
                    normalizar(
                        [
                            referencia.titulo,
                            referencia.subtitulo,
                            ...referencia.tags,
                            temas[
                                referencia.tema
                            ].nombre
                        ].join(" ")
                    );


                const coincideBusqueda =
                    busqueda === ""
                    ||
                    texto.includes(
                        busqueda
                    );


                return (
                    coincideTema
                    &&
                    coincideBusqueda
                );

            }
        );

    }


    // ==========================================
    // CREAR TARJETA
    // ==========================================

    function crearTarjeta(referencia) {

        const articulo =
            document.createElement(
                "article"
            );


        articulo.className =
            "modelo-card";


        const numero =
            document.createElement(
                "div"
            );

        numero.className =
            "modelo-numero";

        numero.textContent =
            temas[
                referencia.tema
            ].numero;


        const contenido =
            document.createElement(
                "div"
            );

        contenido.className =
            "modelo-contenido";


        const titulo =
            document.createElement(
                "h3"
            );

        titulo.textContent =
            referencia.titulo;


        const subtitulo =
            document.createElement(
                "p"
            );

        subtitulo.textContent =
            referencia.subtitulo;


        const tags =
            document.createElement(
                "div"
            );

        tags.className =
            "tema-tags";


        referencia.tags.forEach(
            (tag) => {

                const span =
                    document.createElement(
                        "span"
                    );

                span.textContent =
                    tag;

                tags.appendChild(
                    span
                );

            }
        );


        const enlace =
            document.createElement(
                "a"
            );

        // Las nuevas incorporaciones pueden enlazar a la publicación original
        // sin necesitar una ficha HTML adicional.
        const destino = referencia.archivo || referencia.urlPublicacion;

        if (destino) {
            const url = new URL(destino, window.location.href);
            if (["http:", "https:"].includes(url.protocol)) {
                enlace.href = destino;
            }
        }

        enlace.className =
            "boton-referencia";

        enlace.textContent =
            "Ver referencia científica →";


        contenido.appendChild(
            titulo
        );

        contenido.appendChild(
            subtitulo
        );

        contenido.appendChild(
            tags
        );

        if (enlace.hasAttribute("href")) {
            contenido.appendChild(
                enlace
            );
        }


        articulo.appendChild(
            numero
        );

        articulo.appendChild(
            contenido
        );


        return articulo;

    }


    // ==========================================
    // RENDER
    // ==========================================

    function renderizar() {

        const filtradas =
            obtenerReferenciasFiltradas();


        contenedor.innerHTML = "";


        // Recorremos los temas
        // respetando su orden.

        Object.entries(
            temas
        ).forEach(
            ([clave, tema]) => {


                const referenciasTema =
                    filtradas.filter(
                        (referencia) =>
                            referencia.tema === clave
                    );


                if (
                    referenciasTema.length === 0
                ) {
                    return;
                }


                // SECTION

                const section =
                    document.createElement(
                        "section"
                    );

                section.className =
                    "detalle-contenedor";


                // CABECERA

                const cabecera =
                    document.createElement(
                        "div"
                    );

                cabecera.className =
                    "detalle-cabecera";


                const etiqueta =
                    document.createElement(
                        "p"
                    );

                etiqueta.className =
                    "etiqueta";

                etiqueta.textContent =
                    `TEMA ${tema.numero}`;


                const h2 =
                    document.createElement(
                        "h2"
                    );

                h2.textContent =
                    tema.nombre;


                cabecera.appendChild(
                    etiqueta
                );

                cabecera.appendChild(
                    h2
                );


                // LINK TEMA

                const linkTema =
                    document.createElement(
                        "a"
                    );

                linkTema.href =
                    tema.enlace;

                linkTema.className =
                    "boton-referencia";

                linkTema.textContent =
                    "Ver tema completo →";


                cabecera.appendChild(
                    linkTema
                );


                section.appendChild(
                    cabecera
                );


                // CARDS

                const lista =
                    document.createElement(
                        "div"
                    );

                lista.className =
                    "modelos-lista";


                referenciasTema.forEach(
                    (referencia) => {

                        lista.appendChild(
                            crearTarjeta(
                                referencia
                            )
                        );

                    }
                );


                section.appendChild(
                    lista
                );


                contenedor.appendChild(
                    section
                );

            }
        );


        // CONTADOR

        if (
            filtradas.length ===
            referencias.length
        ) {

            contador.textContent =
                `${referencias.length} fichas científicas disponibles`;

        } else {

            contador.textContent =
                `${filtradas.length} de ${referencias.length} referencias`;

        }


        // SIN RESULTADOS

        if (
            filtradas.length === 0
        ) {

            const section =
                document.createElement(
                    "section"
                );

            section.className =
                "detalle-contenedor";


            section.innerHTML = `

                <div class="detalle-destacado">

                    <p class="etiqueta">
                        SIN RESULTADOS
                    </p>

                    <h3>
                        No se ha encontrado
                        ninguna referencia
                    </h3>

                    <p>
                        Prueba con otro término
                        o selecciona
                        una categoría diferente.
                    </p>

                </div>

            `;


            contenedor.appendChild(
                section
            );

        }

    }


    // ==========================================
    // CARGA DE DATOS (compatible con GitHub Pages)
    // ==========================================

    contador.textContent = "Cargando referencias científicas…";
    contenedor.setAttribute("aria-busy", "true");

    try {
        const respuesta = await fetch("../data/investigaciones.json");
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const ids = new Set();
        if (!Array.isArray(datos) || !datos.every((referencia) => {
            if (!referencia || typeof referencia.id !== "string"
                || !referencia.id.trim() || ids.has(referencia.id)
                || !Object.hasOwn(temas, referencia.tema)
                || typeof referencia.titulo !== "string"
                || !referencia.titulo.trim()
                || !(referencia.subtitulo === null
                    || typeof referencia.subtitulo === "string")
                || !Array.isArray(referencia.tags)
                || !referencia.tags.every((tag) => typeof tag === "string")
                || ![referencia.archivo, referencia.urlPublicacion].every(
                    (valor) => valor === null || typeof valor === "string"
                )) {
                return false;
            }
            try {
                for (const destino of [referencia.archivo, referencia.urlPublicacion]) {
                    if (destino && !["http:", "https:"].includes(
                        new URL(destino, window.location.href).protocol
                    )) {
                        return false;
                    }
                }
            } catch {
                return false;
            }
            ids.add(referencia.id);
            return true;
        })) {
            throw new Error("Formato de investigaciones no válido o IDs duplicados");
        }

        referencias = datos;
    } catch (error) {
        console.error("No se pudieron cargar las investigaciones:", error);
        contador.textContent = "No se pudieron cargar las referencias científicas. "
            + "Recarga la página para volver a intentarlo.";
        contador.setAttribute("role", "alert");
        return;
    } finally {
        contenedor.removeAttribute("aria-busy");
    }


    // ==========================================
    // SEARCH
    // ==========================================

    input.addEventListener(
        "input",
        renderizar
    );


    // ==========================================
    // FILTERS
    // ==========================================

    filtros.forEach(
        (boton) => {

            boton.addEventListener(
                "click",
                () => {

                    filtroActivo =
                        boton.dataset.filter;


                    filtros.forEach(
                        (filtro) => {

                            filtro
                                .classList
                                .remove(
                                    "activo"
                                );

                        }
                    );


                    boton
                        .classList
                        .add(
                            "activo"
                        );


                    renderizar();

                }
            );

        }
    );


    // ==========================================
    // CLEAR
    // ==========================================

    limpiar.addEventListener(
        "click",
        () => {

            input.value = "";

            filtroActivo =
                "todos";


            filtros.forEach(
                (filtro) => {

                    filtro
                        .classList
                        .remove(
                            "activo"
                        );

                }
            );


            document
                .querySelector(
                    '[data-filter="todos"]'
                )
                .classList
                .add(
                    "activo"
                );


            renderizar();

            input.focus();

        }
    );


    // ==========================================
    // INITIAL
    // ==========================================

    renderizar();


});