import Joi from 'joi'

class Productos {

    constructor(producto) {
        this.producto = producto
    }

    static validar(producto, required) {
        const ProductoSchema = Joi.object({
            producto: required? Joi.string().required() : Joi.string()
        })

        const { error } = ProductoSchema.validate(producto)
        if (error) {
            throw error
        }
    }
}

export default Productos