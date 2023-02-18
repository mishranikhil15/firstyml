const app=require("express")();

app.get("/",(req,res)=>{
    res.send("Hello!");
})

app.listen(5001,()=>{
    console.log("Server is running at port 5001")
})