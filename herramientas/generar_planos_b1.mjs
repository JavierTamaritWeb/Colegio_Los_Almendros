import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'planos');
fs.mkdirSync(OUT, { recursive: true });

const palette = {
  infantil: '#F1C7A8', primaria: '#BED2AE', secundaria: '#AFC8E8',
  bach: '#C9B8DD', comun: '#E7CF8F', admin: '#DDB3AD',
  servicio: '#C8CBC7', laboratorio: '#9CCFD0', circulacion: '#F4ECDD',
  patio: '#D7E3C0', line: '#253B32', ink: '#173344', bg: '#F7F3E9'
};

const rooms = {
  PB: [
    ['001','Vestíbulo','comun'],['002','Recepción','admin'],['003','Secretaría','admin'],
    ['004','Dirección','admin'],['005','Jefatura','admin'],['006','Familias','admin'],
    ['007','Reuniones','admin'],['008','Enfermería','admin'],
    ['009','Infantil 3A','infantil'],['010','Infantil 3B','infantil'],
    ['011','Infantil 4A','infantil'],['012','Infantil 4B','infantil'],
    ['013','Infantil 5A','infantil'],['014','Infantil 5B','infantil'],
    ['015','Psicomotricidad','infantil'],['016','Calma sensorial','infantil'],
    ['017','Apoyo Infantil','infantil'],['018','Primaria 1A','primaria'],
    ['019','Primaria 1B','primaria'],['020','Primaria 2A','primaria'],
    ['021','Primaria 2B','primaria'],['022','Apoyo Primaria','primaria'],
    ['023','Salón de actos','comun'],['024','Escenario','comun'],
    ['025','Camerinos','servicio'],['026','Comedor','comun'],
    ['027','Cocina','servicio'],['028','Despensa/cámaras','servicio'],
    ['029','Carga/residuos','servicio'],['030','Office/lavado','servicio'],
    ['031','Aseo Infantil O','servicio'],['032','Aseo Infantil E','servicio'],
    ['033','Aseos generales','servicio'],['034','Aseo accesible','servicio'],
    ['035','Limpieza/almacén','servicio'],['036','Instalaciones PB','servicio']
  ],
  P1: [
    ['101','Primaria 3A','primaria'],['102','Primaria 3B','primaria'],
    ['103','Primaria 4A','primaria'],['104','Primaria 4B','primaria'],
    ['105','Primaria 5A','primaria'],['106','Primaria 5B','primaria'],
    ['107','Primaria 6A','primaria'],['108','Primaria 6B','primaria'],
    ['109','Biblioteca','comun'],['110','Lectura infantil','comun'],
    ['111','Mediateca','comun'],['112','Arte','comun'],['113','Música','comun'],
    ['114','Tecnología/creación','laboratorio'],['115','Grupo 1','comun'],
    ['116','Grupo 2','comun'],['117','Grupo 3','comun'],
    ['118','Apoyo 1','primaria'],['119','Apoyo 2','primaria'],
    ['120','Profesores Primaria','admin'],['121','Reunión docente','admin'],
    ['122','Reprografía','servicio'],['123','Almacén material','servicio'],
    ['124','Aseos oeste','servicio'],['125','Aseos este','servicio'],
    ['126','Aseo accesible','servicio'],['127','Limpieza','servicio'],
    ['128','Instalaciones P1','servicio']
  ],
  P2: [
    ['201','Secundaria 1A','secundaria'],['202','Secundaria 1B','secundaria'],
    ['203','Secundaria 2A','secundaria'],['204','Secundaria 2B','secundaria'],
    ['205','Secundaria 3A','secundaria'],['206','Secundaria 3B','secundaria'],
    ['207','Secundaria 4A','secundaria'],['208','Secundaria 4B','secundaria'],
    ['209','Bachillerato 1A','bach'],['210','Bachillerato 1B','bach'],
    ['211','Bachillerato 2A','bach'],['212','Bachillerato 2B','bach'],
    ['213','Lab. Biología','laboratorio'],['214','Prep. Biología','servicio'],
    ['215','Lab. Física/Química','laboratorio'],['216','Prep. F/Q','servicio'],
    ['217','Laboratorio STEM','laboratorio'],['218','Prep./almacén STEM','servicio'],
    ['219','Informática','laboratorio'],['220','Taller proyectos','laboratorio'],
    ['221','Sala de estudio','comun'],['222','Dpto. Humanidades','admin'],
    ['223','Dpto. Ciencias','admin'],['224','Dpto. Idiomas','admin'],
    ['225','Orientación','admin'],['226','Sala profesores','admin'],
    ['227','Reuniones','admin'],['228','Aseos oeste','servicio'],
    ['229','Aseos este','servicio'],['230','Aseo accesible','servicio'],
    ['231','Limpieza','servicio'],['232','Instalaciones P2','servicio']
  ]
};

