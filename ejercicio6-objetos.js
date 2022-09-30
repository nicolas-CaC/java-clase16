console.clear()

const objeto = {}
// console.log(objeto)

objeto.clave = 'Este es su valor'
// console.log(objeto)

objeto.numero = 2
// console.log(objeto)

// objeto = 2
// console.log(objeto)

const juan = {
    nombre: 'Juan',
    brazos: 2,
    piernas: 2,
    colorOjos: 'negro',
    colorPelo: 'castaño',
    usaZapatos: true
}

const susana = {
    nombre: 'Susana',
    brazos: 2,
    piernas: 2,
    colorOjos: 'azules',
    colorPelo: 'rubio',
    usaZapatos: false
}

// console.log(juan)
// console.log(susana)

// console.log(`Juan tiene ${juan.brazos} brazos, ${juan.piernas} piernas y tiene el cabello de color ${juan.colorPelo}`)

const personas = [juan, susana]
// console.log(personas)

// console.log(personas[1])
// console.log(`La primera persona se llama ${personas[0].nombre} y la segunda se llama ${personas[1].nombre}`)

const perros = [
    {
        nombre: 'Pichicho',
        edad: 4,
        raza: 'Akita Inu'
    },
    {
        nombre: 'Bobby',
        edad: 2,
        raza: 'Corgi'
    }
]

// console.log(perros)
// console.log(`El primer perro es de raza ${perros[0].raza}`)
// console.log(`La suma de las edades de los perros es de ${perros[0].edad + perros[1].edad} años`)

const color1 = 'Bordeaux'
const color2 = 'Amarillo'

const siFunciona = true
const noFunciona = false

const lampara = {
    color: color2,
    funciona: siFunciona
}

// console.log(lampara)

const contacto = {
    calle: 'Siempre Viva',
    altura: 123,
    timbre: true,
    telefono: {
        fijo: 44441234,
        celular: 1512344321
    },
    nombre: 'Pepe',
    apellido: 'Perez',
    emails: ['pepito@shimeil.com', 'perez@shaju.com', 'pepeperez@outluk.com']
}

const Math = {

}

// console.log(contacto)
console.log(`El email principal de ${contacto.nombre} \nes ${contacto.emails[0]}, \nsino comunicarse al teléfono celular ${contacto.telefono.celular}`)