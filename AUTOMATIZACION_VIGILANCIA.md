# Biblioteca y vigilancia científica

`data/investigaciones.json` es la fuente única de datos estructurados de la biblioteca y de las futuras incorporaciones de vigilancia científica. Es un array JSON UTF-8. `js/referencias.js` lo carga mediante `fetch()` desde `referencias/index.html`; conserva el renderizado, el orden de los temas, el buscador y los filtros actuales. `referencias/investigacion.html?id=ID`, con `js/investigacion.js`, utiliza el mismo JSON para mostrar una ficha interna completa sin generar un HTML por publicación. Dentro de cada tema, se respeta el orden del array.

Para añadir una investigación a un tema existente basta con incorporar un objeto a este JSON. No hay que editar bloques de JavaScript ni generar HTML. Conserva las fichas existentes de `referencias/`, sus enlaces, los datos científicos anteriores y los estilos. No modifiques automáticamente el estado del arte, la línea de investigación ni otras partes de la web. La vigilancia debe añadir sus datos a este JSON; cualquier síntesis o cambio científico fuera de él requiere una tarea explícita independiente.

## Contrato de los campos

Incluye todas las claves descritas a continuación. No inventes datos ausentes, no deduzcas resultados a partir del título ni rellenes campos solo para completar el esquema. Usa `null` para datos desconocidos y arrays vacíos cuando no haya elementos documentados. Los booleanos admiten `true`, `false` o `null`: `false` significa una ausencia comprobada; `null`, que no se sabe. No confundas `null`, cero y una ausencia verificada.

Los datos migrados conservan exactamente los cinco campos del array original (`tema`, `titulo`, `subtitulo`, `archivo`, `tags`, más el ID derivado del nombre de ficha). Los demás campos quedan pendientes de verificación; no se ha realizado una revisión bibliográfica de las fichas durante esta migración. En particular, `fuenteVerificada: null` no declara que las referencias históricas sean falsas.

| Campo | Tipo y significado |
| --- | --- |
| `id` | String obligatorio, único y estable. Usa un slug; los registros migrados usan el nombre de ficha sin `.html`. No lo cambies al actualizar metadatos. |
| `tema` | String obligatorio con una de las claves temáticas de la tabla siguiente. |
| `titulo` | String obligatorio; título mostrado en la tarjeta. Conserva los títulos históricos. |
| `subtitulo` | String o `null`; título completo o subtítulo mostrado bajo el título. |
| `autores` | Array de strings con los nombres de los autores, en el orden de la fuente original; `[]` si no constan. |
| `año` | Número entero o `null`; año de la versión de la publicación registrada. La clave lleva ñ. |
| `fechaPublicacion` | String ISO `AAAA-MM-DD` o `null`; fecha de la versión registrada. Si solo conoces el año, usa `año` y deja esta fecha en `null`. |
| `tipoPublicacion` | String o `null`; por ejemplo, artículo de revista, congreso, preprint o dataset, según la fuente. |
| `archivo` | String o `null`; nombre/ruta relativa a `referencias/` de una ficha HTML existente. Nunca apuntes a una ficha inexistente. |
| `tags` | Array de strings; etiquetas visibles y buscables. Usa `[]` si no hay etiquetas. |
| `doi` | String o `null`; identificador DOI sin prefijo URL ni `doi:`. |
| `arxiv` | String o `null`; identificador arXiv sin URL ni prefijo `arXiv:`; puede incluir versión. |
| `urlPublicacion` | String URL HTTPS de la fuente original o `null`. Se muestra como fuente verificable al final de la ficha interna; ya no es el destino principal de la tarjeta. |
| `urlCodigo` | String URL HTTPS del código oficial enlazado por los autores o `null`; no asumas que un repositorio de terceros es oficial. |
| `tipoTarea` | Array de strings con las tareas verificadas: por ejemplo `ASR`, `Keyword Spotting`, clasificación de audio. `[]` si se desconoce. |
| `asrAbierto` | Booleano o `null`; reconocimiento/transcripción de habla de vocabulario abierto verificado. |
| `tinyml` | Booleano o `null`; ejecución TinyML verificada en microcontroladores o dispositivos con restricciones equivalentes. |
| `edge` | Booleano o `null`; ejecución local en un dispositivo de borde verificada. |
| `modelo` | String o `null`; nombre/arquitectura y variante concreta evaluada. |
| `parametros` | String o `null`; número de parámetros con unidad y variante del modelo. |
| `hardware` | String o `null`; dispositivo, procesador o acelerador de la evaluación. |
| `cuantizacion` | String o `null`; método, precisión y alcance de la cuantización documentada. |
| `poda` | String o `null`; método y grado de poda documentados. |
| `destilacion` | String o `null`; método y modelos profesor/alumno documentados. |
| `streaming` | Booleano o `null`; inferencia en streaming verificada. |
| `aprendizajeContinuo` | Booleano o `null`; aprendizaje continuo evaluado, no solo entrenamiento inicial. |
| `adaptacion` | String o `null`; método y escenario de adaptación documentados. |
| `wer` | String o `null`; Word Error Rate con unidad/porcentaje, dataset, partición y condiciones. |
| `cer` | String o `null`; Character Error Rate con unidad/porcentaje, dataset, partición y condiciones. |
| `ram` | String o `null`; consumo RAM con unidad, variante y condiciones de medición. |
| `flash` | String o `null`; almacenamiento/flash con unidad y alcance de la medición. |
| `latencia` | String o `null`; latencia con unidad, hardware y condiciones (no confundir con throughput o RTF). |
| `energia` | String o `null`; energía con unidad, hardware y alcance de medición; no confundir potencia con energía. |
| `datasets` | Array de strings con datasets y, cuando corresponda, idioma/partición usados; `[]` si se desconocen. |
| `limitaciones` | Array de strings con limitaciones sustentadas por las fuentes, sin especulación; `[]` si no constan. |
| `relevanciaTesis` | String o `null`; valoración explícita de la relación con la tesis, diferenciada de los resultados del artículo. |
| `fechaIncorporacion` | String ISO `AAAA-MM-DD` o `null`; fecha real de incorporación a la biblioteca, no de publicación. No inventes fechas históricas. |
| `fuenteVerificada` | Booleano o `null`; `true` solo tras comprobar existencia y metadatos en fuentes originales. `false` indica una comprobación negativa, `null` que no se ha comprobado. No añadas nuevas entradas de vigilancia con `false` o `null`. |

