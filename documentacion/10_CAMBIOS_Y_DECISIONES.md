# Cambios y decisiones del proyecto

**Estado:** VIGENTE · **Versión:** 1.2 · **Fecha:** 2026-09-08

Este documento registra decisiones consolidadas. Una decisión nueva debe indicar fecha, sección afectada, referencia resultante y documentos que requieren actualización.

## Decisiones vigentes

| ID | Fecha | Decisión | Consecuencia documental |
|---|---|---|---|
| D-001 | 2026-08-30 | El edificio principal se amplía a dos claustros consecutivos. | Prohibida cualquier vuelta al volumen de un claustro. |
| D-002 | 2026-08-30 | Fútbol sala y voleibol pasan a pabellones cerrados y cubiertos. | Las pistas no son visibles desde el exterior cenital. |
| D-003 | 2026-08-30 | El gimnasio es único y se traslada al norte de las pistas de tenis. | No existe gimnasio en el complejo nordeste. |
| D-004 | 2026-08-30 | Se crea una cafetería entre deportes y juegos. | Se desplazan hacia el norte los volúmenes deportivos necesarios. |
| D-005 | 2026-08-30 | La terminal de autobuses se amplía y se hace pasante y funcional. | Entrada sureste, salida nordeste y dársenas en un solo lado. |
| D-006 | 2026-08-31 | El parque de estancia conserva dos caminos largos y un conector corto. | Exactamente 14 bancos orientados hacia sus caminos. |
| D-007 | 2026-08-31 | Todas las ventanas del edificio principal son acristaladas y de medio punto. | Prohibidos huecos rectangulares o ciegos en cualquier planta. |
| D-008 | 2026-08-31 | La fachada sur tiene tres plantas, 19 ejes y un único arco de acceso. | Composición `8 + 3 + 8`, sin triple entrada. |
| D-009 | 2026-09-01 | Los tres piñones son cubiertas transversales a dos aguas integradas. | Igual altura general; prohibidos pabellones piramidales elevados. |
| D-010 | 2026-09-01 | El panel exterior utiliza ocho miniaturas existentes. | No se inventan miniaturas ni se incluyen interiores. |
| D-011 | 2026-09-01 | El escudo de la cancela es pequeño, calado y de forja con acabado bronce. | Se elimina la interpretación como placa o medallón macizo. |
| D-012 | 2026-09-02 | Las dos parcelas interiores del acceso pasan de naranjos a almendros en flor. | v47 sustituye a v43 para el paisaje del acceso; los naranjales exteriores permanecen. |
| D-013 | 2026-09-02 | Se aprueba un mapa maestro con 22 códigos de zona agrupados de A a G. | Los códigos de `11_MAPA_MAESTRO_DE_ZONAS.md` se utilizarán en futuras instrucciones. |
| D-014 | 2026-09-02 | Se adopta para B1 un colegio de dos líneas, 30 grupos y unos 780 alumnos. | Se distribuyen Infantil y Primaria inicial en PB, Primaria superior en P1 y Secundaria/Bachillerato en P2. |
| D-015 | 2026-09-02 | Se aprueba el programa interior B1 con 96 estancias, planos coordinados y 36 escenas tipológicas. | Los códigos B1-PB, B1-P1 y B1-P2 pasan a ser la referencia única para cambios interiores. |
| D-016 | 2026-09-02 | SUPERADA: se propusieron patios interiores B2 y B3 de 20 × 20 m. | Sustituida por D-017; v57 y v58 quedan obsoletas. |
| D-017 | 2026-09-03 | Se corrige la dimensión de los patios interiores B2 y B3 a 30 × 30 m. | D-016 queda superada; las vistas v59, el panel v60 y los tres planos v49 incorporan la medida definitiva. |
| D-018 | 2026-09-07 | SUPERADA PARCIALMENTE por D-030 en la vegetación: los claustros B2 y B3 adoptan pavimento de adoquines de piedra natural (vigente) y vegetación mediterránea abundante (sustituida por la plantación tropical de D-030). | Las imágenes v61 y v62 que la ilustraban fueron retiradas por el usuario (D-029). El catálogo v59 y el panel v60 siguen pendientes de incorporar adoquines y plantación vigente. |
| D-019 | 2026-09-07 | Se publica el repositorio como versión 1.0.0 bajo licencia CC BY-NC-SA 4.0. | Uso exclusivamente no comercial; los cambios posteriores se registran en `CHANGELOG.md`. |
| D-020 | 2026-09-07 | Cada claustro incorpora un reloj de sol vertical en la cara sur de su ala norte, sobre el arco central y bajo la ventana, sin tapar huecos. | Representado en las ediciones v64–v67, retiradas por el usuario (D-029); la regla se mantiene en `01`. La calibración del gnomon y las líneas horarias requieren comprobación técnica. |
| D-021 | 2026-09-07 | La pieza central de B2 (claustro sur) pasa a ser un pozo de piedra con arco de forja y cierre metálico; B3 (claustro norte) conserva su fuente. | Sustituye la regla anterior de «fuente» en ambos patios. Representado en v65–v67, retiradas (D-029); regla en `01`. |
| D-022 | 2026-09-07 | Los caminos adoquinados de cada claustro forman dos ejes perpendiculares norte-sur y este-oeste que conectan con las cuatro galerías y delimitan cuatro sectores ajardinados. | Representado en v67, retirada (D-029); regla en `01`. |
| D-023 | 2026-09-07 | La iluminación de la edición v67 de los claustros se adopta como criterio fotográfico para todas las imágenes nuevas. | Al retirarse v67 (D-029), el criterio se conserva únicamente como descripción textual e instrucción reutilizable en `09`; no autoriza inventar hora ni azimut solar ni modificar imágenes existentes. |
| D-024 | 2026-09-07 | RATIFICADA por D-030: el usuario solicitó sustituir en los claustros los olivos, cítricos y árboles de flor por monsteras, aves del paraíso y ficus (v68). | Registrada inicialmente como contradicción con `01` y D-018; resuelta el 2026-09-08 por D-030. Ficha: `CLAUSTROS_V68_PLANTACION.md`. |
| D-025 | 2026-09-07 | La composición vegetal de E2 pasa a una hilera axial norte-sur de datileras adultas, césped continuo y grupos de palmitos. Trazado, conector y 14 bancos no cambian. | v69 es la referencia vegetal. Las vistas ortogonales anteriores v28, v29 y v31 fueron retiradas (D-029); el trazado y los bancos quedan definidos solo por texto en `05` hasta que exista una planta ortogonal nueva. Fichas `E2_V69`–`E2_V71`. |
| D-026 | 2026-09-08 | D1 se transforma en huerto mediterráneo: olivos, clementinos, limoneros, kumquats, dos pérgolas de parras de Malvasía, arcadas de jazmín, maría luisa y bancales de aromáticas, conservando eje, diagonales, nodos circulares y seto de murta. | v74 es la implantación conceptual vigente; v75 son vistas de ambiente. Las ediciones previas v72 y v73 fueron retiradas (D-029). Se requiere plano de plantación. Fichas `D1_V74` y `D1_V75`. |
| D-027 | 2026-09-07 | La carpeta `imagenes/parque-principal/` se traslada a `imagenes/jardín/parque-principal/`. | Todas las rutas de la documentación apuntan a la nueva carpeta. Los archivos v28, v29 y v31 que contenía fueron retirados por el usuario (D-029). |
| D-028 | 2026-09-08 | Auditoría documental: se completa el registro de imágenes hasta v75, se normalizan las rutas a Unicode NFC y se amplía `validar_b1.mjs` para impedir la repetición de los fallos detectados. | Nuevas comprobaciones automáticas: completitud del registro, enlaces de `README.md` y `CLAUDE.md`, índice completo, IDs consecutivos, versión máxima coherente y normalización de rutas. Véase «Lecciones de la auditoría». |
| D-029 | 2026-09-08 | El usuario retira del proyecto 13 imágenes y sus 8 fichas: claustros v61–v67, huerto D1 v72 y v73, seto de murta v21 y parque-bancos v28, v29 y v31. | Se eliminan sus archivos, filas de `09`, fichas y enlaces. Las reglas de diseño que ilustraban (D-018, D-020 a D-023, D-025, D-026) siguen vigentes por escrito. Hasta nueva imagen, E2 carece de planta ortogonal. |
| D-030 | 2026-09-08 | Se ratifica la plantación de porte tropical en B2 y B3 propuesta en v68: monsteras, aves del paraíso y ficus formados como pequeños árboles, sobre el trazado adoquinado en cruz. Sustituye la vegetación mediterránea de D-018; adoquines, cruce, pozo, fuente y relojes se mantienen. | v68 pasa a `VIGENTE` y es la referencia de los claustros; `01` actualiza su regla de plantación; la prohibición de especies tropicales queda restringida a D1 en `05`. Propuesta visual: especies, microclima, hielo, raíces y mantenimiento requieren comprobación hortícola. |
| D-031 | 2026-09-08 | Se publica la versión 2.0.0 del repositorio. | Versión mayor por la retirada de referencias antes vigentes (D-029) y el cambio de la regla de plantación de los claustros (D-030). `README.md`, `CHANGELOG.md` y etiqueta `v2.0.0` actualizados; el validador comprueba la coherencia entre ambos. |