const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const roomText = (r, prefix, x, y, w, h) => {
  const fsCode = Math.max(12, Math.min(18, w / 8));
  const fsName = Math.max(10, Math.min(15, w / 10));
  return `<text x="${x+w/2}" y="${y+h/2-3}" text-anchor="middle" font-size="${fsCode}" font-weight="700" fill="${palette.ink}">B1-${prefix}-${r[0]}</text>
  <text x="${x+w/2}" y="${y+h/2+17}" text-anchor="middle" font-size="${fsName}" fill="${palette.ink}">${esc(r[1])}</text>`;
};

function block(r, prefix, x, y, w, h) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${palette[r[2]]}" stroke="${palette.line}" stroke-width="1.5"/>${roomText(r,prefix,x,y,w,h)}`;
}

function band(list, prefix, x, y, w, h, dir='h') {
  const out=[];
  const n=list.length;
  list.forEach((r,i)=>{
    if(dir==='h') out.push(block(r,prefix,x+i*w/n,y,w/n,h));
    else out.push(block(r,prefix,x,y+i*h/n,w,h/n));
  });
  return out.join('\n');
}

function allocate(rs) {
  const n=rs.length;
  const counts = n >= 34 ? [5,5,5,5,5,5,n-30] : n >= 30 ? [4,5,4,5,4,4,n-26] : [4,4,4,4,4,4,n-24];
  let p=0;
  return counts.map(c=>{ const a=rs.slice(p,p+c); p+=c; return a; });
}

