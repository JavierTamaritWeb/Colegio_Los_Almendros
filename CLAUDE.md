# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

An architectural concept project for "Colegio Los Almendros": a private school built by rehabilitating a 17th-century Valencian monastery. It is **not a software product**. The repository holds Spanish-language design documentation, AI-generated reference images, SVG/PNG floor plans, and a few Node scripts that assemble or validate those assets. All documentation, decisions and file names are in Spanish; keep new content in Spanish.

## Commands

There is no `package.json`. Scripts are plain ESM (`.mjs`) run with Node 22 and depend on ImageMagick 7 (`magick` on PATH). **Always run them from the repository root**, since every script resolves paths from `process.cwd()`.

```bash
node herramientas/validar_b1.mjs          # validates the B1 interior programme; exits 1 on any error
node herramientas/generar_planos_b1.mjs   # regenerates planos/b1-planta-*-v49.svg from the room tables in the script
node herramientas/rotular_interiores.mjs  # overlays titles/labels on interior renders -> catalogo-*.png
node herramientas/actualizar_claustros_30m.mjs  # crops the cloister pair v59 into the patrimonio board + labelled pair
```

`validar_b1.mjs` is the closest thing to a test suite. It checks that `01A_PROGRAMA_INTERIOR_B1.md` lists exactly 96 unique room codes (36 PB / 28 P1 / 32 P2), that every code appears in its floor SVG together with cores `NV-01..06`, `AC-01..02`, cloisters `B2`/`B3` and two `30 × 30 m` labels, that the listed PNG artifacts exist at >= 1500x900 with real content, and that every relative Markdown link in `documentacion/` resolves. Run it after touching the programme doc, the plans, or any doc links.

`generar_planos_b1.mjs` only writes SVGs; the matching PNGs are rasterised separately with ImageMagick. `actualizar_claustros_20m.mjs` is the superseded 20 m variant kept for history (see D-016/D-017); do not run it.

## Documentation hierarchy (the actual "architecture")

`documentacion/00_INDICE_Y_REGLAS_MAESTRAS.md` governs everything. When sources conflict, precedence is:

1. `00_INDICE_Y_REGLAS_MAESTRAS.md` plus the active decisions in `10_CAMBIOS_Y_DECISIONES.md`
2. The specialised module for the affected section (`01`..`08`, `01A`, `01B`)
3. The image register in `09_VISTAS_PANELES_Y_REFERENCIAS.md`
4. Images marked `VIGENTE`
5. `PROMPT_ARQUITECTONICO_COLEGIO.md` (root) — historical English prompt only, never the sole source for new work

Key modules:
- `11_MAPA_MAESTRO_DE_ZONAS.md` defines the 22 official zone codes (A1..G, e.g. `B1` main building, `B2`/`B3` south/north cloisters, `C3` gymnasium, `D2` pools). Use these codes in prompts, file names and decisions.
- `01A_PROGRAMA_INTERIOR_B1.md` is the room schedule: codes `B1-PB-001..036`, `B1-P1-101..128`, `B1-P2-201..232`, parsed by the validator via the `| B1-XX-NNN |` table rows.
- `01B_PLANOS_E_IMAGENES_INTERIORES_B1.md` maps room codes to plans and interior catalogue images.
- `09_VISTAS_PANELES_Y_REFERENCIAS.md` is the image register: every image has a state `VIGENTE`, `AUXILIAR`, `PENDIENTE` or `OBSOLETA`. Only `VIGENTE`/`AUXILIAR` images may be used as references.
- `10_CAMBIOS_Y_DECISIONES.md` is the decision log (`D-001`, `D-002`, ...). A new design change gets a new consecutive ID with date, affected section, resulting reference, and docs to update.

## Conventions that must be preserved

- **Versioning by suffix**: images and plans carry a global, monotonically increasing `-vNN` suffix (`v62` is the latest). A new version never overwrites its predecessor; the old file is kept and its register row is marked `OBSOLETA`. Scripts are hard-coded to specific versions, so a new version usually means a new or updated script.
- **Room schedule and plans are generated from code**: room names/categories live in the `rooms` table inside `generar_planos_b1.mjs`; the doc `01A` must stay in sync with it or the validator fails.
- **Mandatory workflow for any design modification** (from `00_INDICE`): identify the zone code, read the index and the module, use only `VIGENTE`/`AUXILIAR` images, list what changes and what stays, apply without touching other sections, run the module's acceptance checklist, log the decision in `10`, update image states in `09`.
- **Non-negotiable design rules** (do not generate content that contradicts them): north is up in every plan; fixed west-to-east masterplan sequence; main building has exactly three storeys and two consecutive cloisters `B2`/`B3` of 30 × 30 m; exactly one gymnasium, north of the tennis courts; futsal and volleyball are in closed, fully roofed pavilions; all main-building windows are glazed semicircular arches; south façade is 19 bays (`8 + 3 + 8`) with a single entrance arch; three flush cross-gables on the roof; interior access parcels are almond trees in bloom, exterior landscape is orange groves; continuous stone wall and wrought-iron fence around the whole perimeter including the bus terminal.
- **View naming**: a "planta" is a strict 90° orthogonal top-down view; "alzado" and "perfil" are orthogonal elevations. An image showing façades cannot be called a planta.
- Image assembly is done via `execFileSync('magick', [...])` with temp files in `os.tmpdir()`; follow the same pattern (crop/resize/extent/composite, SVG text overlays rasterised with `-background none`) when adding new labelling scripts.
