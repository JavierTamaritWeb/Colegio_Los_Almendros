# Colegio Los Almendros — índice y reglas maestras

**Estado:** VIGENTE  
**Versión:** 1.2  
**Fecha:** 2026-09-08

## Finalidad

Este archivo gobierna toda la documentación modular del proyecto. El archivo raíz [PROMPT_ARQUITECTONICO_COLEGIO.md](../PROMPT_ARQUITECTONICO_COLEGIO.md) se conserva como registro histórico, pero no debe utilizarse como única fuente para nuevas imágenes.

## Jerarquía documental

En caso de duda o contradicción, se aplica este orden:

1. Este documento y las decisiones vigentes de `10_CAMBIOS_Y_DECISIONES.md`.
2. El documento especializado de la sección afectada.
3. El registro de imágenes de `09_VISTAS_PANELES_Y_REFERENCIAS.md`.
4. Las imágenes marcadas como `VIGENTE`.
5. El prompt histórico, únicamente para recuperar contexto no contradictorio.

Una imagen `AUXILIAR`, `PENDIENTE` u `OBSOLETA` nunca puede sustituir a una referencia vigente.

## Documentos del sistema

- [01_EDIFICIO_PRINCIPAL.md](01_EDIFICIO_PRINCIPAL.md)
- [01A_PROGRAMA_INTERIOR_B1.md](01A_PROGRAMA_INTERIOR_B1.md)
- [01B_PLANOS_E_IMAGENES_INTERIORES_B1.md](01B_PLANOS_E_IMAGENES_INTERIORES_B1.md)
- [02_ENTRADA_CERRAMIENTO_Y_PAISAJE.md](02_ENTRADA_CERRAMIENTO_Y_PAISAJE.md)
- [03_PISCINAS_Y_PABELLONES.md](03_PISCINAS_Y_PABELLONES.md)
- [04_GIMNASIO_Y_DEPORTE_EXTERIOR.md](04_GIMNASIO_Y_DEPORTE_EXTERIOR.md)
- [05_PARQUE_JUEGOS_Y_JARDINES.md](05_PARQUE_JUEGOS_Y_JARDINES.md)
- [06_CAFETERIA_ADMINISTRACION_Y_SERVICIOS.md](06_CAFETERIA_ADMINISTRACION_Y_SERVICIOS.md)
- [07_PARKING_Y_AUTOBUSES.md](07_PARKING_Y_AUTOBUSES.md)
- [08_ILUMINACION.md](08_ILUMINACION.md)
- [09_VISTAS_PANELES_Y_REFERENCIAS.md](09_VISTAS_PANELES_Y_REFERENCIAS.md)
- [10_CAMBIOS_Y_DECISIONES.md](10_CAMBIOS_Y_DECISIONES.md)
- [11_MAPA_MAESTRO_DE_ZONAS.md](11_MAPA_MAESTRO_DE_ZONAS.md)

## Fichas de versión

Cada ficha documenta una edición concreta de imagen (prompt, modo, límites de uso). Una ficha no sustituye al módulo de su zona: si describe un cambio de diseño, ese cambio debe estar en `10_CAMBIOS_Y_DECISIONES.md` y en el módulo. Toda ficha nueva se enlaza aquí; `validar_b1.mjs` comprueba que ningún `.md` de esta carpeta queda fuera del índice.

Claustros B2 y B3 (las fichas v61–v67 fueron retiradas por D-029):

- [CLAUSTROS_V68_PLANTACION.md](CLAUSTROS_V68_PLANTACION.md) — plantación tropical ratificada (D-024, D-030)

E2 — Parque de estancia y descanso:

- [E2_V69_JARDIN_DATILERAS.md](E2_V69_JARDIN_DATILERAS.md) — datileras, césped y palmitos (D-025)
- [E2_V70_VISTA_FRONTAL.md](E2_V70_VISTA_FRONTAL.md) — vista conceptual hacia el norte
- [E2_V71_PERFIL.md](E2_V71_PERFIL.md) — vista lateral conceptual desde el este

D1 — Huerto mediterráneo posterior (las fichas v72 y v73 fueron retiradas por D-029):

