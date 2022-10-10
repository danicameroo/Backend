  class Usuario{
    
        constructor(nombre, apellido, libros, mascotas) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = libros;
            this.mascotas = mascotas;
        }
    
    
        getFullName(){
            console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}`) 
        }
    
        addMascota(nuevaMascota){
            return this.mascotas.push(nuevaMascota)
        }
    
        countMascota(){
            return this.mascotas.length
        }
    
        addBook(nuevoLibro){
            return this.libros.push(nuevoLibro);
        }
    
        getBookNames(){
            let nuevoArray = []
            
            this.libros.forEach(libros => {
                let nombres = libros.nombre
                nuevoArray.push(nombres)
                
            });

            console.log(nuevoArray)

            
        }
    }
    
    let usuario = new Usuario('Gerardo', 'Hernandez', [{nombre: 'Desde mi jardin', autor: 'Jerzy kosinski'}, {nombre: 'El naufrago', autor: 'Gabriel Garcia Marquez'}, {nombre: 'Yo soy Dios', autor: 'Giorgio Faletti'}], ['Balu', 'Maemi'])

    let nuevaMascota = 'miel'
    let nuevoLibro = {nombre: 'Yo mato', autor: 'Giorgio Faletti'}
    
    
    let ver= usuario.getBookNames();
    console.log(ver)
