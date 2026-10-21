const express=require("express")
const app=express()
app.post("/",(req,res)=>{
    res.send("welcome to post request")
})
app.put("/",(req,res)=>{
    res.send("welcome to put request")
})
app.delete("/",(req,res)=>{
    res.send("welcome to delete request")
})
app.get("/",(req,res)=>{
res.send("welcome to node js express js")
})
app.listen(3000,(error)=>{
    if(error){
        console.log(error.message)
    }
console.log("running express on http://127.0.0.1:3000")
})