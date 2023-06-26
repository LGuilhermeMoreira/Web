var mongoose = require("mongoose")
var mongoDB_URI = "mongodb+srv://GuilhermeMoreira:GMLhunter0@professordb.rpqeyev.mongodb.net/?retryWrites=true&w=majority"
//                 
mongoose.connect(mongoDB_URI,{useNewUrlParser:true})
var db = mongoose.connection

db.on("connected",()=>console.log("MongoDB conectado com sucesso"))
db.on("disconnected",()=>console.log("MongoDB desconectado com sucesso"))
db.on("error",(error)=>console.log("MongoDB erro: " + error))