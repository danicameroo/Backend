import axios from 'axios'

const url = 'http://localhost:8080/productos'

const enviarProductos= () => {
    axios.post(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

setInterval(enviarProductos, 2000)
enviarProductos()