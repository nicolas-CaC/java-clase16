function valorTotal(valor) {
    let iva = (valor / 100) * 21
    let valorTotalProducto = valor + iva

    console.log('el precio total del producto es: $', valorTotalProducto)
}

// valorTotal(200)
// valorTotal(500)

function imprimoNada() {
    console.log('Se imprimió lo que tenía que imprimirse')
}

// imprimoNada()

function suma(a, b) {
    const suma = a + b
    console.log('La suma del primer valor y el segundo es', suma)
}

// suma(10, 5)

function mostrarNumeros(...numero) {
    console.log(numero)
}

// mostrarNumeros(1, 2, 3)
// mostrarNumeros(4, 5, 6, 4, 7, 5, 7, 6, 75)

function resta(a, b) {
    const operacion = a - b
    return operacion
}

const devolvemeLaResta = resta(10, 7)
// console.log('esto es lo que me retornó:', devolvemeLaResta)

function segundaFn() {
    return function (a, b) {
        console.log(`Los parametros son: ${a} y ${b}`)
    }
}

const a = segundaFn()
// a(1, 2)

function terceraFn() {
    let x = 0;
    return function () {
        x++;
        console.log(`soy la función retorno y el valor de mi x es: ${x}`)
    }
}

const x = terceraFn()
const y = terceraFn()

// console.log('x:')
// x()
// x()
// x()
// x()
// x()
// console.log('y:')
// y()
// console.log('x:')
// x()
// console.log('y:')
// y()



