import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const root=process.cwd();
const dir=path.join(root,'imagenes','edificio-principal','interiores');
const pair=path.join(dir,'claustros-b2-b3-30x30-v59.png');
const oldBoard=path.join(dir,'interiores-patrimonio-bienestar-v57.png');
const newBoard=path.join(dir,'interiores-patrimonio-bienestar-v59.png');
const labeledPair=path.join(dir,'claustros-b2-b3-30x30-rotulado-v59.png');
const tmp=os.tmpdir();
const left=path.join(tmp,`almendros-claustro30-left-${process.pid}.png`);
const right=path.join(tmp,`almendros-claustro30-right-${process.pid}.png`);
const stage=path.join(tmp,`almendros-claustro30-board-${process.pid}.png`);
const extended=path.join(tmp,`almendros-claustro30-pair-ext-${process.pid}.png`);
const overlaySvg=path.join(tmp,`almendros-claustro30-label-${process.pid}.svg`);
const overlayPng=path.join(tmp,`almendros-claustro30-label-${process.pid}.png`);

execFileSync('magick',[pair,'-crop','853x916+0+0','+repage','-resize','568x452^','-gravity','center','-extent','568x452',left]);
execFileSync('magick',[pair,'-crop','853x916+864+0','+repage','-resize','562x452^','-gravity','center','-extent','562x452',right]);
execFileSync('magick',[oldBoard,stage]);
execFileSync('magick',[stage,left,'-geometry','+0+0','-composite',stage]);
execFileSync('magick',[stage,right,'-geometry','+577+0','-composite',newBoard]);

execFileSync('magick',[pair,'-background','#F7F3E9','-gravity','south','-extent','1717x978',extended]);
fs.writeFileSync(overlaySvg,`<svg xmlns="http://www.w3.org/2000/svg" width="1717" height="978" viewBox="0 0 1717 978">
  <text x="18" y="40" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#173344">B1 · CLAUSTROS CUADRADOS DE 30 × 30 METROS</text>
  <rect x="0" y="62" width="853" height="42" fill="#173344" fill-opacity="0.92"/>
  <rect x="864" y="62" width="853" height="42" fill="#173344" fill-opacity="0.92"/>
  <text x="18" y="90" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#fff">B2 · CLAUSTRO SUR · PATIO INTERIOR 30 × 30 m</text>
  <text x="882" y="90" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#fff">B3 · CLAUSTRO NORTE · PATIO INTERIOR 30 × 30 m</text>
</svg>`);
execFileSync('magick',['-background','none',overlaySvg,overlayPng]);
execFileSync('magick',[extended,overlayPng,'-composite',labeledPair]);

for(const file of [left,right,stage,extended,overlaySvg,overlayPng]) fs.rmSync(file,{force:true});
console.log(newBoard);
console.log(labeledPair);
