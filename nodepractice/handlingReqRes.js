const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="GET"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("home page");
    }else if(req.url==="/about" && req.method==="GET"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("about page");
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("page not found")
    }
})
server.listen(3000); 