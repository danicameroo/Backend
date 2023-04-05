import express, { Router } from 'express'
import config from './config.js'
import GraphqlController from './controladores/graphControllers.js'
import cors from 'cors'

const app = express()

const configCors = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

if(config.NODE_ENV == 'development') {
    app.use(cors(configCors))
} 

app.use(express.static('public'))
app.use(express.json())

app.use('/graphql', new GraphqlController())

const PORT = config.PORT
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}: Environment: ${config.NODE_ENV}`);
})