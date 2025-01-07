const readline = require('readline')
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

// let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
// console.log(textIn);

// let content = `Data read from input.txt: ${textIn}. \n Date created ${new Date()}`
// fs.writeFileSync('./Files/output.txt', content)


//Lecture 5 - Theory

//Lecture 6 - Theory

//Lecture 7 - Read & Write Files Asynchronously

// fs.readFile('./Files/start.txt', 'utf-8' , (error1 , data1)=>{
//     console.log(data1)
//     fs.readFile(`./Files/${data1}.txt`, 'utf-8' , (error2 , data2)=>{
//         console.log(data2)
//             fs.writeFile('./Files/output.txt', `${data1}`        
//             )
        
//     })
// })

// console.log("Reading Files...")

// Lecure 8 - creating simple web server & Lecture 9

const http = require('http');


const html = fs.readFileSync('./Template/index.html', 'utf-8');

const server =  http.createServer((request , response)=>{
    response.end(html);
    console.log("A new request")
})

server.listen(3000, '127.0.0.1' , ()=>{
    console.log("Server has Started")
})
