import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const dir = path.join(root, 'imagenes', 'edificio-principal', 'interiores');
const jobs = [
  {
    input:'interiores-planta-baja-v50.png', output:'catalogo-interiores-planta-baja-v50.png',
    title:'B1 · PLANTA BAJA · INFANTIL, PRIMARIA INICIAL Y ESPACIOS PÚBLICOS',
    labels:[
      'B1-PB-001/002 · VESTÍBULO Y RECEPCIÓN','B1-PB-009–014 · AULA DE INFANTIL','B1-PB-018–021 · AULA DE PRIMARIA 1.º–2.º',
      'B1-PB-023/024 · SALÓN DE ACTOS','B1-PB-026–030 · COMEDOR Y COCINA','B1-PB-008 · ENFERMERÍA'
    ]
  },
  {
    input:'interiores-planta-primera-v51.png', output:'catalogo-interiores-planta-primera-v51.png',
    title:'B1 · PLANTA PRIMERA · PRIMARIA SUPERIOR Y CULTURA',
    labels:[
      'B1-P1-101–108 · AULA DE PRIMARIA 3.º–6.º','B1-P1-109 · BIBLIOTECA','B1-P1-110 · LECTURA INFANTIL',
      'B1-P1-112 · ARTE','B1-P1-113 · MÚSICA','B1-P1-114 · TECNOLOGÍA Y CREACIÓN'
    ]
  },
  {
    input:'interiores-planta-segunda-v52.png', output:'catalogo-interiores-planta-segunda-v52.png',
    title:'B1 · PLANTA SEGUNDA · SECUNDARIA, BACHILLERATO Y CIENCIAS',
    labels:[
      'B1-P2-201–208 · SECUNDARIA','B1-P2-209–212 · BACHILLERATO','B1-P2-213/214 · BIOLOGÍA Y GEOLOGÍA',
      'B1-P2-215/216 · FÍSICA Y QUÍMICA','B1-P2-217/218 · STEM','B1-P2-219 · INFORMÁTICA'
    ]
  },
  {
    input:'interiores-espacios-comunes-v53.png', output:'catalogo-interiores-espacios-comunes-v53.png',
    title:'B1 · ESPACIOS COMUNES, ACCESIBILIDAD Y BIENESTAR',
    labels:[
      'B1-P1-120 / P2-226 · PROFESORES','B1-P1-115–119 · APOYO Y GRUPOS','B1 · GALERÍA HISTÓRICA',
      'B1-NV-01–06 / AC-01–02 · NÚCLEOS','B1 · ASEOS DE ALUMNOS','B1-PB-034 / P1-126 / P2-230 · ASEOS ACCESIBLES'
    ]
  },
  {
    input:'interiores-patrimonio-bienestar-v59.png', output:'catalogo-interiores-patrimonio-bienestar-v59.png',
    title:'B1 · CLAUSTROS DE 30 × 30 m, INFANCIA, PROYECTOS Y FAMILIAS',
    labels:[
      'B2 · CLAUSTRO SUR · 30 × 30 m','B3 · CLAUSTRO NORTE · 30 × 30 m','B1-PB-015 · PSICOMOTRICIDAD',
      'B1-PB-016 · CALMA SENSORIAL','B1-P2-220 · TALLER DE PROYECTOS','B1-PB-006/007 · FAMILIAS Y REUNIONES'
    ]
  },
  {
    input:'interiores-apoyo-servicios-v55.png', output:'catalogo-interiores-apoyo-servicios-v55.png',
    title:'B1 · ADMINISTRACIÓN, ESTUDIO Y SERVICIOS',
    labels:[
      'B1-PB-003–005 · ADMINISTRACIÓN DOCENTE','B1-P1-111 · MEDIATECA','B1-P2-221 · SALA DE ESTUDIO',
      'B1-P2-222–227 · DEPARTAMENTOS','B1-PB-027–030 · COCINA Y OFFICE','B1-P2-214/216/218 · PREPARACIÓN'
    ]
  }
];

const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');

for (const job of jobs) {
  const input = path.join(dir, job.input);
  const output = path.join(dir, job.output);
  const [w,h] = execFileSync('magick',['identify','-format','%w %h',input],{encoding:'utf8'}).trim().split(/\s+/).map(Number);
  const top=62, cellW=w/3, cellH=h/2;
  const extended=path.join(os.tmpdir(),`almendros-${process.pid}-${job.output}-extended.png`);
  const overlay=path.join(os.tmpdir(),`almendros-${process.pid}-${job.output}-overlay.svg`);
  const overlayPng=path.join(os.tmpdir(),`almendros-${process.pid}-${job.output}-overlay.png`);
  execFileSync('magick',[input,'-background','#F7F3E9','-gravity','south','-extent',`${w}x${h+top}`,extended]);
  const bars=job.labels.map((label,i)=>{
    const col=i%3,row=Math.floor(i/3),x=col*cellW,y=top+row*cellH;
    return `<rect x="${x}" y="${y}" width="${cellW}" height="38" fill="#173344" fill-opacity="0.90"/><text x="${x+14}" y="${y+25}" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="#FFFFFF">${esc(label)}</text>`;
  }).join('\n');
  fs.writeFileSync(overlay,`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h+top}" viewBox="0 0 ${w} ${h+top}"><text x="18" y="40" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#173344">${esc(job.title)}</text>${bars}</svg>`);
  execFileSync('magick',['-background','none',overlay,overlayPng]);
  execFileSync('magick',[extended,overlayPng,'-composite',output]);
  fs.rmSync(extended,{force:true});
  fs.rmSync(overlay,{force:true});
  fs.rmSync(overlayPng,{force:true});
  console.log(output);
}
