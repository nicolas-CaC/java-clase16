const primerArray = ['Pepe', 'Juan', 2, 434, true]
const segundoArray = ['Walter', 'Meza', false, null, undefined]

// const copio = segundoArray[1]
// console.log(copio)

// primerArray[0] = 'Jose Luis'
// console.log(primerArray)
console.clear();

const concatenando = primerArray.concat(segundoArray)
// console.log(concatenando)

const includes = primerArray.includes(434)
// console.log(includes)

const unir = primerArray.join('/')
// console.log(unir)

const separar = unir.split('/')
// console.log(separar)

const indice = primerArray.indexOf('Juan')
// console.log(indice)
// console.log('primerArray con el índice del IndefOf:', primerArray[indice])

const intercambiar = primerArray.fill('MARIAJUANAMACARENA', 2)
const intercambiarDos = segundoArray.fill('PEPE', 1, 3)
// console.log(intercambiar)
// console.log(intercambiarDos)

const nuevoArray = ['a', 'b', 'c', 'd', 'e', 'f']
// nuevoArray.push('G')
nuevoArray.push('G', 'HHH')
// console.log(nuevoArray)

nuevoArray.pop()
// console.log(nuevoArray)

nuevoArray.shift()
// console.log(nuevoArray)

nuevoArray.unshift('AAA')
nuevoArray.unshift('CERO', 'unito')
console.log(nuevoArray)

const extraccion = nuevoArray.slice(2, 6)
// console.log(extraccion)

nuevoArray.reverse()
// console.log(nuevoArray)

nuevoArray.splice(2, 0, 'Juancho', 'Bebeto')
// console.log(nuevoArray)

nuevoArray.splice(5, 3)
// console.log(nuevoArray)
console.clear()

const tercerArray = [1, 2, 3, 4, 2, 3, 4, 3, ['Mamu', 'Papu']]
// console.log(tercerArray)

const aplanar = tercerArray.flat()
console.log(aplanar)
// console.log(aplanar[9])

const esUnArray = Array.isArray(tercerArray)
// console.log(esUnArray)

const frase = 'La emoción de ganar debe ser mayor al miedo de perder'
// console.log(frase[8])

const segmentacion = Array.from(frase)
console.log(segmentacion)

