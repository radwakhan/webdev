const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    const urlPath=url.parse(req.url,true);
    const path=urlPath.pathname;
    console.log(path);
    console.log(req.url);
    if(path.url==="/" && req.method==="GET"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.write("this is home page")
        res.write("the first page")
        res.end("ending the homepage")
    }else if(path.url==="/about" && req.method==="GET"){
        res.writeHead(200,{"content-type":"application/json"});
        const info={
            id:1,
            name:"radwa",
            age:23
        }
        res.end(JSON.stringify(info));
    }
    res.end("ending the server");
})
    server.listen(3000);