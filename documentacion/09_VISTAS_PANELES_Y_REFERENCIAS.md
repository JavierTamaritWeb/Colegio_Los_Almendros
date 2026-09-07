# Vistas, paneles y registro de referencias

**Estado:** VIGENTE · **Versión:** 1.2

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
- El panel [v46](../imagenes/panel-presentacion/panel-presentacion-arquitectonica-exteriores-8-miniaturas-v46.png) es la referencia de maquetación actual, pero debe actualizar su vista general para incorporar los almendros en flor de v47.

## Estados permitidos

- `VIGENTE`: referencia actual obligatoria.
- `AUXILIAR`: puede aclarar una parte, pero no sustituye a una imagen vigente.
- `PENDIENTE`: contiene una solución útil pero necesita actualización.
- `OBSOLETA`: no debe usarse para generar ni verificar.

## Registro de imágenes

| Archivo | Estado | Uso autorizado |
|---|---|---|
| [mapa-maestro-zonas-v48.png](../imagenes/panel-presentacion/mapa-maestro-zonas-v48.png) | VIGENTE | Nomenclatura y localización oficial de todas las zonas |
| [vista-general-almendros-en-flor-v47.png](../imagenes/panel-presentacion/vista-general-almendros-en-flor-v47.png) | VIGENTE | Vista general y parcelas de acceso |
| [vista-completa-complejo-tejado-fiel-v43.png](../imagenes/panel-presentacion/vista-completa-complejo-tejado-fiel-v43.png) | AUXILIAR | Masterplan previo; no usar sus parcelas de naranjos interiores |
| [croquis-tejado-edificio-principal.jpg](../imagenes/edificio-principal/croquis-tejado-edificio-principal.jpg) | VIGENTE | Geometría de cubierta |
| [detalle-verificacion-tejado-v43.png](../imagenes/edificio-principal/detalle-verificacion-tejado-v43.png) | VIGENTE | Comprobación cenital de cubierta |
| [fachada-entrada-plataneros-v36.png](../imagenes/entrada/fachada-entrada-plataneros-v36.png) | VIGENTE | Fachada, acceso, arcos y plátanos; la cubierta se verifica exclusivamente con v43 |
| [b1-planta-baja-v49.png](../planos/b1-planta-baja-v49.png) | VIGENTE | Distribución funcional y códigos de planta baja |
| [b1-planta-primera-v49.png](../planos/b1-planta-primera-v49.png) | VIGENTE | Distribución funcional y códigos de planta primera |
| [b1-planta-segunda-v49.png](../planos/b1-planta-segunda-v49.png) | VIGENTE | Distribución funcional y códigos de planta segunda |
| [b1-programa-tres-plantas-v49.png](../planos/b1-programa-tres-plantas-v49.png) | VIGENTE | Lámina coordinada de las tres plantas |
| [catalogo-interiores-planta-baja-v50.png](../imagenes/edificio-principal/interiores/catalogo-interiores-planta-baja-v50.png) | VIGENTE | Ambiente y equipamiento de espacios tipo de PB |
| [catalogo-interiores-planta-primera-v51.png](../imagenes/edificio-principal/interiores/catalogo-interiores-planta-primera-v51.png) | VIGENTE | Ambiente y equipamiento de espacios tipo de P1 |
| [catalogo-interiores-planta-segunda-v52.png](../imagenes/edificio-principal/interiores/catalogo-interiores-planta-segunda-v52.png) | VIGENTE | Ambiente y equipamiento de espacios tipo de P2 |
| [catalogo-interiores-espacios-comunes-v53.png](../imagenes/edificio-principal/interiores/catalogo-interiores-espacios-comunes-v53.png) | VIGENTE | Galerías, apoyo, profesores, núcleos y aseos |
| [catalogo-interiores-patrimonio-bienestar-v54.png](../imagenes/edificio-principal/interiores/catalogo-interiores-patrimonio-bienestar-v54.png) | OBSOLETA | Los claustros no expresaban su dimensión cuadrada de 20 × 20 m |
| [claustros-b2-b3-20x20-rotulado-v57.png](../imagenes/edificio-principal/interiores/claustros-b2-b3-20x20-rotulado-v57.png) | OBSOLETA | Sustituida al fijarse la medida correcta de 30 × 30 m |
| [catalogo-interiores-patrimonio-bienestar-v57.png](../imagenes/edificio-principal/interiores/catalogo-interiores-patrimonio-bienestar-v57.png) | OBSOLETA | Sustituido por v59 |
| [claustros-b2-b3-30x30-rotulado-v59.png](../imagenes/edificio-principal/interiores/claustros-b2-b3-30x30-rotulado-v59.png) | VIGENTE | Rotulación y dimensión de B2 y B3, cuadrados de 30 × 30 m y tres plantas; la vegetación y el pavimento se toman de v62 |
| [claustros-b2-b3-vegetacion-v61.png](../imagenes/edificio-principal/interiores/claustros-b2-b3-vegetacion-v61.png) | AUXILIAR | Vegetación mediterránea de los claustros; superada por v62 en el pavimento |
| [claustros-b2-b3-vegetacion-adoquines-v62.png](../imagenes/edificio-principal/interiores/claustros-b2-b3-vegetacion-adoquines-v62.png) | VIGENTE | Vegetación, parterres y adoquines de piedra natural de B2 y B3 |
| [catalogo-interiores-patrimonio-bienestar-v59.png](../imagenes/edificio-principal/interiores/catalogo-interiores-patrimonio-bienestar-v59.png) | PENDIENTE | Claustros de 30 × 30 m, psicomotricidad, calma, proyectos y familias; pendiente de incorporar la vegetación y adoquines de v62 |
| [catalogo-interiores-apoyo-servicios-v55.png](../imagenes/edificio-principal/interiores/catalogo-interiores-apoyo-servicios-v55.png) | VIGENTE | Administración, estudio, mediateca y servicios |
| [panel-programa-interior-b1-v56.png](../imagenes/edificio-principal/panel-programa-interior-b1-v56.png) | OBSOLETA | Sustituido por v58 al corregirse los claustros |
| [panel-programa-interior-b1-v58.png](../imagenes/edificio-principal/panel-programa-interior-b1-v58.png) | OBSOLETA | Sustituido por v60 al fijarse los claustros en 30 × 30 m |
| [panel-programa-interior-b1-v60.png](../imagenes/edificio-principal/panel-programa-interior-b1-v60.png) | PENDIENTE | Panel conjunto de 36 escenas interiores conceptuales; pendiente de incorporar los claustros de v62 |
| [cancela.png](../imagenes/entrada/cancela.png) | VIGENTE | Cancela y escudo calado |
| [detalle-muro-verja-perimetral-v45.png](../imagenes/entrada/detalle-muro-verja-perimetral-v45.png) | VIGENTE | Cerramiento perimetral |
| [gimnasio.png](../imagenes/gimnasio/gimnasio.png) | VIGENTE | Interior y equipamiento del gimnasio |
| [detalle-zona-deportiva-exterior-v45.png](../imagenes/gimnasio/detalle-zona-deportiva-exterior-v45.png) | AUXILIAR | Recorte del deporte exterior; no es una vista del gimnasio |
| [piscinas-vista-aerea-v23.png](../imagenes/piscina/piscinas-vista-aerea-v23.png) | VIGENTE | Implantación exterior del complejo acuático |
| [piscinas-con-cubierta.png](../imagenes/piscina/piscinas-con-cubierta.png) | VIGENTE | Estado cerrado de la cubierta |
| [piscinas-sin-cubierta.png](../imagenes/piscina/piscinas-sin-cubierta.png) | VIGENTE | Estado abierto de la cubierta |
| [parque-bancos-planta-v29.png](../imagenes/parque-principal/parque-bancos-planta-v29.png) | VIGENTE | Planta y posición de bancos |
| [parque-bancos-alzado-sur-v28.png](../imagenes/parque-principal/parque-bancos-alzado-sur-v28.png) | VIGENTE | Alzado sur |
| [parque-bancos-perfil-este-v31.png](../imagenes/parque-principal/parque-bancos-perfil-este-v31.png) | VIGENTE | Perfil este |
| [detalle-seto-murta-completo-v21.png](../imagenes/jardín/jardin-exterior/detalle-seto-murta-completo-v21.png) | VIGENTE | Cierre continuo de murta |
| [parking-bus.png](../imagenes/parking/parking-bus.png) | VIGENTE | Terminal y maniobras de autobuses |
| [panel-presentacion-arquitectonica-exteriores-8-miniaturas-v46.png](../imagenes/panel-presentacion/panel-presentacion-arquitectonica-exteriores-8-miniaturas-v46.png) | PENDIENTE | Maquetación vigente; sustituir hero v43 por v47 |
| [panel-presentacion-arquitectonica-exteriores-8-miniaturas-v45.png](../imagenes/panel-presentacion/panel-presentacion-arquitectonica-exteriores-8-miniaturas-v45.png) | OBSOLETA | Sustituida por v46 |
| [panel-presentacion-arquitectonica-v44.png](../imagenes/panel-presentacion/panel-presentacion-arquitectonica-v44.png) | OBSOLETA | Panel anterior de cuatro miniaturas |
| [tablero-miniaturas-espacios-v22.png](../imagenes/panel-presentacion/tablero-miniaturas-espacios-v22.png) | OBSOLETA | No usar como fuente de arquitectura |

## Referencias aún necesarias

- Exterior aprobado del gimnasio.
- Vistas propias de cafetería y administración.
- Serie independiente del parque infantil.
- Vista del jardín mediterráneo que identifique especies y pérgolas.
- Plano de iluminación con todas las posiciones.
- Detalles independientes de atletismo y tenis.

## Lista de aceptación de un panel

- [ ] Todas las imágenes figuran en este registro.
- [ ] No se emplea ninguna referencia obsoleta.
- [ ] La vista general corresponde a la versión vigente.
- [ ] No hay miniaturas inventadas ni repetidas.
- [ ] Las vistas denominadas planta, alzado y perfil cumplen su proyección.
