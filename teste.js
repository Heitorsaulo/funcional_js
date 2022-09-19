const prompt = require('prompt-sync')()

const n = prompt('size of the array: ')
const lista = [prompt('elements of the array: ')]

const sum = (acc, x) => acc+x
const somaLista = (l) => l.reduce(sum,0)

console.log(somaLista(lista))
