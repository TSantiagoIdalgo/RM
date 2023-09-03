const express = require("express")
const portFind = require("portfinder")
const morgan = require("morgan")
const cors = require("cors")

const router = require("./routers/routes")
const server = express()

portFind.basePort = 3001
portFind.highestPort = 4000

portFind.getPort((err, port)=>{
    if(err) console.error('An error has occurred:', err);
    else server.listen(port, ()=>{console.log(`The server is listening on the port: ${port}`)})
})


server.use(morgan("dev"))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(router)