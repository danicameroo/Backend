import ServiceProductos from '../service/productos.js'

class ControladorProductos {

    constructor() {
        this.serviceProductos = new ServiceProductos()
    }

    obtener = async (req, res) => {
        try {
            let productos = await this.serviceProductos.obtener()
            res.json(productos)
        } catch(error) {
            console.log(error);
        }
    }

    guardar = async (req, res) => {
        try {
            let productos = req.body

            let productoGuardado = await this.serviceProductos.guardar(productos)
            res.json(productoGuardado)
        } catch(error) {
            console.log(error);
        }
    }
}

export default ControladorProductos