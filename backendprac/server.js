const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv").config()
const app = express()
const mongoose = require("mongoose")

const {readdirSync} = require("fs")
app.use(cors())

console.log(readdirSync("./routes"))
readdirSync("./routes").map(f=> app.use("/",require("./routes/"+f)))


mongoose.connect(process.env.MONGODB_DATABASE_URL).then(()=>console.log("Database Connected"))


const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log("app running on port 8000")
})

// app.use("/",require("./routes/"+f)