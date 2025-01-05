const readline =require('readline')
const fs = require('fs');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// rl.question('Please enter yo name:' , (name)=>{
//     console.log("You entered :" + name)
// rl.close();
// })

// rl.on('close', ()=> {
// console.log(" interface Close");
// process.exit(0);
// })

//Lecture 4

let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

let content = `Data read from input.txt: ${textIn}. \n Date created ${new Date()}`
fs.writeFileSync('./Files/output.txt', content)
