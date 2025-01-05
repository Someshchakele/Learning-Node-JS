const readline =require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('Please enter yo name:' , (name)=>{
    console.log("You entered :" + name)
rl.close();
})

rl.on('close', ()=> {
console.log(" interface Close");
process.exit(0);
})