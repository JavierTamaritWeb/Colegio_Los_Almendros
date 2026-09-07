# Cambios y decisiones del proyecto

**Estado:** VIGENTE · **Versión:** 1.1

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
| D-018 | 2026-09-07 | Los claustros B2 y B3 adoptan vegetación mediterránea abundante y pavimento de adoquines de piedra natural. | v62 es la referencia vigente de vegetación y pavimento; v61 queda como auxiliar; el catálogo v59 y el panel v60 pasan a pendientes. |
| D-019 | 2026-09-07 | Se publica el repositorio como versión 1.0.0 bajo licencia CC BY-NC-SA 4.0. | Uso exclusivamente no comercial; los cambios posteriores se registran en `CHANGELOG.md`. |

## Contradicciones resueltas

- **Parcelas del acceso:** almendros en flor, no naranjos. Los naranjos siguen siendo obligatorios fuera del recinto.
- **Escudo:** pieza calada de 0,45–0,60 m; no bajorrelieve ni placa maciza.
- **Panel actual:** ocho miniaturas exteriores reales; los interiores se conservan como referencias de sección, no como miniaturas del panel exterior.
- **Cubierta:** los piñones no sobresalen de la altura coordinada del conjunto.

## Procedimiento para una decisión nueva

1. Añadir una fila con un ID consecutivo.
2. Actualizar el módulo afectado.
3. Actualizar el registro de imágenes.
4. Marcar como obsoleta o pendiente cualquier imagen incompatible.
5. Ejecutar las comprobaciones de `00_INDICE_Y_REGLAS_MAESTRAS.md`.

## Última validación

**Fecha:** 2026-09-07  
**Resultado:** APROBADA

- 15 documentos presentes, incluidos el mapa maestro, los dos documentos específicos del programa interior y la ficha de claustros v61/v62.
- `validar_b1.mjs` aprueba con 269 comprobaciones correctas y sin errores.
- Las imágenes v61 y v62 figuran en el registro con su estado; el catálogo v59 y el panel v60 quedan marcados como pendientes.
- Todos los módulos operativos contienen lista de aceptación.
- Todos los enlaces internos y referencias gráficas son válidos.
- Las reglas críticas aparecen en la documentación activa.
- No se detectan contradicciones activas sobre parcelas interiores, escudo, piscina infantil, ubicación del gimnasio o número de miniaturas.
- El mapa maestro v48 contiene 22 códigos únicos y coincide con la nomenclatura documental.
- Los tres planos v49 contienen 96 códigos únicos y conservan los dos claustros B2 y B3.
- Los catálogos vigentes v50–v53, v55 y v59, junto con el panel v60, reúnen 36 escenas conceptuales coherentes con los códigos del programa.
