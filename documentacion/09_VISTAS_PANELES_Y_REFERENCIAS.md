# Vistas, paneles y registro de referencias

**Estado:** VIGENTE · **Versión:** 1.7 · **Fecha:** 2026-09-09

## Criterio fotográfico vigente para nuevas imágenes

Por indicación del usuario, la referencia de iluminación fue la edición v67 de los claustros (decisión D-023). Esa imagen fue retirada del proyecto (D-029), por lo que el criterio se conserva únicamente como la descripción textual siguiente. Aplicar en las nuevas imágenes del proyecto, salvo petición posterior explícita de otra atmósfera.

- Luz diurna cálida y direccional, con sombras definidas pero compensadas por luz ambiente; no confundir con luz completamente difusa de cielo cubierto.
- Exposición luminosa en piedra y pavimentos, conservando detalle en altas luces. Mantener profundidad en arcos y vegetación sin oscurecer globalmente la escena.
- Balance cálido moderado: piedra crema, madera miel, verdes naturales y cielo azul suave. Evitar dominante naranja, verdes fluorescentes y saturación excesiva.
- Contraste medio, localmente marcado en arquerías y copas; textura legible sin halos ni aspecto HDR agresivo.
- Mantener coherencia del sol y sombras según la orientación de cada vista. El estilo no autoriza inventar una hora, azimut o calibración solar verificadas. La imagen de referencia es un render, no una medición fotográfica.
- En interiores, adaptar la misma claridad y calidez a la entrada real de luz por ventanas, sin inventar sol donde no pueda entrar. En vistas nocturnas expresamente solicitadas, adaptar el criterio de color y legibilidad sin fingir iluminación diurna.
- No cambiar arquitectura, vegetación aprobada, mobiliario ni distribución para reproducir la iluminación.

Instrucción reutilizable: «Luz natural diurna cálida, direccional, sombras definidas con relleno ambiental, piedra luminosa sin quemar, verdes naturales, azul suave, contraste equilibrado y materiales realistas. Evitar atmósfera oscura, dominante naranja y HDR artificial. Respetar orientación física y diseño aprobado».

Comprobar antes de entregar: conservación de detalles claros y oscuros; color coherente; sombras plausibles; ninguna alteración del diseño causada por el ajuste de luz. No se han modificado imágenes existentes con esta decisión.

## Tipos de vista

- **Vista general:** aérea oblicua de 35–45°, recinto completo y margen de cultivo en los cuatro lados.
- **Planta:** proyección ortogonal exacta a 90°, norte arriba, sin horizonte ni fachadas visibles.
- **Alzado:** ortogonal frontal, sin convergencia de perspectiva.
- **Perfil:** ortogonal lateral, sin convergencia de perspectiva.
- Una imagen no puede denominarse planta si muestra ventanas o caras verticales.

## Panel exterior vigente

- Formato horizontal aproximado 3:2.
- Una vista general dominante y exactamente ocho miniaturas exteriores.
- Miniaturas recomendadas: fachada, cancela, muro/verja, zona deportiva, piscinas exteriores, parque, perfil del parque y terminal de autobuses.
- Las miniaturas se insertan desde archivos existentes; no se generan escenas sustitutas.
- El panel [v77](../imagenes/panel-presentacion/panel-presentacion-arquitectonica-exteriores-8-miniaturas-v77.png) integra D1, E2 y claustros actualizados. Sus ocho miniaturas existentes muestran cancela, muro, deporte, piscinas, D1, E2, claustros abiertos y autobuses. Ficha y límites: [PANEL_MAPA_V77.md](PANEL_MAPA_V77.md).

## Estados permitidos

- `VIGENTE`: referencia actual obligatoria.
- `AUXILIAR`: puede aclarar una parte, pero no sustituye a una imagen vigente.
- `PENDIENTE`: contiene una solución útil pero necesita actualización.
- `OBSOLETA`: no debe usarse para generar ni verificar.

## Registro de imágenes

