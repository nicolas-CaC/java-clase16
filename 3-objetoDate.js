console.clear();

const arreglo = new Array(4)
arreglo[0] = 123
arreglo[2] = 456
// console.log(arreglo)

const objeto = new Object();
// console.log(objeto)

const arregloInt8 = new Int8Array()
const arregloInt16 = new Int16Array()
const arregloInt32 = new Int32Array()
// console.log(arregloInt8)
// console.log(arregloInt16)
// console.log(arregloInt32)
// console.log(arregloInt8.BYTES_PER_ELEMENT)
// console.log(arregloInt16.BYTES_PER_ELEMENT)
// console.log(arregloInt32.BYTES_PER_ELEMENT)

//* Date

const hoy = new Date()
// console.log(hoy)

const milisegundos = new Date().getTime()
// console.log(milisegundos, 'milisegundos')

const segundos = new Date().getSeconds()
// console.log(segundos)

const minutos = new Date()
// console.log(minutos.getMinutes(), 'minutos')

const hora = new Date().getHours()
// console.log(hora, 'hs')

const dia = new Date().getDate()
// console.log(dia)

const mes = new Date().getMonth()
// console.log(mes + 1)

const anio = new Date().getFullYear()
// console.log(anio)

const fecha = new Date().toDateString()
console.log(fecha)

const fechaAqui = new Date().toLocaleString()
console.log(fechaAqui)

const fechaIso = new Date().toISOString()
console.log(fechaIso)

const fechagmt = new Date().toTimeString()
console.log(fechagmt)

const fechaCompleta = new Date().toString()
console.log(fechaCompleta)
