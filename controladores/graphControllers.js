import productos from '../controller/productos.js'

import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

const schema = buildSchema(`
type Productos {
    id: ID!,
    titulo: String,
    descripcion: String,
    timestamp: String
}
input ProductosInput {
    titulo: String,
    descripcion: String
}
type Query {
    obtener: [Productos]
}
type Mutation {
    guardar(datos: ProductosInput): Productos
}
`)

export default class GraphqlController {
    constructor() {
        const api = new productos()
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                obtener: api.obtener,
                guardar: api.guardar,
            },
            graphiql: true
        })
    }
}