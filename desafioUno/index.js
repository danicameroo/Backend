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

    addMascota(){
        const nueva = this.mascotas.push('miel')
        console.log(nueva)
        console.log(this.mascotas)
    }

    countMascota(){
        console.log(this.mascotas.length)
    }

    addBook(){
        const libro = this.libros.push('Yo mato');
        const autor = this.libros.push('Giorgio Faletti');
        console.log(libro)
        console.log(autor)
        console.log(this.libros)

    }

    getBookNames(){
        console.log(this.libros)
    }
}

let usuario = new Usuario('Gerardo', 'Hernandez', ['Desde mi jardin', 'El naufrago', 'Yo soy Dios'], ['Balu', 'Maemi'])



let ver= usuario.getBookNames();
console.log(ver)