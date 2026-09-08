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
const docNames=fs.readdirSync(docDir).filter(n=>n.endsWith('.md'));
const linkPattern=/\[[^\]]*\]\(([^)\s]+)\)|(?:src|href)="([^"]+)"/g;
const isExternal=t=>/^(https?:|mailto:|#)/.test(t);

// Enlaces: existen y están escritos en NFC (la forma que guarda git); un enlace NFD rompe en Linux/GitHub.
const checkLinks=(file,baseDir)=>{
  const name=path.basename(file),text=fs.readFileSync(file,'utf8');
  for(const m of text.matchAll(linkPattern)){
    const target=m[1]??m[2];
    if(isExternal(target)) continue;
    const decoded=decodeURI(target);
    const exists=fs.existsSync(path.resolve(baseDir,decoded));
    const nfc=decoded.normalize('NFC')===decoded;
    must(exists,`${name}: enlace válido ${target}`);
    if(exists) must(nfc,`${name}: enlace en Unicode NFC ${target}`);
  }
};
for(const name of docNames) checkLinks(path.join(docDir,name),docDir);
for(const name of ['README.md','CLAUDE.md','CHANGELOG.md']) checkLinks(path.join(root,name),root);

// Índice: todo documento de documentacion/ está enlazado desde 00.
const indexText=fs.readFileSync(path.join(docDir,'00_INDICE_Y_REGLAS_MAESTRAS.md'),'utf8');
for(const name of docNames){
  if(name==='00_INDICE_Y_REGLAS_MAESTRAS.md') continue;
  must(indexText.includes(`](${name})`),`00_INDICE: enlaza ${name}`);
}

// Registro: toda imagen o plano del repositorio tiene fila en 09 y ningún archivo registrado falta en disco.
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
  if(e.name.startsWith('.')) return [];
  const p=path.join(dir,e.name);
  return e.isDirectory()?walk(p):[p];
});
const assets=[...walk(path.join(root,'imagenes')),...walk(path.join(root,'planos'))]
  .filter(p=>/\.(png|jpe?g|svg|webp)$/i.test(p))
  .map(p=>path.relative(root,p).normalize('NFC'));
const registerText=fs.readFileSync(path.join(docDir,'09_VISTAS_PANELES_Y_REFERENCIAS.md'),'utf8');
const registerRows=registerText.split('\n').filter(l=>/^\| \[/.test(l));
const registered=new Set();
for(const row of registerRows){
  const state=row.split('|')[2]?.trim();
  must(['VIGENTE','AUXILIAR','PENDIENTE','OBSOLETA'].includes(state),`09: estado válido en fila «${row.slice(0,60)}…»`);
  for(const m of row.matchAll(/\]\(\.\.\/([^)]+)\)/g)) registered.add(decodeURI(m[1]).normalize('NFC'));
}
for(const rel of assets) must(registered.has(rel),`09: registra ${rel}`);
for(const rel of registered) must(fs.existsSync(path.join(root,rel)),`09: el archivo registrado existe ${rel}`);

// Versiones: sufijos -vNN sin huecos declarados en README.
const versions=assets.map(a=>a.match(/-v(\d+)(?:[-.]|$)/)?.[1]).filter(Boolean).map(Number);
const maxVersion=Math.max(...versions);
const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
const badge=readme.match(/referencias-v(\d+)-/)?.[1];
must(Number(badge)===maxVersion,`README: la insignia de referencias declara v${badge} y la versión máxima en disco es v${maxVersion}`);
must(fs.readFileSync(path.join(root,'CLAUDE.md'),'utf8').includes(`\`v${maxVersion}\` is the latest`),`CLAUDE.md: declara v${maxVersion} como última versión`);

// Decisiones: IDs consecutivos y sin repetir en 10.
const decisions=[...fs.readFileSync(path.join(docDir,'10_CAMBIOS_Y_DECISIONES.md'),'utf8').matchAll(/^\| D-(\d{3}) \|/gm)].map(m=>Number(m[1]));
must(decisions.length>0&&decisions.every((d,i)=>d===i+1),`10: ${decisions.length} decisiones con IDs consecutivos D-001..D-${String(decisions.length).padStart(3,'0')}`);

// Textos: ninguna secuencia NFD en los documentos.
const rootDocs=['README.md','CLAUDE.md','CHANGELOG.md'].map(n=>path.join(root,n));
const allDocs=[...docNames.map(n=>path.join(docDir,n)),...rootDocs];
for(const file of allDocs){
  const text=fs.readFileSync(file,'utf8');
  must(text.normalize('NFC')===text,`${path.basename(file)}: texto en Unicode NFC`);
}

// Citas D-NNN: toda decisión citada existe.
for(const file of allDocs){
  const cited=new Set([...fs.readFileSync(file,'utf8').matchAll(/D-(\d{3})/g)].map(m=>Number(m[1])));
  for(const d of cited) must(d>=1&&d<=decisions.length,`${path.basename(file)}: cita D-${String(d).padStart(3,'0')} existe`);
}

// Fichas de versión: declaran estado, zona y decisión.
for(const name of docNames.filter(n=>!/^\d/.test(n))){
  const text=fs.readFileSync(path.join(docDir,name),'utf8');
  must(/\*\*Estado[^*]*\*\*/.test(text)&&text.includes('**Zona:**')&&/\*\*Decisi(ó|o)n(es)?:\*\*/.test(text),`${name}: cabecera con Estado, Zona y Decisión`);
}

// README: contadores manuales coherentes con 10 y CHANGELOG.
const readmeDecisions=readme.match(/\*\*(\d+) decisiones consolidadas\*\* \(`D-001` a `D-(\d{3})`\)/);
must(readmeDecisions&&Number(readmeDecisions[1])===decisions.length&&Number(readmeDecisions[2])===decisions.length,`README: declara ${decisions.length} decisiones (D-001 a D-${String(decisions.length).padStart(3,'0')})`);
const changelog=fs.readFileSync(path.join(root,'CHANGELOG.md'),'utf8');
const released=changelog.match(/^## \[(\d+\.\d+\.\d+)\] - \d{4}-\d{2}-\d{2}/m)?.[1];
const readmeVersion=readme.match(/versi%C3%B3n-(\d+\.\d+\.\d+)-/)?.[1];
must(released&&released===readmeVersion,`README: insignia de versión ${readmeVersion} coincide con la última publicada en CHANGELOG (${released})`);
must(released&&changelog.includes(`\n[${released}]: `),`CHANGELOG: enlace de comparación para [${released}]`);
must(readme.includes(`**Versión ${released}**`),`README: «Estado del proyecto» cita la versión ${released}`);

// Última comprobación: el contador publicado en README coincide con el total real (incluida esta línea).
const readmeCount=Number(readme.match(/VALIDACIONES CORRECTAS: (\d+)/)?.[1]);
must(readmeCount===ok.length+1,`README: contador del validador ${readmeCount} (esperado ${ok.length+1})`);

console.log(`VALIDACIONES CORRECTAS: ${ok.length}`);
if(errors.length){
  console.error(`ERRORES: ${errors.length}`);
  for(const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log('RESULTADO B1: APROBADO A NIVEL DE ANTEPROYECTO CONCEPTUAL');
