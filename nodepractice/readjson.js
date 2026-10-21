const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({
        id:1,
        name:"radwa",
        course:"mca"
    }));
});
server.listen(3000);