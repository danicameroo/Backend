// http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>

const express = require('express')

const app = express()

const productos = []

app.set('views', './views')
app.set('view engine', 'pug')

// get

app.get('/productos', (req, res) => {
    res.render('nivel', {productos})
})

// post

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/productos')
})

app.listen(8080)