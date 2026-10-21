document.addEventListener("DOMContentLoaded", async () => {
    const estado = document.getElementById("estado-investigacion");
    const ficha = document.getElementById("ficha-investigacion");
    const titulo = document.getElementById("titulo-investigacion");
    const subtitulo = document.getElementById("subtitulo-investigacion");
    const autores = document.getElementById("autores-investigacion");
    const etiquetas = document.getElementById("etiquetas-investigacion");

    function elemento(tag, texto, clase) {
        const nodo = document.createElement(tag);
        if (texto !== undefined) nodo.textContent = texto;
        if (clase) nodo.className = clase;
        return nodo;
    }

    function tieneDato(valor) {
        return typeof valor === "boolean" || typeof valor === "number"
            || (typeof valor === "string" && valor.trim() !== "")
            || (Array.isArray(valor) && valor.some(
                (item) => typeof item === "string" && item.trim() !== ""
            ));
    }

    function fechaLegible(valor) {
        if (typeof valor !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) return null;
        const fecha = new Date(`${valor}T00:00:00Z`);
        if (Number.isNaN(fecha.getTime()) || fecha.toISOString().slice(0, 10) !== valor) return null;
        return valor.split("-").reverse().join("/");
    }

    function texto(valor) {
        if (typeof valor === "boolean") return valor ? "Sí" : "No";
        return String(valor);
    }

    function contenido(valor, ordenado = false) {
        if (Array.isArray(valor)) {
            const lista = elemento(ordenado ? "ol" : "ul");
            valor.filter((item) => typeof item === "string" && item.trim()).forEach(
                (item) => lista.appendChild(elemento("li", item))
            );
            return lista;
        }
        return elemento("p", texto(valor));
    }

    function bloque(destino, nombre, valor, ordenado = false) {
        if (!tieneDato(valor)) return;
        const seccion = elemento("section", undefined, "ficha-bloque");
        seccion.append(elemento("h3", nombre), contenido(valor, ordenado));
        destino.appendChild(seccion);
    }

    function metricas(destino, nombre, datos) {
        const presentes = datos.filter(([, valor]) => tieneDato(valor));
        if (!presentes.length) return;
        const seccion = elemento("section", undefined, "ficha-bloque");
        const lista = elemento("dl", undefined, "ficha-metricas");
        presentes.forEach(([etiqueta, valor]) => {
            const tarjeta = elemento("div");
            tarjeta.append(elemento("dt", etiqueta), elemento("dd", texto(valor)));
            lista.appendChild(tarjeta);
        });
        seccion.append(elemento("h3", nombre), lista);
        destino.appendChild(seccion);
    }

    function urlSegura(valor) {
        if (typeof valor !== "string" || !valor.trim()) return null;
        try {
            const url = new URL(valor, window.location.href);
            return ["https:", "http:"].includes(url.protocol) ? url.href : null;
        } catch {
            return null;
        }
    }

    function enlace(nombre, destino) {
        const url = urlSegura(destino);
        if (!url) return null;
        const boton = elemento("a", nombre, "boton-referencia");
        boton.href = url;
        return boton;
    }

    function mostrarError(mensaje) {
        estado.textContent = mensaje;
        estado.setAttribute("role", "alert");
        ficha.hidden = true;
    }

    const id = new URLSearchParams(window.location.search).get("id");
    if (!id || !id.trim()) {
        mostrarError("Falta el identificador de la investigación. Vuelve a la biblioteca y selecciona una referencia.");
        return;
    }

    try {
        const respuesta = await fetch("../data/investigaciones.json");
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
        const datos = await respuesta.json();
        const ids = new Set();
        if (!Array.isArray(datos) || !datos.every((item) => {
            if (!item || typeof item.id !== "string" || !item.id.trim()
                || ids.has(item.id) || typeof item.titulo !== "string" || !item.titulo.trim()) {
                return false;
            }
            ids.add(item.id);
            return true;
        })) throw new Error("Formato de investigaciones no válido o IDs duplicados");

        const investigacion = datos.find((item) => item.id === id);
        if (!investigacion) {
            mostrarError("Investigación no encontrada. Comprueba el enlace o vuelve a la biblioteca.");
            return;
        }

        document.title = `${investigacion.titulo} | Referencia científica`;
        titulo.textContent = investigacion.titulo;
        subtitulo.textContent = investigacion.subtitulo || "";
        subtitulo.hidden = !tieneDato(investigacion.subtitulo);
        const nombres = Array.isArray(investigacion.autores)
            ? investigacion.autores.filter((nombre) => typeof nombre === "string").join("; ") : "";
        autores.textContent = [nombres, fechaLegible(investigacion.fechaPublicacion) || investigacion.año]
            .filter(tieneDato).join(" · ");
        autores.hidden = !autores.textContent;
        const tags = new Set(Array.isArray(investigacion.tags) ? investigacion.tags : []);
        [["asrAbierto", "ASR abierto"], ["tinyml", "TinyML"], ["edge", "Edge AI"],
            ["aprendizajeContinuo", "Aprendizaje continuo"]].forEach(([campo, tag]) => {
            if (investigacion[campo] === true) tags.add(tag);
        });
        tags.forEach((tag) => {
            if (typeof tag === "string" && tag.trim()) etiquetas.appendChild(elemento("span", tag));
        });
        etiquetas.hidden = etiquetas.childElementCount === 0;

        const publicados = document.getElementById("datos-autores");
        metricas(publicados, "Información bibliográfica", [
            ["Tipo de publicación", investigacion.tipoPublicacion],
            ["Fecha de publicación", fechaLegible(investigacion.fechaPublicacion)],
            ["Año", investigacion.año],
            ["Incorporación a la biblioteca", fechaLegible(investigacion.fechaIncorporacion)]
        ]);
        bloque(publicados, "Resumen", investigacion.resumen);
        bloque(publicados, "Objetivo de la investigación", investigacion.objetivoInvestigacion);
        bloque(publicados, "Metodología", investigacion.metodologia, true);
        bloque(publicados, "Procedimiento", investigacion.procedimiento, true);
        metricas(publicados, "Modelo y técnicas", [
            ["Tipo de tarea", Array.isArray(investigacion.tipoTarea) ? investigacion.tipoTarea.join(" · ") : null],
            ["ASR abierto", investigacion.asrAbierto], ["TinyML", investigacion.tinyml],
            ["Edge AI", investigacion.edge], ["Modelo", investigacion.modelo],
            ["Parámetros", investigacion.parametros], ["Cuantización", investigacion.cuantizacion],
            ["Poda", investigacion.poda], ["Destilación", investigacion.destilacion],
            ["Streaming", investigacion.streaming], ["Aprendizaje continuo", investigacion.aprendizajeContinuo],
            ["Adaptación", investigacion.adaptacion]
        ]);
        bloque(publicados, "Datasets", investigacion.datasets);
        bloque(publicados, "Datos de entrenamiento", investigacion.datosEntrenamiento);
        bloque(publicados, "Datos de evaluación", investigacion.datosEvaluacion);
        metricas(publicados, "Evaluación y recursos", [
            ["WER", investigacion.wer], ["CER", investigacion.cer],
            ["Hardware", investigacion.hardware], ["RAM y PSRAM", investigacion.ram],
            ["Flash", investigacion.flash], ["Latencia", investigacion.latencia], ["Energía", investigacion.energia]
        ]);
        bloque(publicados, "Resultados principales", investigacion.resultadosPrincipales);
        bloque(publicados, "Conclusiones de los autores", investigacion.conclusiones);
        bloque(publicados, "Limitaciones", investigacion.limitaciones);
        bloque(publicados, "Datos publicados por los autores: evidencia de la ficha", investigacion.datosPublicadosAutores);

        const tesis = document.getElementById("interes-tesis");
        const analisis = document.getElementById("analisis-tesis");
        bloque(analisis, "Aportación a la tesis", investigacion.aportacionTesis || investigacion.relevanciaTesis);
        bloque(analisis, "Interpretación para la tesis", investigacion.interpretacionTesis);
        bloque(analisis, "Lectura prioritaria", investigacion.lecturaPrioritaria);
        tesis.hidden = analisis.childElementCount === 0;

        const fuentes = document.getElementById("enlaces-fuentes");
        const botones = [enlace("Publicación original →", investigacion.urlPublicacion)];
        if (typeof investigacion.doi === "string" && /^10\.\d{4,9}\/.+/.test(investigacion.doi)) {
            botones.push(enlace("DOI →", "https://doi.org/" + investigacion.doi.split("/").map(encodeURIComponent).join("/")));
        }
        if (typeof investigacion.arxiv === "string"
            && /^(?:\d{4}\.\d{4,5}|[a-z-]+(?:\.[A-Z]{2})?\/\d{7})(?:v\d+)?$/.test(investigacion.arxiv)) {
            botones.push(enlace("arXiv →", "https://arxiv.org/abs/" + investigacion.arxiv));
        }
        botones.push(enlace("Código oficial →", investigacion.urlCodigo));
        if (investigacion.archivo) {
            const historica = enlace("Consultar ficha histórica →", investigacion.archivo);
            if (historica && new URL(historica.href).origin === window.location.origin) botones.push(historica);
        }
        botones.filter(Boolean).forEach((boton) => fuentes.appendChild(boton));
        document.getElementById("fuentes-investigacion").hidden = fuentes.childElementCount === 0;

        ficha.hidden = false;
        estado.hidden = true;
    } catch (error) {
        console.error("No se pudo cargar la ficha científica:", error);
        mostrarError("No se pudo cargar la ficha científica. Recarga la página para volver a intentarlo.");
    }
});
