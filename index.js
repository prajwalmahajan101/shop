const express =  require("express")
const app = express()


app.use((req,res,next)=>{
    console.log("in Request")
    res.send({"message":"Hello"})
});


app.listen(8080);