import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync as run} from 'node:child_process';

// Montaje reproducible: no genera ni reinterpreta ninguna miniatura.
const root=process.cwd(), out=path.join(root,'imagenes/panel-presentacion');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'almendros-v77-'));
const base=path.join(out,'vista-general-actualizada-v77.png');
const bg='#f7f2e7', green='#214b3b';
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const text=(x,y,s,size=25,color=green)=>`<text x="${x}" y="${y}" font-family="Arial" font-size="${size}" fill="${color}">${esc(s)}</text>`;
function build(name,w,h,placements,overlay){
  const args=['-size',`${w}x${h}`,`xc:${bg}`];
  placements.forEach(([file,x,y,cw,ch],i)=>{
    const tile=path.join(tmp,`${name}-${i}.png`);
    run('magick',[file,'-resize',`${cw}x${ch}`,'-background',bg,'-gravity','center','-extent',`${cw}x${ch}`,tile]);
    args.push(tile,'-geometry',`+${x}+${y}`,'-composite');
  });
  const svg=path.join(tmp,`${name}.svg`),png=path.join(tmp,`${name}-overlay.png`);
  fs.writeFileSync(svg,`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${overlay}</svg>`);
  run('magick',['-background','none',svg,png]);
  run('magick',[...args,png,'-geometry','+0+0','-composite',path.join(out,name+'.png')]);
}
const thumbs=[
  ['A1 · Cancela principal','imagenes/entrada/cancela.png'],
  ['G1 · Muro y verja perimetral','imagenes/entrada/detalle-muro-verja-perimetral-v45.png'],
  ['C1–C2 · Deporte exterior','imagenes/gimnasio/detalle-zona-deportiva-exterior-v45.png'],
  ['D2 · Piscinas · exterior','imagenes/piscina/piscinas-vista-aerea-v23.png'],
  ['D1 · Huerto mediterráneo','imagenes/jardín/huerto/d1-parras-protagonistas-v74.png'],
  ['E2 · Jardín de datileras','imagenes/jardín/parque-principal/e2-jardin-datileras-v69.png'],
  ['B2–B3 · Claustros abiertos','imagenes/edificio-principal/interiores/claustros-monsteras-ficus-v68.png'],
  ['F2 · Terminal de autobuses','imagenes/parking/parking-bus.png']
];
let p=[[base,45,310,1845,1230]],o=text(45,80,'COLEGIO LOS ALMENDROS',54)+text(45,130,'PRESENTACIÓN ARQUITECTÓNICA · OCHO VISTAS EXTERIORES',27);
thumbs.forEach(([label,file],i)=>{const x=1930+(i%2)*510,y=180+Math.floor(i/2)*440;p.push([path.join(root,file),x,y,490,380]);o+=`<rect x="${x}" y="${y+380}" width="490" height="43" fill="${green}"/>`+text(x+12,y+409,label,23,'#ffffff');});
o+=text(45,1610,'VISTA GENERAL · HUERTO D1, PARQUE E2 Y CLAUSTROS ACTUALIZADOS',25)+text(45,1670,'Miniaturas procedentes de las referencias existentes del proyecto.',24)+text(45,1730,'Anteproyecto conceptual · Las vistas de detalle prevalecen sobre esta síntesis.',23)+text(45,1945,'v77 · Septiembre 2026',22);
build('panel-presentacion-arquitectonica-exteriores-8-miniaturas-v77',3000,2000,p,o);

const zones=[
 ['A1','Cancela principal',690,900],['A2','Avenida ceremonial y plátanos',690,790],['A3','Almendral oeste',563,790],['A4','Almendral este',825,790],
 ['B1','Edificio principal',700,657],['B2','Claustro sur',705,520],['B3','Claustro norte',705,365],
 ['C1','Atletismo y campo de fútbol',320,520],['C2','Pistas de tenis',380,245],['C3','Gimnasio',380,125],
 ['D1','Huerto mediterráneo posterior',720,180],['D2','Centro acuático y piscinas',970,185],['D3','Pabellón de fútbol sala',1067,175],['D4','Pabellón de voleibol',1148,175],['D5','Cafetería / comedor',1025,319],
 ['E1','Parque infantil',971,391],['E2','Parque de estancia y descanso',985,587],['E3','Administración y seguridad',994,810],
 ['F1','Aparcamiento de coches',1190,610],['F2','Terminal de autobuses',1402,523],['G1','Cerramiento perimetral',1260,909],['G2','Naranjales exteriores',110,155]
];
const colors={A:'#936529',B:'#8b493f',C:'#496d43',D:'#346b7b',E:'#347751',F:'#65527c',G:'#635e4f'};
o=text(45,80,'COLEGIO LOS ALMENDROS · MAPA MAESTRO DE ZONAS',48)+text(45,130,'22 códigos estables · Norte arriba · Vista aérea oblicua, no planta métrica',27);
const mx=35,my=225,mw=2180,mh=1453;
zones.forEach(([code,name,x,y],i)=>{
 const cx=mx+x*mw/1536,cy=my+y*mh/1024,c=colors[code[0]];
 o+=`<circle cx="${cx}" cy="${cy}" r="28" fill="${c}" stroke="white" stroke-width="3"/>`+text(cx-18,cy+9,code,25,'white');
 const ly=235+i*64;
 o+=`<rect x="2260" y="${ly-28}" width="55" height="40" rx="5" fill="${c}"/>`+text(2269,ly,code,23,'white')+text(2330,ly,name,23);
});
o+=text(45,1770,'D1 · Huerto mediterráneo con parras   |   E2 · Datileras y césped   |   B2 · Pozo / B3 · Fuente',26)+text(45,1830,'Mapa de localización conceptual. Para geometría, cantidades y detalles, consultar los módulos y referencias de cada zona.',24)+text(45,1935,'v77 · Septiembre 2026',22);
build('mapa-maestro-zonas-v77',3000,2000,[[base,mx,my,mw,mh]],o);
console.log('Panel y mapa v77 generados; 8 miniaturas originales y 22 marcadores únicos.');