Los valores cuantitativos se guardan como strings con unidades y contexto para no presentar como comparables resultados de hardware, datasets o variantes diferentes. No introduzcas cifras sin contexto ni extrapoles mediciones. Las tarjetas y el buscador siguen usando los campos originales; la ficha dinámica muestra los metadatos y el informe estructurado cuando están disponibles. El buscador consulta título, subtítulo, etiquetas y nombre del tema.

### Informe estructurado para la ficha interna

Las futuras incorporaciones automáticas deben incluir estos campos además de los anteriores. Las ocho incorporaciones del 21/10/2026 tienen el informe completado; las 56 fichas históricas se conservan y no se rellenan con contenido inventado. El renderer admite registros históricos sin los campos nuevos y omite secciones vacías.

| Campo | Tipo y significado |
| --- | --- |
| `resumen` | String narrativo o `null`: problema, propuesta y alcance del trabajo. |
| `objetivoInvestigacion` | String o `null`: qué intentan resolver los autores. |
| `metodologia` | Array de strings: pasos documentados de arquitectura, datos, entrenamiento, adaptación, compresión, despliegue y evaluación, en ese orden cuando correspondan. No inventes pasos ausentes. |
| `procedimiento` | Array de strings: ejecución del experimento, controles, comparaciones y protocolo de medición, en orden. |
| `datosEntrenamiento` | Array de strings: corpora/splits, preentrenamiento, aumentación y configuración de entrenamiento o adaptación verificadas. `[]` si no constan o no hay entrenamiento nuevo. |
| `datosEvaluacion` | Array de strings: conjuntos/splits, condiciones, métricas y protocolo de evaluación. Separa entrenamiento de test y validación. |
| `resultadosPrincipales` | Array de strings: hallazgos verificados de los autores, con cifras, unidades, modelo, dataset, partición y condiciones suficientes para entenderlos. |
| `conclusiones` | Array de strings: conclusiones de los autores y su alcance. No incluir propuestas doctorales propias. |
| `limitaciones` | Campo ya existente, array de strings: limitaciones sustentadas por la fuente. No lo elimines ni cambies su tipo. |
| `aportacionTesis` | String o `null`: por qué interesa el trabajo a la tesis y qué pregunta permite estudiar. Es valoración propia y se muestra en **INTERÉS PARA LA TESIS**. |
| `datosPublicadosAutores` | Array de strings: evidencia publicada que sustenta la ficha, indicando secciones, tablas o apéndices de la versión enlazada cuando sea posible. |
| `interpretacionTesis` | String o `null`: hipótesis, propuestas y relaciones con ASR abierto, TinyML, Edge AI, eficiencia, adaptación continua, robustez o recursos. Debe distinguir lo que falta demostrar. |
| `lecturaPrioritaria` | String o `null`: valoración de prioridad con motivo y secciones recomendadas. Es interpretación doctoral, no resultado ni clasificación emitida por los autores. |

