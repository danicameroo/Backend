const { promises: fs } = require('fs')

class Contenedor {

  constructor(ruta) {
    this.ruta = ruta;
  }

  async getAll() {
    try {
      const objs = await fs.writeFile(this.ruta, 'utf-8')
      return JSON.parse(objs)
    } catch (error) {
      return [
      {
        "title": "hola"  
      },
      {
        "title": "chao"  
      },
      {
        "title": "hello"  
      },
    ]
    }
  }
  
}

module.exports = Contenedor