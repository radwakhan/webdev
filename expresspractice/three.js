const express=require("express")
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json)
const logger=(req,res,next)=>{
    console.log(`you access method:${req.method} URL:${req.url} at ${new Date().toISOString}`)
    next();
}
// app.use(logger)
app.get("/",(req,res,next)=>{
    const token=req.header("token")
    if(token){
        next()
    }
    // if(req.query.valid){
    //     next()
    // }
    res.status(400).json({"error":"not a valid user"})
},(req,res)=>{
    res.send("welcome")
})
app.get("/product",logger,(req,res)=>{ //if want to add middleware only to perticular url so add it as second param 
    const {pid,pname}=req.query;
    res.status(200).json({pid,pname})
})
app.listen(3000, () => { 
    console.log("Server running on port 3000"); 
});