Los identificadores siguen el orden de registro, no el cronológico: la fecha de cada fila es la de la petición del usuario, por lo que puede ser anterior a la de una fila precedente (p. ej. D-026 y D-027).

## Contradicciones resueltas

- **Parcelas del acceso:** almendros en flor, no naranjos. Los naranjos siguen siendo obligatorios fuera del recinto.
- **Escudo:** pieza calada de 0,45–0,60 m; no bajorrelieve ni placa maciza.
- **Panel actual:** ocho miniaturas exteriores reales; los interiores se conservan como referencias de sección, no como miniaturas del panel exterior.
- **Cubierta:** los piñones no sobresalen de la altura coordinada del conjunto.
- **Pieza central de los claustros:** pozo en B2 y fuente en B3 (D-021); la antigua regla de «una fuente por patio» queda superada.
- **Vistas de E2:** las imágenes v69–v71 son conceptuales con perspectiva residual. Ninguna de ellas puede llamarse planta, alzado o perfil en sentido estricto.
- **Plantación de los claustros:** tropical de porte contenido (monsteras, aves del paraíso, ficus) según D-030; la regla mediterránea de D-018 queda superada en este punto y la prohibición de especies tropicales solo rige en D1.

## Contradicciones abiertas

- **Zonas sin vista ortogonal (D-029):** E2 no tiene planta, alzado ni perfil ortogonales tras la retirada de v28/v29/v31; D1 carece de planta dimensionada.