Son doce campos nuevos: `limitaciones` ya formaba parte del esquema. Mantén los campos previos, incluido `relevanciaTesis`; para la ficha, `aportacionTesis` es la explicación principal y `relevanciaTesis` sirve de respaldo si aquella falta.

Una investigación incorporada por vigilancia debe quedar suficientemente documentada para estudiar su problema, método, entrenamiento/evaluación, resultados y limitaciones sin tener que abrir primero el paper. Esto no autoriza a rellenar huecos: conserva `null` o `[]` cuando falte evidencia. Reabre la fuente original y completa únicamente lo verificable; no copies cifras de informes anteriores sin contrastarlas. Para benchmarks sin entrenamiento propio, deja `datosEntrenamiento: []` y explica el protocolo de construcción/evaluación.

La ficha separa visualmente **DATOS PUBLICADOS POR LOS AUTORES** de **INTERPRETACIÓN PARA LA TESIS**. No pongas propuestas propias en resumen de resultados, conclusiones ni evidencia publicada. En `aportacionTesis` e `interpretacionTesis`, identifica como hipótesis lo que el artículo no demuestra; `lecturaPrioritaria` permanece en el bloque interpretativo.

Conserva las unidades y el origen de cada medida. Distingue capacidades de hardware, tamaño del modelo, RAM real y memoria GPU; mediciones en placa, host y emulador; latencia, look-ahead, throughput y Real-Time Factor. Un RTF solo se incorpora si está publicado o puede calcularse directamente con tiempos y duraciones del mismo experimento, explicando el cálculo; nunca extrapoles a otro hardware. No confundas VAD energético con una medición de consumo energético.

### Enlaces internos y fuentes

- Si existe `archivo`, las tarjetas conservan el enlace a la ficha HTML histórica.
- Las nuevas investigaciones de vigilancia usan preferentemente `archivo: null`: tanto la biblioteca general como **NUEVA INFORMACIÓN** enlazan a `investigacion.html?id=ID`. No crees un HTML por trabajo y no uses `urlPublicacion` como destino principal de la tarjeta.
- `referencias/investigacion.html` carga `../data/investigaciones.json`, encuentra el ID y muestra solo los campos con información. Un ID ausente, desconocido o una carga fallida produce un aviso con acceso de vuelta a la biblioteca.
- La publicación original permanece enlazada al final de la ficha, junto con DOI, arXiv y código oficial únicamente si existen. Mantén `urlPublicacion` original y los identificadores verificables; no los sustituyas por la URL interna.
- **NUEVA INFORMACIÓN** y la insignia `Nueva` se calculan desde `fechaIncorporacion`: hoy y los 13 días anteriores según el calendario local del navegador. No añadas `esNueva`. La caducidad no elimina la investigación de su tema.

### Temas admitidos

| Clave | Tema |
| --- | --- |
| `ssl` | Aprendizaje auto-supervisado |
| `asr` | Reconocimiento y comprensión del habla |
| `audio` | Procesamiento de audio general |
| `audio-language` | Modelos de lenguaje para audio y habla |
| `reasoning` | Razonamiento y fundamentación acústica |
| `adaptacion` | Adaptación y aprendizaje continuo |
| `xai` | Explicabilidad en habla y audio |
| `fiabilidad` | Incertidumbre, calibración y OOD |
| `eficiencia` | Eficiencia, sostenibilidad y Edge AI |
| `datasets` | Recursos, datasets y evaluación |
| `seguridad` | Equidad, privacidad y seguridad |

Cada entrada tiene un tema principal. No inventes claves nuevas: requieren ampliar también la configuración de temas y filtros en una tarea explícita. Usa `tags` para categorías complementarias.

## Verificación y duplicados

