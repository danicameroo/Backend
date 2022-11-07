const express = require('express')
const Contenedor = require("./Contenedor.js")

const app = express()
const productos = new Contenedor('./productos.txt')


app.get('/productos', async (req, res) => {
    const prods = await productos.getAll()
    res.send(prods)
})

app.get('/productoRandom', async (req, res) => {
    const prods = await productos.getAll()
    const random = parseInt(Math.random() * prods.length)
    res.send(prods[random])
}) 

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(server.address().port)
});
server.on("error", error => console.log(`Error en servidor ${error}`))
