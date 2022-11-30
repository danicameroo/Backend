const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

const productos = []

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.set('view engine', 'ejs')

// get

const mensajes = [
    { author: 'Dario', text: 'los temas están separados en tres bloques'},
    { author: 'Ivan', text: 'ivan'},
    { author: 'Ariel', text: 'Tony, Bruce'},
    { author: 'Pedro', text: 'Choco'}
]

app.get('/productos', (req, res) => {
    res.render('inicio', {productos})
    
})

io.on('connection', socket =>{
    console.log('Un cliente se ha conectado')

    socket.emit('messages', mensajes)

    socket.on('new-message', data => {
        mensajes.push(data)

        io.sockets.emit('messages', mensajes)
    })
    return false
})

// post

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/productos')
})


const PORT = 8080

httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})