1. Comprueba la existencia del trabajo y sus metadatos en fuentes originales: página de la editorial o del congreso, DOI que resuelva a la publicación, registro de arXiv y artículo de los autores. Para código y resultados, comprueba el repositorio oficial y el texto/tablas del trabajo. Un agregador, buscador o resumen generado no basta como fuente final.
2. Guarda la URL original consultada en `urlPublicacion` y los identificadores disponibles. No marques `fuenteVerificada` como `true` sin haber abierto y contrastado la fuente. Ante información insuficiente, no añadas la entrada todavía.
3. Antes de añadir, compara con **todo** el JSON: DOI normalizado (quita `https://doi.org/`, `http://dx.doi.org/`, `doi:`, espacios y diferencias de mayúsculas); identificador arXiv sin prefijos ni sufijo de versión `vN`; título completo normalizado (incluye `subtitulo`, ignora mayúsculas, tildes, espacios repetidos y puntuación); y URL canónica (resuelve redirecciones y elimina parámetros de seguimiento y fragmentos). No alteres parámetros que identifiquen realmente una publicación.
4. Un DOI, arXiv o URL coincidente es una señal fuerte de duplicado. Un título similar requiere revisar autores, año y fuente. El preprint y su versión publicada pueden ser el mismo trabajo aunque tengan distintos identificadores. No añadas una nueva entrada por cada versión: conserva el ID y los datos existentes; completa metadatos verificados sin borrar ni reescribir el contenido científico anterior. Si hay conflicto, deja la actualización pendiente de revisión.
5. Comprueba también que `id` es único. No generes IDs por posición del array ni reemplaces el fichero con solo las nuevas entradas.

## Distinciones científicas obligatorias

- **ASR abierto y Keyword Spotting son tareas distintas.** Detectar un conjunto cerrado de palabras/comandos no demuestra transcripción de vocabulario abierto. No marques `asrAbierto: true` por el mero uso de audio, redes neuronales o reconocimiento de comandos. Clasifica en `tipoTarea` según lo que realmente evalúe el artículo; conserva `null` si no está claro.
- **TinyML y Edge AI son distintos.** Edge AI incluye móviles, placas y aceleradores con muchos más recursos que un microcontrolador. Un modelo pequeño, comprimido o ejecutado en un dispositivo de borde no demuestra TinyML. Marca `tinyml` solo con evidencia de plataforma y restricciones; verifica `edge` de forma independiente. No deduzcas consumo RAM/flash, latencia o energía del número de parámetros.

## Incorporación y comprobación local

1. Parte de la estructura de un objeto existente, asigna un nuevo ID estable y limpia cualquier dato heredado del objeto usado como plantilla. Completa solo información verificada y conserva todas las claves y tipos anteriores.
2. Selecciona un tema admitido. Para una publicación nueva, usa preferentemente `archivo: null` y una `urlPublicacion` HTTPS original verificada. La tarjeta abrirá automáticamente `investigacion.html?id=ID`; no crees HTML independiente ni pongas la URL interna en `urlPublicacion`. Las referencias con `archivo` conservan su ficha histórica. Completa el informe estructurado con los datos verificables.
3. Añade el objeto al array sin eliminar, reordenar innecesariamente ni modificar otras investigaciones. Guarda JSON válido, sin comentarios ni comas finales, y establece la fecha real de incorporación y `fuenteVerificada: true` tras completar la verificación.
4. Desde la raíz del repositorio ejecuta:

   ```bash
   python3 -m json.tool data/investigaciones.json > /dev/null
   node --check js/referencias.js
   node --check js/investigacion.js
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

5. Abre mediante HTTP `referencias/index.html` en el navegador. No uses `file://`: `fetch()` necesita servir el JSON por HTTP, como hace GitHub Pages. No se requiere backend ni compilación. La ruta relativa `../data/investigaciones.json` funciona también cuando GitHub Pages publica el sitio bajo `/Doctorado/`.
6. Comprueba que se descarga el JSON, aparece la nueva tarjeta en su tema, el contador aumenta, el buscador encuentra el título/etiquetas y los filtros y el botón de limpiar funcionan. Abre la tarjeta y verifica su ficha interna, metodología, resultados, limitaciones, separación de interpretación y botones de fuentes. Prueba también la sección de novedades con fecha reciente y caducada y conserva los enlaces a fichas históricas. Valida todo bajo `/Doctorado/` además de la raíz. Revisa la consola por errores JavaScript y conserva la apariencia actual. Una carga HTTP fallida o JSON inválido debe mostrar un aviso de error, nunca presentarse como una biblioteca vacía válida.
7. Revisa el diff. En una incorporación rutinaria solo debe cambiar `data/investigaciones.json`. No cambies automáticamente JavaScript, estilos, fichas históricas ni otras secciones.
