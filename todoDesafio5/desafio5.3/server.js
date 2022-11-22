const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

const productos = []

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/productos', (req, res) => {
    res.render('datos', {productos})

})

app.post('/productos', (req, res) => {
    const producto = req.body;
    productos.push(producto);
    res.redirect("/productos");
})

app.listen(8080)