Regla de completitud: **todo archivo de imagen o plano del repositorio debe tener una fila en esta tabla**, incluidas las fuentes sin rotular y las versiones superadas. Una versión superada cambia su estado a `OBSOLETA` o `AUXILIAR` y se conserva. Un archivo solo se retira del proyecto por decisión expresa del usuario registrada en `10`; en ese caso se eliminan a la vez el archivo, su fila, su ficha y todos sus enlaces (véase D-029). `validar_b1.mjs` comprueba que no quede ningún archivo sin fila ni ninguna fila sin archivo.

| Archivo | Estado | Uso autorizado |
| --- | --- | --- |
| [mapa-maestro-zonas-v77.png](../imagenes/panel-presentacion/mapa-maestro-zonas-v77.png) | VIGENTE | Localización y 22 códigos; base actualizada v77 (D-033). No es plano métrico |
| [vista-general-actualizada-v77.png](../imagenes/panel-presentacion/vista-general-actualizada-v77.png) | VIGENTE | Síntesis de presentación con D1, E2 y claustros actualizados; las referencias específicas prevalecen en geometría y detalles (D-033) |
| [d1-huerto-aromaticas-v76.png](../imagenes/jardín/huerto/d1-huerto-aromaticas-v76.png) | AUXILIAR | Sustituye la etiqueta de aromáticas v75 por Huerto (D-032); vista conceptual |
| [croquis-tejado-edificio-principal.jpg](../imagenes/edificio-principal/croquis-tejado-edificio-principal.jpg) | VIGENTE | Geometría de cubierta |
| [detalle-verificacion-tejado-v43.png](../imagenes/edificio-principal/detalle-verificacion-tejado-v43.png) | VIGENTE | Comprobación cenital de cubierta |
| [fachada-entrada-plataneros-v36.png](../imagenes/entrada/fachada-entrada-plataneros-v36.png) | VIGENTE | Fachada, acceso, arcos y plátanos; la cubierta se verifica exclusivamente con v43 |
| [b1-planta-baja-v49.png](../planos/b1-planta-baja-v49.png) | VIGENTE | Distribución funcional y códigos de planta baja |
| [b1-planta-primera-v49.png](../planos/b1-planta-primera-v49.png) | VIGENTE | Distribución funcional y códigos de planta primera |
| [b1-planta-segunda-v49.png](../planos/b1-planta-segunda-v49.png) | VIGENTE | Distribución funcional y códigos de planta segunda |
| [b1-programa-tres-plantas-v49.png](../planos/b1-programa-tres-plantas-v49.png) | VIGENTE | Lámina coordinada de las tres plantas |
| [b1-planta-baja-v49.svg](../planos/b1-planta-baja-v49.svg) · [b1-planta-primera-v49.svg](../planos/b1-planta-primera-v49.svg) · [b1-planta-segunda-v49.svg](../planos/b1-planta-segunda-v49.svg) | AUXILIAR | Fuentes SVG editables de los tres planos; se regeneran con `generar_planos_b1.mjs` |
| [interiores-planta-baja-v50.png](../imagenes/edificio-principal/interiores/interiores-planta-baja-v50.png) · [interiores-planta-primera-v51.png](../imagenes/edificio-principal/interiores/interiores-planta-primera-v51.png) · [interiores-planta-segunda-v52.png](../imagenes/edificio-principal/interiores/interiores-planta-segunda-v52.png) · [interiores-espacios-comunes-v53.png](../imagenes/edificio-principal/interiores/interiores-espacios-comunes-v53.png) · [interiores-apoyo-servicios-v55.png](../imagenes/edificio-principal/interiores/interiores-apoyo-servicios-v55.png) | AUXILIAR | Fuentes sin rotular de los catálogos v50–v53 y v55; se usan solo como entrada de `rotular_interiores.mjs` |
| [interiores-patrimonio-bienestar-v59.png](../imagenes/edificio-principal/interiores/interiores-patrimonio-bienestar-v59.png) · [claustros-b2-b3-30x30-v59.png](../imagenes/edificio-principal/interiores/claustros-b2-b3-30x30-v59.png) | AUXILIAR | Fuentes sin rotular del catálogo v59 y de la pareja de claustros; entrada de `actualizar_claustros_30m.mjs` |
| [catalogo-interiores-planta-baja-v50.png](../imagenes/edificio-principal/interiores/catalogo-interiores-planta-baja-v50.png) | VIGENTE | Ambiente y equipamiento de espacios tipo de PB |
| [catalogo-interiores-planta-primera-v51.png](../imagenes/edificio-principal/interiores/catalogo-interiores-planta-primera-v51.png) | VIGENTE | Ambiente y equipamiento de espacios tipo de P1 |
| [catalogo-interiores-planta-segunda-v52.png](../imagenes/edificio-principal/interiores/catalogo-interiores-planta-segunda-v52.png) | VIGENTE | Ambiente y equipamiento de espacios tipo de P2 |
| [catalogo-interiores-espacios-comunes-v53.png](../imagenes/edificio-principal/interiores/catalogo-interiores-espacios-comunes-v53.png) | VIGENTE | Galerías, apoyo, profesores, núcleos y aseos |
| [claustros-b2-b3-30x30-rotulado-v59.png](../imagenes/edificio-principal/interiores/claustros-b2-b3-30x30-rotulado-v59.png) | VIGENTE | Rotulación y dimensión de B2 y B3, cuadrados de 30 × 30 m y tres plantas. La plantación, los adoquines, el cruce, el pozo y los relojes se toman de v68 |
| [claustros-monsteras-ficus-v68.png](../imagenes/edificio-principal/interiores/claustros-monsteras-ficus-v68.png) | VIGENTE | Referencia de los claustros hacia el norte: plantación tropical ratificada (D-030), cruce adoquinado, pozo en B2, fuente en B3 y relojes de sol (D-020 a D-022). Ficha: [CLAUSTROS_V68_PLANTACION.md](CLAUSTROS_V68_PLANTACION.md) |
| [catalogo-interiores-patrimonio-bienestar-v59.png](../imagenes/edificio-principal/interiores/catalogo-interiores-patrimonio-bienestar-v59.png) | PENDIENTE | Claustros de 30 × 30 m, psicomotricidad, calma, proyectos y familias; pendiente de incorporar los adoquines y la plantación de v68 |
| [catalogo-interiores-apoyo-servicios-v55.png](../imagenes/edificio-principal/interiores/catalogo-interiores-apoyo-servicios-v55.png) | VIGENTE | Administración, estudio, mediateca y servicios |
| [panel-programa-interior-b1-v60.png](../imagenes/edificio-principal/panel-programa-interior-b1-v60.png) | PENDIENTE | Panel conjunto de 36 escenas interiores conceptuales; pendiente de incorporar los adoquines y la plantación de v68 en los claustros |
| [cancela.png](../imagenes/entrada/cancela.png) | VIGENTE | Cancela y escudo calado |
| [detalle-muro-verja-perimetral-v45.png](../imagenes/entrada/detalle-muro-verja-perimetral-v45.png) | VIGENTE | Cerramiento perimetral |
| [gimnasio.png](../imagenes/gimnasio/gimnasio.png) | VIGENTE | Interior y equipamiento del gimnasio |
| [detalle-zona-deportiva-exterior-v45.png](../imagenes/gimnasio/detalle-zona-deportiva-exterior-v45.png) | AUXILIAR | Recorte del deporte exterior; no es una vista del gimnasio |
| [piscinas-vista-aerea-v23.png](../imagenes/piscina/piscinas-vista-aerea-v23.png) | VIGENTE | Implantación exterior del complejo acuático |
| [piscinas-con-cubierta.png](../imagenes/piscina/piscinas-con-cubierta.png) | VIGENTE | Estado cerrado de la cubierta |
| [piscinas-sin-cubierta.png](../imagenes/piscina/piscinas-sin-cubierta.png) | VIGENTE | Estado abierto de la cubierta |
| [e2-jardin-datileras-v69.png](../imagenes/jardín/parque-principal/e2-jardin-datileras-v69.png) | VIGENTE | Composición vegetal de E2 (D-025): hilera axial de datileras, césped y palmitos. Cenital conceptual con perspectiva residual; no es planta ortogonal. Tras la retirada de v28, v29 y v31 (D-029), el trazado y los 14 bancos se rigen por el texto de `05`. Ficha: [E2_V69_JARDIN_DATILERAS.md](E2_V69_JARDIN_DATILERAS.md) |
| [e2-vista-frontal-sur-v70.png](../imagenes/jardín/parque-principal/e2-vista-frontal-sur-v70.png) | AUXILIAR | Vista conceptual hacia el norte; no es alzado ortogonal ni verifica los 14 bancos. Ficha: [E2_V70_VISTA_FRONTAL.md](E2_V70_VISTA_FRONTAL.md) |
| [e2-perfil-este-v71.png](../imagenes/jardín/parque-principal/e2-perfil-este-v71.png) | AUXILIAR | Vista lateral conceptual desde el este; no es perfil ortogonal métrico. Ficha: [E2_V71_PERFIL.md](E2_V71_PERFIL.md) |
| [d1-parras-protagonistas-v74.png](../imagenes/jardín/huerto/d1-parras-protagonistas-v74.png) | VIGENTE | Implantación conceptual del huerto mediterráneo D1 con dos pérgolas de parras ampliadas y seto de murta perimetral (D-026). Ficha: [D1_V74_PARRAS.md](D1_V74_PARRAS.md) |
| [d1-v75-01-general.png](../imagenes/jardín/huerto/d1-v75-01-general.png) · [d1-v75-02-parras.png](../imagenes/jardín/huerto/d1-v75-02-parras.png) · [d1-v75-03-frutales.png](../imagenes/jardín/huerto/d1-v75-03-frutales.png) · [d1-v75-04-aromaticas.png](../imagenes/jardín/huerto/d1-v75-04-aromaticas.png) | AUXILIAR | Cuatro vistas de ambiente derivadas de v74; no certifican geometría ni especies. Ficha: [D1_V75_CUATRO_VISTAS.md](D1_V75_CUATRO_VISTAS.md) |
| [parking-bus.png](../imagenes/parking/parking-bus.png) | VIGENTE | Terminal y maniobras de autobuses |
| [panel-presentacion-arquitectonica-exteriores-8-miniaturas-v77.png](../imagenes/panel-presentacion/panel-presentacion-arquitectonica-exteriores-8-miniaturas-v77.png) | VIGENTE | Una vista general v77 y ocho miniaturas exteriores de archivos existentes. Presentación conceptual (D-033) |

