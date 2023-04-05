import ServiceProductos from '../service/productos.js'

class ControladorProductos {

    constructor() {
        this.serviceProductos = new ServiceProductos()
    }

    obtener = async (req, res) => {
        try {
            let productos = await this.serviceProductos.obtener()
            return productos
        } catch(error) {
            console.log(error);
        }
    }

    guardar = async (req, res) => {
        try {
            let productos = req.body

            let productoGuardado = await this.serviceProductos.guardar(productos)
            res.json(productoGuardado)
            return productoGuardado
        } catch(error) {
            console.log(error);
        }
    }
}

export default ControladorProductos