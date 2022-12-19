import { options } from "./options/mysqlconn.js"
import ClienteSQL from "./sqlContainer.js"

const sql = new ClienteSQL(options)

sql.crearTabla()
    .then(() => {
        console.log("1- tabla creada")

        const mensajes = [
            { author: 'Dario', text: 'los temas están separados en tres bloques'},
            { author: 'Ivan', text: 'ivan'},
            { author: 'Ariel', text: 'Tony, Bruce'},
            { author: 'Pedro', text: 'Choco'}
        ]

        return sql.insertarArticulos(mensajes)
    })
    .then(() => {
        console.log('2- articulos insertados')

        return sql.listarArticulos()
    })
    .then((mensajes) => {
        console.log(mensajes)
        
        console.log('3- articulos listados')

        return sql.borrarArticulos(3)
    })
    .then(() => {
        return sql.listarArticulos()
    })
    .then((mensajes) => {
        console.log(mensajes)

        console.log('resultado final')
    })
    .catch(err => console.log(err))
    .finally(() => {
        sql.close()
    })