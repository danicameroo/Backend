import express from "express"
import ControladorProductos from "../controller/productos.js"

const router = express.Router()

class RouterProductos {

    constructor() {
        this.controladorProductos = new ControladorProductos()
    }

    start() {
        router.get('/', this.controladorProductos.obtener)
        router.post('/', this.controladorProductos.guardar)
        return router
    }
}

export default RouterProductos