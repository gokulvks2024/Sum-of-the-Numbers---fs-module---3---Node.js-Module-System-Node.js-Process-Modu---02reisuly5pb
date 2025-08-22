const fs=require('fs');
const data=fs.readFileSync('src/input.txt','utf-8')
let tot=0;
data.trim().split('\n').map(i=>{
    tot+=Number(i.split(' ')[1])
})
fs.writeFileSync('src/output.txt',tot.toString())