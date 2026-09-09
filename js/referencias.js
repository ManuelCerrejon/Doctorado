document.addEventListener("DOMContentLoaded", () => {


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

    const referencias = [

        // ======================================
        // 02 · SSL
        // ======================================

        {
            tema: "ssl",
            titulo: "wav2vec 2.0",
            subtitulo:
                "A Framework for Self-Supervised Learning of Speech Representations",
            archivo: "wav2vec-2.html",
            tags: [
                "SSL",
                "Speech",
                "Contrastive Learning"
            ]
        },

        {
            tema: "ssl",
            titulo: "HuBERT",
            subtitulo:
                "Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units",
            archivo: "hubert.html",
            tags: [
                "SSL",
                "Masked Prediction",
                "Speech"
            ]
        },

        {
            tema: "ssl",
            titulo: "WavLM",
            subtitulo:
                "Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing",
            archivo: "wavlm.html",
            tags: [
                "SSL",
                "Denoising",
                "Speech"
            ]
        },

        {
            tema: "ssl",
            titulo: "XLS-R",
            subtitulo:
                "Self-Supervised Cross-Lingual Speech Representation Learning at Scale",
            archivo: "xls-r.html",
            tags: [
                "SSL",
                "Multilingual",
                "Cross-Lingual"
            ]
        },


        // ======================================
        // 03 · ASR
        // ======================================

        {
            tema: "asr",
            titulo: "Whisper",
            subtitulo:
                "Robust Speech Recognition via Large-Scale Weak Supervision",
            archivo: "whisper.html",
            tags: [
                "ASR",
                "Weak Supervision",
                "Multilingual"
            ]
        },

        {
            tema: "asr",
            titulo: "SeamlessM4T",
            subtitulo:
                "Massively Multilingual and Multimodal Machine Translation",
            archivo: "seamlessm4t.html",
            tags: [
                "Speech Translation",
                "Multilingual",
                "Multimodal"
            ]
        },


        // ======================================
        // 04 · AUDIO
        // ======================================

        {
            tema: "audio",
            titulo: "Audio-MAE",
            subtitulo:
                "Masked Autoencoders that Listen",
            archivo: "audiomae.html",
            tags: [
                "Audio",
                "Masked Autoencoder",
                "Representation"
            ]
        },

        {
            tema: "audio",
            titulo: "BEATs",
            subtitulo:
                "Audio Pre-Training with Acoustic Tokenizers",
            archivo: "beats.html",
            tags: [
                "Audio",
                "Acoustic Tokenizer",
                "Pretraining"
            ]
        },

        {
            tema: "audio",
            titulo: "CLAP",
            subtitulo:
                "Learning Audio Concepts From Natural Language Supervision",
            archivo: "clap.html",
            tags: [
                "Audio-Text",
                "Contrastive Learning",
                "Zero-Shot"
            ]
        },


        // ======================================
        // 05 · AUDIO-LANGUAGE
        // ======================================

        {
            tema: "audio-language",
            titulo: "AudioLM",
            subtitulo:
                "A Language Modeling Approach to Audio Generation",
            archivo: "audiolm.html",
            tags: [
                "Audio Generation",
                "Acoustic Tokens",
                "Language Model"
            ]
        },

        {
            tema: "audio-language",
            titulo: "AudioPaLM",
            subtitulo:
                "A Large Language Model That Can Speak and Listen",
            archivo: "audiopalm.html",
            tags: [
                "Speech",
                "Language Model",
                "Multimodal"
            ]
        },

        {
            tema: "audio-language",
            titulo: "Spirit LM",
            subtitulo:
                "Interleaved Spoken and Written Language Model",
            archivo: "spirit-lm.html",
            tags: [
                "Speech",
                "Text",
                "Language Model"
            ]
        },

        {
            tema: "audio-language",
            titulo: "SALMONN",
            subtitulo:
                "Towards Generic Hearing Abilities for Large Language Models",
            archivo: "salmonn.html",
            tags: [
                "Audio-Language",
                "LLM",
                "Instruction Tuning"
            ]
        },

        {
            tema: "audio-language",
            titulo: "Qwen2-Audio",
            subtitulo:
                "Universal Audio Understanding with Large Audio-Language Models",
            archivo: "qwen2-audio.html",
            tags: [
                "Audio-Language",
                "LLM",
                "Audio Understanding"
            ]
        },

        {
            tema: "audio-language",
            titulo: "Moshi",
            subtitulo:
                "Speech-Text Foundation Model for Real-Time Dialogue",
            archivo: "moshi.html",
            tags: [
                "Speech",
                "Dialogue",
                "Real-Time"
            ]
        },


        // ======================================
        // 06 · REASONING
        // ======================================

        {
            tema: "reasoning",
            titulo: "MMAU",
            subtitulo:
                "Benchmark for Multi-Task Audio Understanding and Reasoning",
            archivo: "mmau.html",
            tags: [
                "Reasoning",
                "Audio Understanding",
                "Benchmark"
            ]
        },

        {
            tema: "reasoning",
            titulo: "PolyBench",
            subtitulo:
                "Evaluation of Audio-Language Reasoning",
            archivo: "polybench.html",
            tags: [
                "Reasoning",
                "Benchmark",
                "Audio-Language"
            ]
        },

        {
            tema: "reasoning",
            titulo:
                "Timestamp-Grounded Speech Reasoning",
            subtitulo:
                "Reasoning Grounded in Temporal Evidence",
            archivo:
                "timestamp-grounded-speech-reasoning.html",
            tags: [
                "Grounding",
                "Reasoning",
                "Temporal Evidence"
            ]
        },


        // ======================================
        // 07 · ADAPTACIÓN
        // ======================================

        {
            tema: "adaptacion",
            titulo: "LoRA-Whisper",
            subtitulo:
                "Parameter-Efficient Adaptation of Whisper",
            archivo: "lora-whisper.html",
            tags: [
                "LoRA",
                "Whisper",
                "PEFT"
            ]
        },

        {
            tema: "adaptacion",
            titulo: "SGEM",
            subtitulo:
                "Test-Time Adaptation for Speech Recognition",
            archivo: "sgem.html",
            tags: [
                "TTA",
                "ASR",
                "Adaptation"
            ]
        },

        {
            tema: "adaptacion",
            titulo: "Dynamic SUTA",
            subtitulo:
                "Dynamic Single-Utterance Test-Time Adaptation",
            archivo: "dynamic-suta.html",
            tags: [
                "TTA",
                "Dynamic Adaptation",
                "ASR"
            ]
        },

        {
            tema: "adaptacion",
            titulo: "UOCL",
            subtitulo:
                "Online Continual Learning for Automatic Speech Recognition",
            archivo: "uocl-asr.html",
            tags: [
                "Continual Learning",
                "ASR",
                "Online Learning"
            ]
        },


        // ======================================
        // 08 · XAI
        // ======================================

        {
            tema: "xai",
            titulo: "Integrated Gradients",
            subtitulo:
                "Axiomatic Attribution for Deep Networks",
            archivo: "integrated-gradients.html",
            tags: [
                "XAI",
                "Attribution",
                "Gradients"
            ]
        },

        {
            tema: "xai",
            titulo: "LIME",
            subtitulo:
                "Local Interpretable Model-Agnostic Explanations",
            archivo: "lime.html",
            tags: [
                "XAI",
                "Local Explanation",
                "Model-Agnostic"
            ]
        },

        {
            tema: "xai",
            titulo: "SHAP",
            subtitulo:
                "SHapley Additive exPlanations",
            archivo: "shap.html",
            tags: [
                "XAI",
                "Shapley Values",
                "Attribution"
            ]
        },

        {
            tema: "xai",
            titulo: "Explanations for ASR",
            subtitulo:
                "Explainability Applied to Automatic Speech Recognition",
            archivo: "explanations-asr.html",
            tags: [
                "XAI",
                "ASR",
                "Speech"
            ]
        },

        {
            tema: "xai",
            titulo: "PDSM",
            subtitulo:
                "Explainability for Speech and Audio Models",
            archivo: "pdsm.html",
            tags: [
                "XAI",
                "Speech",
                "Interpretability"
            ]
        },

        {
            tema: "xai",
            titulo:
                "Faithfulness in Acoustic Scene Detection",
            subtitulo:
                "Evaluating Whether Audio Explanations Reflect Model Behaviour",
            archivo: "faithfulness-asd.html",
            tags: [
                "Faithfulness",
                "XAI",
                "Audio"
            ]
        },

        {
            tema: "xai",
            titulo: "ANFIS",
            subtitulo:
                "Adaptive Neuro-Fuzzy Inference System",
            archivo: "anfis.html",
            tags: [
                "Neurofuzzy",
                "Fuzzy Rules",
                "Explainability"
            ]
        },


        // ======================================
        // 09 · FIABILIDAD
        // ======================================

        {
            tema: "fiabilidad",
            titulo:
                "Word-Level Confidence in ASR",
            subtitulo:
                "Confidence Estimation for Automatic Speech Recognition",
            archivo:
                "word-level-confidence-asr.html",
            tags: [
                "Confidence",
                "ASR",
                "Calibration"
            ]
        },

        {
            tema: "fiabilidad",
            titulo:
                "Overconfidence under Noisy Speech",
            subtitulo:
                "Reliability of ASR Confidence under Acoustic Degradation",
            archivo:
                "overconfidence-noisy-asr.html",
            tags: [
                "Overconfidence",
                "Noise",
                "ASR"
            ]
        },

        {
            tema: "fiabilidad",
            titulo:
                "Audio OOD Detection with kNN",
            subtitulo:
                "Out-of-Distribution Detection for Audio",
            archivo:
                "audio-ood-knn.html",
            tags: [
                "OOD",
                "kNN",
                "Audio"
            ]
        },


        // ======================================
        // 10 · EFICIENCIA
        // ======================================

        {
            tema: "eficiencia",
            titulo: "Green AI",
            subtitulo:
                "Efficiency as a Scientific Evaluation Criterion",
            archivo: "green-ai.html",
            tags: [
                "Green AI",
                "Efficiency",
                "Sustainability"
            ]
        },

        {
            tema: "eficiencia",
            titulo: "TinySpeech",
            subtitulo:
                "Attention Condensers for Tiny Speech Recognition",
            archivo: "tinyspeech.html",
            tags: [
                "TinyML",
                "Speech",
                "Efficiency"
            ]
        },

        {
            tema: "eficiencia",
            titulo:
                "TinyML Speech Recognition",
            subtitulo:
                "Quantized Speech Recognition on Microcontrollers",
            archivo:
                "tinyml-speech-recognition.html",
            tags: [
                "TinyML",
                "Quantization",
                "Microcontroller"
            ]
        },

        {
            tema: "eficiencia",
            titulo: "Edge-ASR",
            subtitulo:
                "Towards Low-Bit Quantization of Automatic Speech Recognition Models",
            archivo: "edge-asr.html",
            tags: [
                "ASR",
                "Quantization",
                "Edge AI"
            ]
        },


        // ======================================
        // 11 · DATASETS
        // ======================================

        {
            tema: "datasets",
            titulo: "LibriSpeech",
            subtitulo:
                "An ASR Corpus Based on Public Domain Audio Books",
            archivo: "librispeech.html",
            tags: [
                "Dataset",
                "ASR",
                "English"
            ]
        },

        {
            tema: "datasets",
            titulo:
                "Multilingual LibriSpeech",
            subtitulo:
                "Large-Scale Multilingual Speech Corpus",
            archivo:
                "multilingual-librispeech.html",
            tags: [
                "Dataset",
                "Multilingual",
                "ASR"
            ]
        },

        {
            tema: "datasets",
            titulo: "VoxPopuli",
            subtitulo:
                "A Large-Scale Multilingual Speech Corpus",
            archivo: "voxpopuli.html",
            tags: [
                "Dataset",
                "Multilingual",
                "Speech"
            ]
        },

        {
            tema: "datasets",
            titulo: "Common Voice",
            subtitulo:
                "A Massively-Multilingual Speech Corpus",
            archivo: "common-voice.html",
            tags: [
                "Dataset",
                "Crowdsourcing",
                "Multilingual"
            ]
        },

        {
            tema: "datasets",
            titulo: "ML-SUPERB",
            subtitulo:
                "Multilingual Speech Universal PERformance Benchmark",
            archivo: "ml-superb.html",
            tags: [
                "Benchmark",
                "Multilingual",
                "SSL"
            ]
        },

        {
            tema: "datasets",
            titulo: "AudioSet",
            subtitulo:
                "An Ontology and Human-Labeled Dataset for Audio Events",
            archivo: "audioset.html",
            tags: [
                "Dataset",
                "Audio Events",
                "Multi-Label"
            ]
        },

        {
            tema: "datasets",
            titulo: "ESC-50",
            subtitulo:
                "Dataset for Environmental Sound Classification",
            archivo: "esc-50.html",
            tags: [
                "Dataset",
                "Environmental Sound",
                "Classification"
            ]
        },

        {
            tema: "datasets",
            titulo: "UrbanSound8K",
            subtitulo:
                "Dataset and Taxonomy for Urban Sound Research",
            archivo: "urbansound8k.html",
            tags: [
                "Dataset",
                "Urban Sound",
                "Cross-Validation"
            ]
        },

        {
            tema: "datasets",
            titulo: "FSD50K",
            subtitulo:
                "Open Dataset of Human-Labeled Sound Events",
            archivo: "fsd50k.html",
            tags: [
                "Dataset",
                "Sound Events",
                "Multi-Label"
            ]
        },

        {
            tema: "datasets",
            titulo: "DCASE",
            subtitulo:
                "Detection and Classification of Acoustic Scenes and Events",
            archivo: "dcase.html",
            tags: [
                "Benchmark",
                "Acoustic Scenes",
                "Sound Events",
                "Anomaly Detection"
            ]
        },


        // ======================================
        // 12 · PRIVACIDAD / FAIRNESS / SECURITY
        // ======================================

        {
            tema: "seguridad",
            titulo:
                "Privacy-Oriented Manipulation of Speaker Representations",
            subtitulo:
                "Privacy Preservation in Speaker Embeddings",
            archivo:
                "privacy-speaker-representations.html",
            tags: [
                "Privacy",
                "Speaker Embeddings",
                "VQ-VAE"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Gender and Dialect Bias in YouTube's Automatic Captions",
            subtitulo:
                "Fairness Audit of Automatic Speech Recognition",
            archivo:
                "gender-dialect-bias-youtube.html",
            tags: [
                "Fairness",
                "Gender",
                "Dialect",
                "WER"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Racial Disparities in Automated Speech Recognition",
            subtitulo:
                "Audit of Commercial ASR Systems",
            archivo:
                "racial-disparities-asr.html",
            tags: [
                "Fairness",
                "ASR",
                "Audit"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Federated Learning with Differential Privacy for End-to-End Speech Recognition",
            subtitulo:
                "Private Federated Training of Large ASR Models",
            archivo:
                "federated-asr-differential-privacy.html",
            tags: [
                "Federated Learning",
                "Differential Privacy",
                "ASR"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Privacy Attacks for ASR Acoustic Models",
            subtitulo:
                "Speaker Information Leakage in Federated Learning",
            archivo:
                "privacy-attacks-federated-asr.html",
            tags: [
                "Privacy Attack",
                "Federated Learning",
                "Speaker Identity"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Generalization of Audio Deepfake Detection",
            subtitulo:
                "Robust Detection under Unknown Generators and Acoustic Conditions",
            archivo:
                "generalization-audio-deepfake.html",
            tags: [
                "Deepfake",
                "ASVspoof",
                "Robustness"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Harder or Different?",
            subtitulo:
                "Understanding Generalization of Audio Deepfake Detection",
            archivo:
                "harder-or-different-deepfake.html",
            tags: [
                "Deepfake",
                "OOD",
                "Domain Shift"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Audio Adversarial Examples",
            subtitulo:
                "Targeted Attacks on Speech-to-Text",
            archivo:
                "audio-adversarial-examples.html",
            tags: [
                "Adversarial Audio",
                "DeepSpeech",
                "Security"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "Hidden Voice Commands",
            subtitulo:
                "Machine-Recognizable Commands Hidden from Human Perception",
            archivo:
                "hidden-voice-commands.html",
            tags: [
                "Voice Commands",
                "Security",
                "Over-the-Air"
            ]
        },

        {
            tema: "seguridad",
            titulo:
                "CommanderSong",
            subtitulo:
                "Practical Adversarial Voice Recognition through Music",
            archivo:
                "commandersong.html",
            tags: [
                "Adversarial Audio",
                "Music",
                "Over-the-Air"
            ]
        }

    ];


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

        enlace.href =
            referencia.archivo;

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

        contenido.appendChild(
            enlace
        );


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