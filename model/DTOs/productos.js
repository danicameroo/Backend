function productoDTO(producto, id, timestamp) {
    return {
        ...producto,
        id,
        timestamp
    }
}

export default productoDTO