const express = require('express')
const { Router } = express

const app = express()

//admin
const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//productos
const productos = [{"pro":"gato", "id": 1}, {"pro":"perro", "id": 2}, {"pro":"perGat", "id": 3}]
const productosRouter = new Router()

productosRouter.get('/', (req, res) => {
    res.json(productos)
})

productosRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const buscado = productos.find((producto) => producto.id == id);

    if (!buscado) {
        const error = new Error('Error, no se subio ningun archivo')
        console.log(res.json(error)) 
    }
    res.json({buscado})
})

productosRouter.post('/', (req, res) => {
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

productosRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const nuevo = req.body
    const buscado = productos.find((producto) => producto.id == id);
    const index = productos.indexOf(buscado)
    productos.splice(index, 1, nuevo)
    res.json({ok: "refreshed"})
})

productosRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const buscado = productos.indexOf(productos.find((producto) => producto.id == id));
    productos.splice(buscado, 1)
    res.json({id: req.params.id})
})

//carrito
const carritos = []
const carritosRouter = new Router()

carritosRouter.get('/', (req, res) => {
    res.json(carritos)
})

carritosRouter.post('/:id/productos', (req, res) => {
    const pro = req.params.id - 1
    const producto = productos[pro]
    carritos.push(producto)
        
    res.json({ok: 'ok'})

})

carritosRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const buscado = carritos.indexOf(carritos.find((cart) => cart.id == id));
    carritos.splice(buscado, 1)
    res.json({id: req.params.id})
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('servidor escuchando en el ' + PORT)
})