- [D1_V74_PARRAS.md](D1_V74_PARRAS.md) — implantación vigente con pérgolas ampliadas (D-026)
- [D1_V75_CUATRO_VISTAS.md](D1_V75_CUATRO_VISTAS.md) — cuatro vistas de ambiente

## Masterplan fijo

Norte está arriba y sur abajo en todas las plantas. La secuencia oeste-este es invariable:

1. Atletismo y fútbol; detrás, dos pistas de tenis; al norte de estas, el único gimnasio.
2. Edificio histórico de tres plantas y dos claustros consecutivos en el centro.
3. Al este del edificio: juegos infantiles, parque de estancia y descanso y pabellón administrativo.
4. En el nordeste: piscinas y dos pabellones deportivos cubiertos; debajo, cafetería.
5. Al este: aparcamiento de coches.
6. En la franja ampliada del extremo oriental: terminal independiente de autobuses.

## Reglas globales innegociables

- El recinto puede ampliarse; nunca se comprimen instalaciones para encajarlas.
- El edificio principal tiene exactamente tres plantas y dos claustros alineados norte-sur.
- No se gira, refleja ni reordena el masterplan entre imágenes.
- El exterior del recinto continúa siendo un naranjal valenciano productivo.
- Las dos parcelas interiores que flanquean la avenida principal son almendros en flor.
- El muro de piedra y la verja de forja son continuos en todo el perímetro, incluida la terminal de autobuses.
- Solo existe un gimnasio y está al noroeste, al norte de las pistas de tenis.
- Las pistas de fútbol sala y voleibol están dentro de pabellones cerrados y completamente cubiertos.
- Una vista denominada planta es ortogonal, cenital a 90°, sin fachadas ni perspectiva.
- Ninguna imagen nueva puede introducir edificios, caminos, pistas, árboles o equipamientos no definidos.

## Reglas de conservación del repositorio

- Ningún archivo de `imagenes/` o `planos/` se sobrescribe: una versión superada cambia de estado en `09`, pero se conserva. Solo se retira un archivo por decisión expresa del usuario registrada en `10`, eliminando en el mismo cambio su fila en `09`, su ficha y todos los enlaces que lo citan.
- Toda imagen o plano tiene una fila en el registro de `09`, incluidas las fuentes sin rotular.
- Las carpetas se mueven con `git mv`, nunca borrando y copiando a mano.
- Las rutas de los enlaces se escriben en Unicode NFC (la forma que guarda git); no se mezclan formas.
- `node herramientas/validar_b1.mjs` debe terminar sin errores antes de dar por cerrado cualquier cambio.

## Flujo obligatorio para una modificación

1. Identificar la sección afectada.
   Utilizar el código oficial definido en `11_MAPA_MAESTRO_DE_ZONAS.md`.
2. Leer este archivo y el módulo correspondiente.
3. Consultar únicamente imágenes `VIGENTE` o `AUXILIAR` autorizadas.
4. Enumerar qué cambia y qué debe permanecer intacto.
5. Generar o editar sin alterar las otras secciones.
6. Comprobar la lista de aceptación del módulo.
7. Registrar la decisión en `10_CAMBIOS_Y_DECISIONES.md` si modifica el diseño.
8. Actualizar el estado de las imágenes afectadas en `09_VISTAS_PANELES_Y_REFERENCIAS.md` y registrar cada imagen nueva.
9. Si se crea una ficha de versión, enlazarla en este índice.
10. Ejecutar `node herramientas/validar_b1.mjs`.

## Comprobación global

- [ ] Orientación y secuencia del masterplan correctas.
- [ ] Edificio central con tres plantas y dos claustros.
- [ ] Cubiertas, arcos y materiales coherentes.
- [ ] No hay elementos duplicados ni inventados.
- [ ] El recinto completo y la terminal de autobuses caben en la vista general.
- [ ] Las referencias empleadas están declaradas como vigentes o auxiliares.
- [ ] Todas las imágenes nuevas están registradas y las fichas nuevas enlazadas en este índice.
- [ ] El validador termina sin errores.
