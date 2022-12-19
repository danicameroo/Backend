import knex from 'knex'

class ClienteSQL {

    constructor(options) {
        this.knex = knex(options)
    }

    crearTabla() {
        return this.knex.schema.dropTableIfExists('mensajes')
            .finally(() => {
                return this.knex.schema.createTable('mensajes', table => {
                    table.increments('id').primary()
                    table.string('author').notNullable()
                    table.string('text').notNullable()
                })
            })
    }

    insertarArticulos(mensajes) {
        return this.knex('mensajes').insert(mensajes)
    }

    listarArticulos() {
        return this.knex('mensajes').select('*')
    }

    borrarArticulos(id) {
        return this.knex.from('mensajes').where('id', '=', id).del()
    }

    actualizarStock(stock, id) {
        return this.knex.from("mensajes").where('id', '=', id).update({stock: stock})
    }

    close() {
        this.knex.destroy()
    }
}

export default ClienteSQL