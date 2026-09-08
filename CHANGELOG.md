# Historial de versiones

Todos los cambios relevantes del repositorio se documentan en este archivo. El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado, [SemVer](https://semver.org/lang/es/).

Las decisiones de diseño se registran en [`documentacion/10_CAMBIOS_Y_DECISIONES.md`](documentacion/10_CAMBIOS_Y_DECISIONES.md); este historial recoge las versiones publicadas del conjunto.

## [Sin publicar]

### Corregido

- Todos los `.md` pasan `markdownlint` con la configuración nueva de `.markdownlint.json`: el `README.md` sustituye el HTML por Markdown puro, los bloques de código declaran lenguaje y los separadores de tabla usan el estilo `| --- |`.

## [2.0.0] - 2026-09-08

Versión mayor: se retiran del proyecto referencias que en 1.0.0 eran vigentes (D-029) y cambia la regla de plantación de los claustros (D-030), por lo que las imágenes generadas contra la documentación 1.0.0 dejan de ser compatibles.

### Añadido

- Fichas de versión de los claustros v68, del parque E2 v69–v71 y del huerto D1 v74–v75, enlazadas desde el índice maestro y con cabecera de estado, zona y decisión.
- Decisiones D-020 a D-031: relojes de sol, pozo en B2, cruce adoquinado, criterio fotográfico, datileras en E2, huerto mediterráneo en D1, traslado de carpeta, auditoría documental, retirada de archivos, ratificación de la plantación de los claustros y publicación de esta versión.
- Registro de imágenes completo hasta v75, incluidas las fuentes sin rotular y los SVG de los planos.
- `validar_b1.mjs` comprueba además: enlaces de `README.md`, `CLAUDE.md` y `CHANGELOG.md`; normalización NFC de rutas y textos; completitud del registro de imágenes y del índice; IDs de decisión consecutivos y citas `D-NNN` existentes; cabeceras de las fichas; versión máxima, número de decisiones, contador de comprobaciones y versión publicada coherentes entre `README.md`, `CLAUDE.md`, `10` y este historial.
- Sección «Lecciones de la auditoría» en `10_CAMBIOS_Y_DECISIONES.md` y «Reglas de conservación del repositorio» en el índice maestro.

### Cambiado

- La plantación de los claustros B2 y B3 pasa a ser de porte tropical (monsteras, aves del paraíso, ficus) por D-030; la vegetación mediterránea de D-018 queda superada en este punto y la prohibición de especies tropicales se limita a D1.
- v68 pasa a `VIGENTE` como referencia de los claustros.

### Eliminado

- Por decisión del usuario (D-029): imágenes de claustros v61–v67, huerto D1 v72 y v73, seto de murta v21 y parque-bancos v28, v29 y v31, junto con sus ocho fichas y todas sus referencias. Las reglas de diseño que ilustraban siguen vigentes por escrito.

### Corregido

- Rutas con `jardín` unificadas en Unicode NFC (antes mezclaban NFC y NFD y rompían fuera de macOS).
- Módulo `01` actualizado con pozo, fuente, cruce, relojes de sol y plantación vigente; módulo `05` con el estado real de las vistas de E2 y D1; fichas que citaban como conservadas versiones ya retiradas.

## [1.0.0] - 2026-09-07

Primera publicación del anteproyecto conceptual.

### Añadido

- Sistema documental modular con índice maestro, once módulos por zona, mapa maestro de 22 zonas, registro de imágenes con estados y registro de decisiones (D-001 a D-019).
- Programa interior del edificio principal B1: 96 estancias en tres plantas con planos SVG/PNG v49.
- Referencias visuales hasta v62, incluidos el panel exterior de ocho miniaturas, el panel interior de 36 escenas y los claustros con vegetación mediterránea y adoquines.
- Herramientas Node: generación de planos, rotulado de catálogos, composición de claustros y validador del programa B1.
- README de presentación, guía `CLAUDE.md`, licencia CC BY-NC-SA 4.0 y este historial.

### Cambiado

- El registro de imágenes incorpora v61 (auxiliar) y v62 (vigente); el catálogo v59 y el panel v60 pasan a pendientes hasta integrar v62.

[2.0.0]: https://github.com/JavierTamaritWeb/Colegio_Los_Almendros/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/JavierTamaritWeb/Colegio_Los_Almendros/releases/tag/v1.0.0