## Lecciones de la auditoría del 2026-09-08

Errores detectados y regla que los evita en adelante:

1. **Imágenes eliminadas del disco mientras la documentación seguía enlazándolas** (13 archivos), lo que dejaba 22 enlaces rotos. Regla: una retirada de archivos se registra en `10` con su `D-NNN` y en el mismo cambio se eliminan sus filas de `09`, sus fichas y todos sus enlaces. El validador falla si un enlace apunta a un archivo inexistente.
2. **Traslado de carpeta sin actualizar el resto.** Regla: mover con `git mv`, actualizar rutas y ejecutar el validador inmediatamente después.
3. **Imágenes nuevas sin fila en el registro** (v68–v75 y fuentes sin rotular). Regla: toda imagen o plano del repositorio tiene una fila en `09`; el validador lo comprueba.
4. **Fichas nuevas sin enlace en el índice.** Regla: todo `.md` de `documentacion/` se enlaza desde `00`; el validador lo comprueba.
5. **Cambios de diseño sin decisión `D-NNN`** (relojes, pozo, cruce, datileras, huerto, criterio fotográfico). Regla: una ficha de versión que describa un cambio de diseño cita su decisión y el módulo de zona se actualiza en el mismo cambio.
6. **Rutas con la letra í en dos normalizaciones Unicode** (`jardín` NFD en los documentos, NFC en git). Regla: las rutas se escriben en NFC; el validador rechaza enlaces que solo coinciden tras normalizar.
7. **Documentos raíz desactualizados** (`README.md`, `CLAUDE.md` y `CHANGELOG.md` decían que v62 era la última versión y citaban 269 comprobaciones). Regla: el validador compara la versión máxima de los archivos con la declarada en `README.md`.
8. **Enlaces de la raíz fuera del validador.** Regla: el validador comprueba también los enlaces y `src` de `README.md` y `CLAUDE.md`.
9. **Restauración de archivos sin consultar.** Durante la auditoría se recuperaron de la papelera archivos que el usuario había eliminado a propósito; hubo que deshacerlo (D-029). Regla: ante archivos ausentes, preguntar al usuario si la eliminación fue intencionada antes de restaurar nada.
10. **Fichas que seguían citando como «conservada» una versión base ya retirada** («original conservado», «referencia anterior conservada»). Regla: al retirar una versión, revisar toda ficha que la nombre como base y actualizar la frase.
11. **Contadores escritos a mano en `README.md`** (número de decisiones, comprobaciones del validador, versión publicada) sin ninguna comprobación. Regla: el validador compara esos tres valores con `10`, con su propio total y con el primer bloque de `CHANGELOG.md`.
12. **Citas `D-NNN` y cabeceras de ficha sin verificar.** Regla: el validador rechaza cualquier cita a una decisión inexistente y exige que toda ficha declare Estado, Zona y Decisión.
13. **Módulo editado sin subir versión ni fecha** (`11` tras cambiar la fila D1). Regla: cualquier edición de contenido de un módulo actualiza su cabecera de versión y fecha.

