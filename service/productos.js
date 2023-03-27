import ProductosDAOFactory from "../model/DAOs/productosDAOFactory.js"
import Productos from "../model/models/productos.js"

class ServiceProductos {

    constructor() {
        this.productosDAO = ProductosDAOFactory.get()
    }

    obtener = async () => {
        let productos = await this.productosDAO.obtener()
        return productos.map(p => p.producto).join(' ')
    }

    guardar = async (producto) => {
        if (!ServiceProductos.validar(producto, true)) {
            return new Error('No se envio un modelo Producto correctamente')
        }
        return await this.productosDAO.guardar(producto)
    }

    static validar(producto, required) {
        try {
            Productos.validar(producto, required)
            return true
        } catch(error) {
            throw new Error('el producto no es valida')
        }
    }
}

export default ServiceProductos