function planSvg(key, title, subtitle) {
  const rs=rooms[key];
  const g=allocate(rs);
  const W=2200,H=1500;
  const bx=80,by=180,bw=1280,bh=1180;
  const left=bx,right=bx+bw,top=by,bottom=by+bh;
  const innerL=495,innerR=925;
  const northTop=280,northBottom=710,centralBottom=830,southBottom=1260;
  const scheduleX=1430;
  const prefix=key==='PB'?'PB':key;
  const titleCode = key==='PB' ? 'PLANTA BAJA' : key==='P1' ? 'PLANTA PRIMERA' : 'PLANTA SEGUNDA';
  const allLegend=[['infantil','Infantil'],['primaria','Primaria'],['secundaria','Secundaria'],['bach','Bachillerato'],['laboratorio','Especiales / laboratorios'],['comun','Común'],['admin','Administración / docentes'],['servicio','Servicios']];
  const rowH=34;
  const list1=rs.slice(0,Math.ceil(rs.length/2));
  const list2=rs.slice(Math.ceil(rs.length/2));
  const sched=(arr,x,y)=>arr.map((r,i)=>`<rect x="${x}" y="${y+i*rowH}" width="15" height="15" fill="${palette[r[2]]}" stroke="${palette.line}"/><text x="${x+24}" y="${y+13+i*rowH}" font-size="13" font-weight="700" fill="${palette.ink}">B1-${prefix}-${r[0]}</text><text x="${x+126}" y="${y+13+i*rowH}" font-size="13" fill="${palette.ink}">${esc(r[1])}</text>`).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="100%" height="100%" fill="${palette.bg}"/>
  <text x="80" y="65" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="${palette.ink}">B1 · ${titleCode}</text>
  <text x="80" y="108" font-family="Arial, sans-serif" font-size="22" fill="#51645A">${esc(subtitle)}</text>
  <text x="1350" y="105" text-anchor="end" font-family="Arial, sans-serif" font-size="17" fill="#7A6D59">Esquema funcional · no es plano constructivo</text>

  <g font-family="Arial, sans-serif">
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="${palette.circulacion}" stroke="${palette.line}" stroke-width="6"/>
    ${band(g[0],prefix,left,top,right-left,northTop-top,'h')}
    ${band(g[1],prefix,left,northTop,innerL-left,northBottom-northTop,'v')}
    ${band(g[2],prefix,innerR,northTop,right-innerR,northBottom-northTop,'v')}
    ${band(g[3],prefix,left,northBottom,right-left,centralBottom-northBottom,'h')}
    ${band(g[4],prefix,left,centralBottom,innerL-left,southBottom-centralBottom,'v')}
    ${band(g[5],prefix,innerR,centralBottom,right-innerR,southBottom-centralBottom,'v')}
    ${band(g[6],prefix,left,southBottom,right-left,bottom-southBottom,'h')}

    <rect x="${innerL}" y="${northTop}" width="${innerR-innerL}" height="${northBottom-northTop}" fill="${palette.patio}" stroke="${palette.line}" stroke-width="3"/>
    <path d="M530 495 H890 M710 315 V675" stroke="#91A47E" stroke-width="8" opacity=".7"/>
    <circle cx="710" cy="495" r="44" fill="#C9D5B5" stroke="#718566" stroke-width="3"/>
    <text x="710" y="477" text-anchor="middle" font-size="23" font-weight="700" fill="${palette.ink}">B3</text><text x="710" y="505" text-anchor="middle" font-size="17" fill="${palette.ink}">CLAUSTRO NORTE</text><text x="710" y="529" text-anchor="middle" font-size="16" font-weight="700" fill="#5C714F">30 × 30 m</text>
    <rect x="${innerL}" y="${centralBottom}" width="${innerR-innerL}" height="${southBottom-centralBottom}" fill="${palette.patio}" stroke="${palette.line}" stroke-width="3"/>
    <path d="M530 1045 H890 M710 865 V1225" stroke="#91A47E" stroke-width="8" opacity=".7"/>
    <circle cx="710" cy="1045" r="44" fill="#C9D5B5" stroke="#718566" stroke-width="3"/>
    <text x="710" y="1027" text-anchor="middle" font-size="23" font-weight="700" fill="${palette.ink}">B2</text><text x="710" y="1055" text-anchor="middle" font-size="17" fill="${palette.ink}">CLAUSTRO SUR</text><text x="710" y="1079" text-anchor="middle" font-size="16" font-weight="700" fill="#5C714F">30 × 30 m</text>

    <path d="M${innerL} ${northTop-18}H${innerR} M${innerL} ${northBottom+18}H${innerR} M${innerL} ${centralBottom-18}H${innerR} M${innerL} ${southBottom+18}H${innerR}" stroke="#B79B67" stroke-width="10" stroke-dasharray="5 8" opacity=".75"/>
    <text x="710" y="730" text-anchor="middle" font-size="14" fill="#6B5B45">GALERÍA HISTÓRICA CONTINUA</text>
    <text x="710" y="1252" text-anchor="middle" font-size="14" fill="#6B5B45">GALERÍA HISTÓRICA CONTINUA</text>

    ${[['NV-01',125,205],['NV-02',1230,205],['NV-03',125,740],['NV-04',1230,740],['NV-05',125,1240],['NV-06',1230,1240]].map(([t,x,y])=>`<circle cx="${x}" cy="${y}" r="28" fill="#173344"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="12" fill="white">${t}</text>`).join('')}
    ${[['AC-01',480,770],['AC-02',940,770]].map(([t,x,y])=>`<rect x="${x-28}" y="${y-28}" width="56" height="56" rx="10" fill="#A7884D"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="12" fill="white">${t}</text>`).join('')}

    <path d="M1260 140 L1300 78 L1340 140 Z" fill="#315E49"/><text x="1300" y="62" text-anchor="middle" font-size="21" font-weight="700" fill="${palette.ink}">N</text>
    <path d="M650 1360 V1415 H790 V1360" fill="none" stroke="#B88A38" stroke-width="8"/><text x="720" y="1450" text-anchor="middle" font-size="18" font-weight="700" fill="#8E6827">ÚNICO ACCESO PRINCIPAL · SUR</text>

    <text x="${scheduleX}" y="190" font-size="27" font-weight="700" fill="${palette.ink}">RELACIÓN DE ESTANCIAS</text>
    ${sched(list1,scheduleX,230)}
    ${sched(list2,1800,230)}
    <line x1="${scheduleX}" y1="900" x2="2110" y2="900" stroke="#B8AA92" stroke-width="2"/>
    <text x="${scheduleX}" y="945" font-size="25" font-weight="700" fill="${palette.ink}">LEYENDA</text>
    ${allLegend.map(([k,n],i)=>`<rect x="${scheduleX+(i%2)*340}" y="${980+Math.floor(i/2)*45}" width="24" height="24" fill="${palette[k]}" stroke="${palette.line}"/><text x="${scheduleX+34+(i%2)*340}" y="${999+Math.floor(i/2)*45}" font-size="17" fill="${palette.ink}">${n}</text>`).join('')}
    <text x="${scheduleX}" y="1205" font-size="20" font-weight="700" fill="${palette.ink}">CRITERIOS FIJOS</text>
    <text x="${scheduleX}" y="1242" font-size="17" fill="${palette.ink}">• Edificio histórico único de tres plantas.</text>
    <text x="${scheduleX}" y="1272" font-size="17" fill="${palette.ink}">• Dos claustros consecutivos B2 y B3.</text>
    <text x="${scheduleX}" y="1302" font-size="17" fill="${palette.ink}">• Galerías libres y particiones reversibles.</text>
    <text x="${scheduleX}" y="1332" font-size="17" fill="${palette.ink}">• 6 escaleras protegidas y 2 ascensores.</text>
    <text x="${scheduleX}" y="1362" font-size="17" fill="${palette.ink}">• Norte arriba; entrada principal al sur.</text>
    <text x="${scheduleX}" y="1420" font-size="15" fill="#7A6D59">Distribución preliminar sujeta a levantamiento, estructura, incendios y normativa educativa.</text>
  </g>
  </svg>`;
}

const specs = [
  ['PB','b1-planta-baja-v49.svg','Infantil · Primaria 1.º–2.º · Administración · Salón de actos · Comedor'],
  ['P1','b1-planta-primera-v49.svg','Primaria 3.º–6.º · Biblioteca · Arte · Música · Tecnología · Apoyo'],
  ['P2','b1-planta-segunda-v49.svg','Secundaria · Bachillerato · Laboratorios · Informática · Estudio · Departamentos']
];

for (const [key,file,subtitle] of specs) fs.writeFileSync(path.join(OUT,file),planSvg(key,file,subtitle));
console.log(specs.map(x=>path.join(OUT,x[1])).join('\n'));