## Procedimiento para una decisión nueva

1. Añadir una fila con un ID consecutivo.
2. Actualizar el módulo afectado.
3. Actualizar el registro de imágenes.
4. Marcar como obsoleta o pendiente cualquier imagen incompatible.
5. Enlazar la ficha de versión, si existe, desde `00_INDICE_Y_REGLAS_MAESTRAS.md`.
6. Ejecutar `node herramientas/validar_b1.mjs` y las comprobaciones de `00_INDICE_Y_REGLAS_MAESTRAS.md`.

## Última validación

**Fecha:** 2026-09-08  
**Resultado:** APROBADA (versión 2.0.0)

- 20 documentos presentes: índice, once módulos, mapa maestro, dos documentos del programa interior y seis fichas de versión (claustros v68, E2 v69–v71, D1 v74–v75), todos enlazados desde el índice y con cabecera de estado, zona y decisión.
- `validar_b1.mjs` aprueba sin errores con las comprobaciones ampliadas de D-028 y D-031 (citas `D-NNN`, cabeceras de ficha, contadores y versión del `README.md`).
- Los 13 archivos retirados por D-029 no tienen ya ningún enlace ni fila; todas las imágenes presentes figuran en el registro con su estado.
- La plantación de los claustros queda ratificada (D-030) y v68 es su referencia vigente; no quedan contradicciones de diseño abiertas.
- Todas las rutas de la documentación están en Unicode NFC y resuelven.
- Todos los módulos operativos contienen lista de aceptación.
- Los tres planos v49 contienen 96 códigos únicos y conservan los dos claustros B2 y B3 de 30 × 30 m.
- Queda abierta la falta de vistas ortogonales de E2 y D1 (D-029).
