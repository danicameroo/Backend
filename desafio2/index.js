const fs = require ('fs');

class Contenedor{
    constructor(name) {
        this.name = name;
    }    

    async save(){
        await fs.promises.readFile(`./${this.name}`, 'utf-8')
        .then(data => {
            let id = 0
            let dataObj = null
            if(data.length == 0){
                id = 1
            }else{
                dataObj = JSON.parse(data)
                id = dataObj[dataObj.length - 1].id + 1
            }
            const obj = {id: id}
    
            fs.appendFileSync(`./${this.name}`, JSON.stringify( obj, null, 2))
            .then(() => {
                return 'ok'
            })
            .catch(err => {
                return err
            })
        })
        .catch(err => {
            return err
        })


        /*try{
            let data = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            if( data == 0 ){
                let id = 1
                let dato = fs.writeFileSync(`./${this.name}`, JSON.stringify( id, null, 2))
                console.log(dato)
            }else{
                let data = fs.readFileSync( `./${this.name}`, 'utf-8' ) 
                JSON.parse(data)
                let id = data.id + 1
                let dato = fs.appendFileSync(`./${this.name}`, JSON.stringify(id, null, 2))
                console.log(dato)
            }
        } catch(err){
            console.log(err)
        }*/
    }

    async getAll(){
        let producto = [];
        try{
            const cont = await fs.promises.writeFile(`./${this.name}`, JSON.stringify(producto, null, 2))
            const data = JSON.parse(cont);
            return data
        }catch(err){
            console.log(err)
        }
    }

    async deleteAll(){
        try{
            const cont = await fs.promises.writeFile(`./${this.name}`, '[\n\n]')
            console.log('eliminado')
        }catch(err){
            console.log(err)
        }
    }

    /*leer(){
        try{
            const data = fs.readFileSync(`./${this.name}`, "utf-8")
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }*/
}

let url = new Contenedor("productos.txt")

url.save().then(id => console.log(id))


