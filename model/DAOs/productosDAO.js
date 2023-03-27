class ProductosBaseDAO {

    getNextId(productos) {
        let length = productos.length
        return length? parseInt(productos[length-1].id) + 1 : 1
    }
}

export default ProductosBaseDAO