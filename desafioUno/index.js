  class Usuario{
    
        constructor(nombre, apellido, libros, mascotas) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = libros;
            this.mascotas = mascotas;
        }
    
    
        getFullName(){
            return `El nombre del usuario es ${this.nombre} ${this.apellido}`
        }

        static nuevaMascota = 'miel'
        addMascota(nuevaMascota){
            return this.mascotas.push(nuevaMascota)
        }
    
        countMascota(){
            return this.mascotas.length
        }

        static nuevoLibro = {nombre: 'Yo mato', autor: 'Giorgio Faletti'}
    
        addBook(nuevoLibro){
            return this.libros.push(nuevoLibro);
        }
    
        getBookNames(){
            let nuevoArray = []
            
            this.libros.forEach(libros => {
                let nombres = libros.nombre
                nuevoArray.push(nombres)
                
            });
        }
    }
    
    let usuario = new Usuario('Gerardo', 'Hernandez', [{nombre: 'Desde mi jardin', autor: 'Jerzy kosinski'}, {nombre: 'El naufrago', autor: 'Gabriel Garcia Marquez'}, {nombre: 'Yo soy Dios', autor: 'Giorgio Faletti'}], ['Balu', 'Maemi'])
    
    
    
console.log(usuario.addMascota())