## Referencias aún necesarias

- Exterior aprobado del gimnasio.
- Vistas propias de cafetería y administración.
- Serie independiente del parque infantil.
- Plano de plantación dimensionado de D1 (v74 y v75 son conceptuales y no fijan cantidades ni separaciones).
- Planta, alzado y perfil ortogonales de E2 con las datileras de v69 (las vistas ortogonales anteriores se retiraron en D-029; v70 y v71 tienen perspectiva residual).
- Detalle del seto de murta de D1 (la imagen anterior se retiró en D-029).
- Vistas de los claustros hacia el sur y detalle legible de los relojes de sol y del pozo de B2 (v68 solo mira al norte).
- Plano de iluminación con todas las posiciones.
- Detalles independientes de atletismo y tenis.

## Lista de aceptación de una imagen nueva

- [ ] El archivo lleva el siguiente sufijo `-vNN` global y no sobrescribe ninguna versión anterior.
- [ ] Existe una fila en el registro con estado y uso autorizado.
- [ ] Si tiene ficha propia, la ficha está enlazada desde `00_INDICE_Y_REGLAS_MAESTRAS.md`.
- [ ] Si modifica el diseño, existe una decisión `D-NNN` en `10_CAMBIOS_Y_DECISIONES.md` y el módulo de la zona está actualizado.
- [ ] Las imágenes que quedan superadas cambian de estado; solo se retiran por decisión registrada en `10`, eliminando a la vez fila, ficha y enlaces.
- [ ] `node herramientas/validar_b1.mjs` termina sin errores.

## Lista de aceptación de un panel

- [ ] Todas las imágenes figuran en este registro.
- [ ] No se emplea ninguna referencia obsoleta.
- [ ] La vista general corresponde a la versión vigente.
- [ ] No hay miniaturas inventadas ni repetidas.
- [ ] Las vistas denominadas planta, alzado y perfil cumplen su proyección.
