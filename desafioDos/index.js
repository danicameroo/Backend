const fs = require ('fs');

class Contenedor{
    constructor(name) {
        this.name = name;
    }

    static id = 1;

    save(id){
        try{
            const cont = fs.writeFileSync(`./${this.name}`, id)
            const data = JSON.stringify(cont);
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    leer(){
        try{
            const data = fs.readFileSync(`./${this.name}`, "utf-8")
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
}

let url = new Contenedor("productos.txt")

console.log(url.save())