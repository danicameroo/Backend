import ProductosDAOMem from "./productosDAOMem.js";

class ProductosDAOFactory {
    static get() {
        return new ProductosDAOMem()
    }
}

export default ProductosDAOFactory