const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const productos = []

const router = express.Router()

router.get('/', (req, res) => {
    res.json(productos)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const buscado = productos.find((producto) => producto.id == id);

    if (!buscado) {
        const error = new Error('Error, no se subio ningun archivo')
        console.log(res.json(error)) 
    }
    res.json({buscado})
})

router.post('/', (req, res) => {
    if(productos.length === 0 ){
        const products = req.body
        products.id = 1
        productos.push(products)
    }else{
        let id = productos[productos.length - 1].id + 1
        let product = req.body
        product.id = id 
        productos.push(req.body)
    }
    res.json({ok: 'ok'})
})

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const nuevo = req.body
    const buscado = productos.find((producto) => producto.id == id);
    const index = productos.indexOf(buscado)
    productos.splice(index, 1, nuevo)
    res.json({ok: "refreshed"})
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const buscado = productos.indexOf(productos.find((producto) => producto.id == id));
    productos.splice(buscado, 1)
    res.json({id: req.params.id})
})

app.use('/api/productos', router)


const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('servidor escuchando en el ' + PORT)
})

