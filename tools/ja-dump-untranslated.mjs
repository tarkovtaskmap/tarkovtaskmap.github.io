// 使い方(プロジェクトのフォルダで): node tools/ja-dump-untranslated.mjs  → 日本語訳が無い目標を tools/untranslated.json に書き出す。続けて node tools/ja-translate.mjs ja-supplement.js。足りない訳は tools/ja-translate.mjs にしっかり追記(MISSING と表示される)
import fs from "fs";
const g=async u=>(await (await fetch("https://json.tarkov.dev/"+u)).json()).data;
const out={};
for(const src of ["regular","pve"]){
  const tasks=(await g(src+"/tasks")).tasks; const en=await g(src+"/tasks_en"), ja=await g(src+"/tasks_ja");
  for(const id in tasks) for(const o of tasks[id].objectives||[]){
    const k=o.description; if(!k||!en[k]) continue;
    if(!ja[k]||ja[k]===en[k]||!/[぀-ヿ一-鿿]/.test(ja[k])) out[k]=en[k];
  }
}
fs.writeFileSync("tools/untranslated.json",JSON.stringify(out,null,0));
console.log("unique keys (pvp+pve):",Object.keys(out).length);
const uniq=[...new Set(Object.values(out))]; console.log("unique texts:",uniq.length);
