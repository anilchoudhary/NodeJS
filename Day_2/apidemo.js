const http=require('http');
const fs=require('fs');
const url=require('url');


// creation of server 

const server=http.createServer((req,res)=>{

    // const path=req.url;

    const path=url.parse(req.url);
    // console.log(url.parse(req.url));

    if(path.pathname=="/" || path.pathname=="/products"){

        fs.readFile("./products.json","utf-8",(err,data)=>{
            res.writeHead(200,{
                "Content-type":"application/json"
            })
            res.end(data);
        })
        
    }
    else if(path.pathname=="/product"){
        const id=path.query.split("=")[1];

        fs.readFile("./products.json","utf-8",(err,data)=>{
           
            
            const parsedData=JSON.parse(data);
            const singleData=parsedData.filter((ele)=>{
                return ele.id==id;
            })

            console.log(singleData);

            res.writeHead(200,{
                "Content-type":"application/json"
            })
            res.end(JSON.stringify(singleData));


        })

        
    }
    else {
        res.writeHead(404,{
            "Content-Type":"text/html"
        });
        res.end("<h1>404 resource not found</h1>");
    }

    

});

server.listen("3000","127.0.0.1",()=>{
    console.log("server is running");
})


