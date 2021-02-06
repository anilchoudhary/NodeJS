// console.log("Node it is!")
// let name = "Thor";
// console.log(name);
// let num1=23, num2=25
// console.log(num1+num2);

//module package


//inbuilt module
const fs=require('fs');


//sync
// const data=fs.readFileSync("./data.txt",{encoding:"utf-8"});
// console.log(data);

// fs.writeFileSync("./output.txt","Hello! I am an output");
// console.log("file written");


//async

//read files
// fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// })
// console.log("hh")


//writefile
// fs.writeFile("./something.txt","Hello",(err)=>{
//     console.log(err);
// })


// append in a file
// fs.appendFile("./something.txt","I am just getting appended",(err)=>{
// })

// read from data.txt and write in output.txt
// fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
//     fs.writeFile("./output.txt",data,(err)=>{
//         console.log(err);
//     })
// })

//How to create a server
//http module is used to crete server and handle request 
// createserve create server
//function 
const http= require('http');
const server=http.createServer((request,response)=>{
    response.end("I am up");
});

//to start and mention its properties
server.listen("3000","127.0.0.1",()=>{
    console.log("Started");
});

