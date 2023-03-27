import ProductosBaseDAO from "./productosDAO.js";
import productoDTO from "../DTOs/productos.js";

class ProductosDAOMem extends ProductosBaseDAO {

    constructor() {
        super()
        this.productos = []
    }

    obtener = async () => {
        return this.productos
    }

    guardar = async (producto) => {
    try {
            let id = this.getNextId(this.productos)
            let timestamp = Date.now()
            let productoGuardado = productoDTO(producto, id, timestamp)
            this.productos.push(productoGuardado)
            return productoGuardado
        } catch(error) {
            console.log('error en guardar el producto');
            return {}
        }
    }
}

export default ProductosDAOMem