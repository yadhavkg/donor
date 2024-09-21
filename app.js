import express from "express"
import Connection from "./connection.js"
import env from "dotenv"
import router from "./router.js"
env.config()
const PORT=3000
const app=express()
app.use(express.static("frontend"))
app.use(express.json())
app.use('/api',router);

Connection().then(()=>{
    console.log("database connected");
    app.listen(process.env.PORT,()=>{
        console.log(`server connected at  http://localhost:${process.env.PORT}`);
    })
    
    }).catch((error)=>{
        console.log(error);
})
