const {spawnSync}=require('node:child_process');
const fs=require('node:fs');
const path=require('node:path');
const dir=__dirname;
const tests=fs.readdirSync(dir).filter(f=>f.endsWith('-regression.cjs')).sort();
for(const f of tests){
  console.log(`\n=== ${f} ===`);
  const r=spawnSync(process.execPath,[path.join(dir,f)],{stdio:'inherit'});
  if(r.status!==0){console.error(`\nFAILED: ${f}`);process.exit(r.status||1);}
}
console.log(`\nPASS: ${tests.length}/${tests.length} regression suites.`);
