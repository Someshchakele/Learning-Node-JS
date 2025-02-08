// const readline = require('readline')
// const fs = require('fs');
// const events = require('events')

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

// Lecure 8 - creating simple web server & Lecture 9 & Lecture 10

// const http = require('http');


// const html = fs.readFileSync('./Template/index.html', 'utf-8');

// const server =  http.createServer((request , response)=>{
//     response.end(html);
//     console.log("A new request")
// })

// const server = http.createServer();
// server.listen(3000, '127.0.0.1' , ()=>{
//     console.log("Server has Started")
// })


//Lecture 11 - Creating Routes in NodeJS

// const http = require('http');

// const server =  http.createServer((request , response)=>{
//    let path =  request.url
//    if(path === '/' || path.toLocaleLowerCase() ==='/home'){
//     response.end("This is Home Page");
//    }
//    else if(path === '/about'){
//     response.end("This is About Page");
//    }
//    else{
//     response.end("404 Error Page Not Found");
//    }
// })

// server.listen(3000, '127.0.0.1' , ()=>{
//     console.log("Server has Started")
// })


//Lecture 13 - Sending Html Response
//Lecture 14 - Setting headers for response
//Lecture 15 - Working with JSON data 
 
// const http = require('http');
// const html = fs.readFileSync('./Template/index.html', 'utf-8');
// let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
// let productList = fs.readFileSync('./Template/product-list.html', 'utf-8')
// products.map((prod)=>{
//     let output = productList.replace('{{%userId%}}', prod.userId)
// })
// const server =  http.createServer((request , response)=>{
//    let path =  request.url
//    if(path === '/' || path.toLocaleLowerCase() ==='/home'){
    
//     response.writeHead(200,{
//         'Content-Type': 'text/html',
//         'my-header': 'Hellow, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', productList));
//    }
//    else if(path === '/about'){
//     response.end(html.replace('{{%CONTENT%}}', 'You are in About Page'));
//    }
//    else if(path === '/products'){
//    response.writeHead(200, {
//     'COntent-Type': 'application/json'
//    });
//    response.end('You are in Products Page')
//    console.log(products)

//    }
//    else{
//     response.end(html.replace('{{%CONTENT%}}', '404 Errror Page'));
//    }
// })

// server.listen(3000, '127.0.0.1' , ()=>{
//     console.log("Server has Started")
// })


// Lecture 20

// let myEmitter = new events.EventEmitter();



// myEmitter.on("userCreated" , (id , name)=>{
//     console.log(`A user created by ${id} and name is ${name}`)
// })

// myEmitter.emit("userCreated" , 9 , 'Somesh');




// code to create million line of code in one sec
// const filePath = './Files/large-file.txt';

// const writeStream = fs.createWriteStream(filePath);

// for (let i = 1; i <= 1000000; i++) {
//   writeStream.write(`This is sentence number ${i}\n`);
// }

// writeStream.end(() => console.log("File generated successfully!"));


// server.on('request' , (req , res)=>{
//     let rs = fs.createReadStream("./Files/large-file.txt");

//     rs.on('data' , (chunks)=>{
//         res.write(chunks)
//         res.end();
//     })
// })

// lecture 34
const express = require('express');
const fs = require('fs');

let app = express();
let movies = JSON.parse(fs.readFileSync('./Data/products.json'))

app.get('/api/v1/movies', (req , res)=>{
    res.status(200).json(
        {
            status:"success",
            count:movies.length,
            data:{
                movies:movies
            }
        }
    );
});
const port = 3000;
app.listen(port, ()=>{
    console.log('server has started...')
})