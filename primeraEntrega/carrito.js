const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const carritos = []

const router = express.Router()

router.get('/', (req, res) => {
    res.json(carritos)
})

router.post('/', (req, res) => {
    if(carritos.length === 0 ){
        const cart = req.body
        cart.id = 1
        carritos.push(cart)

        try{
            const savedCart = cart.save();
            res.status(200).json(savedCart)
        }catch(err){
            res.status(500).json(err)
        }

    }else{
        let id = carritos[carritos.length - 1].id + 1
        let cart = req.body
        cart.id = id 
        carritos.push(req.body)
    }
    res.json({ok: 'ok'})  
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const buscado = carritos.indexOf(carritos.find((cart) => cart.id == id));
    carritos.splice(buscado, 1)
    res.json({id: req.params.id})
})

router.post('/:id/productos', (req, res) => {
    if(carritos.id ===  parseInt(req.params.id)){
        const product = req.body
        carritos.push(product)

        try{
            const savedCart = product.save();
            res.status(200).json(savedCart)
        }catch(err){
            res.status(500).json(err)
        }
    }
    res.json({ok: 'ok'})
})

app.use('/api/carrito', router)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('servidor escuchando en el ' + PORT)
})