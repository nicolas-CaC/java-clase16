//* Math

let random = Math.random()
// console.log(random)

let max = 10
let decimal = random * max
// console.log(decimal)

let entero = Math.floor(decimal)
// console.log(entero)

let min = 5
let minmax = Math.floor(random * (max - min + 1)) + min
// console.log(minmax)

const PI = Math.PI
// console.log(PI)

let redondeoBajo = Math.floor(PI)
let redondeoMasProximo = Math.round(3.6)
let redondeoAlto = Math.ceil(PI)

// console.log(redondeoBajo)
// console.log(redondeoMasProximo)
// console.log(redondeoAlto)

// console.log(9 ** .5)

const cuadrado = Math.sqrt(25)
// console.log(cuadrado)

const cubica = Math.cbrt(27)
// console.log(cubica)

let base = 5
let exponente = 3
const potencia = Math.pow(base, exponente)
// console.log(potencia)
