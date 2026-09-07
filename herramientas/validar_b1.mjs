import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root=process.cwd();
const errors=[];
const ok=[];
const must=(condition,message)=>condition?ok.push(message):errors.push(message);

const programPath=path.join(root,'documentacion','01A_PROGRAMA_INTERIOR_B1.md');
const program=fs.readFileSync(programPath,'utf8');
const matches=[...program.matchAll(/^\| (B1-(PB|P1|P2)-\d{3}) \|/gm)].map(m=>({code:m[1],floor:m[2]}));
const expected={PB:36,P1:28,P2:32};
for(const floor of Object.keys(expected)){
  const codes=matches.filter(x=>x.floor===floor).map(x=>x.code);
  must(codes.length===expected[floor],`${floor}: ${codes.length}/${expected[floor]} estancias`);
  must(new Set(codes).size===codes.length,`${floor}: códigos únicos`);
  const svgPath=path.join(root,'planos',floor==='PB'?'b1-planta-baja-v49.svg':floor==='P1'?'b1-planta-primera-v49.svg':'b1-planta-segunda-v49.svg');
  const svg=fs.readFileSync(svgPath,'utf8');
  for(const code of codes) must(svg.includes(code),`${code} aparece en su plano`);
  for(let i=1;i<=6;i++) must(svg.includes(`NV-0${i}`),`${floor}: NV-0${i} presente`);
  for(let i=1;i<=2;i++) must(svg.includes(`AC-0${i}`),`${floor}: AC-0${i} presente`);
  must(svg.includes('B2')&&svg.includes('B3'),`${floor}: B2 y B3 presentes`);
  must((svg.match(/30 × 30 m/g)||[]).length===2,`${floor}: ambos claustros identificados como 30 × 30 m`);
}
must(matches.length===96,`Programa total: ${matches.length}/96 estancias`);
must(new Set(matches.map(x=>x.code)).size===96,'Los 96 códigos son únicos');

const artifacts=[
  'planos/b1-planta-baja-v49.png','planos/b1-planta-primera-v49.png','planos/b1-planta-segunda-v49.png','planos/b1-programa-tres-plantas-v49.png',
  'imagenes/edificio-principal/interiores/catalogo-interiores-planta-baja-v50.png',
  'imagenes/edificio-principal/interiores/catalogo-interiores-planta-primera-v51.png',
  'imagenes/edificio-principal/interiores/catalogo-interiores-planta-segunda-v52.png',
  'imagenes/edificio-principal/interiores/catalogo-interiores-espacios-comunes-v53.png',
  'imagenes/edificio-principal/interiores/claustros-b2-b3-30x30-rotulado-v59.png',
  'imagenes/edificio-principal/interiores/catalogo-interiores-patrimonio-bienestar-v59.png',
  'imagenes/edificio-principal/interiores/catalogo-interiores-apoyo-servicios-v55.png',
  'imagenes/edificio-principal/panel-programa-interior-b1-v60.png'
];
for(const rel of artifacts){
  const file=path.join(root,rel);
  must(fs.existsSync(file),`${rel}: existe`);
  if(fs.existsSync(file)){
    const data=execFileSync('magick',['identify','-format','%w %h %k',file],{encoding:'utf8'}).trim().split(/\s+/).map(Number);
    must(data[0]>=1500&&data[1]>=900,`${rel}: resolución ${data[0]}x${data[1]}`);
    must(data[2]>64,`${rel}: contenido visual no vacío (${data[2]} colores)`);
  }
}

const docDir=path.join(root,'documentacion');
for(const name of fs.readdirSync(docDir).filter(n=>n.endsWith('.md'))){
  const file=path.join(docDir,name),text=fs.readFileSync(file,'utf8');
  for(const m of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)){
    const target=m[1];
    if(target.startsWith('http')||target.startsWith('#')) continue;
    must(fs.existsSync(path.resolve(docDir,decodeURI(target))),`${name}: enlace válido ${target}`);
  }
}

console.log(`VALIDACIONES CORRECTAS: ${ok.length}`);
if(errors.length){
  console.error(`ERRORES: ${errors.length}`);
  for(const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log('RESULTADO B1: APROBADO A NIVEL DE ANTEPROYECTO CONCEPTUAL');
