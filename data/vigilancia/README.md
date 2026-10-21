# Cola de vigilancia científica

Este directorio almacenará temporalmente los informes estructurados generados por la vigilancia científica antes de incorporar sus investigaciones verificadas a `data/investigaciones.json`.

Cada informe futuro será un fichero JSON con una estructura como esta (ejemplo de formato, no es un informe real):

```json
{
  "fechaVigilancia": "2026-10-28",
  "estado": "pendiente",
  "candidatos": []
}
```

Estados permitidos:

- `pendiente`: informe pendiente de revisión y verificación.
- `procesado`: revisión e incorporación de los candidatos admisibles completadas.
- `error`: un error impide completar el procesamiento; requiere revisión.

La cola no se muestra en la biblioteca ni implica que un candidato esté verificado. Antes de incorporar entradas a la fuente pública, aplica `AUTOMATIZACION_VIGILANCIA.md`: fuentes originales, duplicados y clasificación científica. Conserva los datos desconocidos sin inventarlos.

La incorporación verificada debe registrar su fecha real en `fechaIncorporacion` (ISO `AAAA-MM-DD`). La web calcula automáticamente las novedades a partir de esa fecha: hoy y los 13 días anteriores según el calendario local del navegador; a los 14 días dejan de ser nuevas. No añadas un campo manual `esNueva`.

No se incluyen informes ficticios en este directorio.
