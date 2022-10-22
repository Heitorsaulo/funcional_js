const {range} = require('./utils.js')
const conta = (alg) => (n1) => (n2)=>{
    const lista = range(n1,n2)
    const elementosParaString = lista.map((x)=>x.toString())
    const concatenarString = elementosParaString.reduce((acc,x)=>acc+x,'')
    const separarindividualmente = concatenarString.split('')
    const arrayDosAlgarismos = separarindividualmente.filter((x)=> x == alg)
  
    return arrayDosAlgarismos.length
}
console.log(conta(9)(1)(99))

// Elementos da lista são mutáveis, apesar do uso do const
const lista1 = [3, 1, 7, 9, 4, 6]
console.log(`Mutavel lista: ${lista1}`)

const lista2 = lista1.sort((a,b)=>a-b)
console.log(`lista (ordenada): ${lista2}`)

console.log(`lista (original): ${lista1}`)

// Corrigindo com cópia do elemento
const lista3 = [3, 1, 7, 9, 4, 6]
console.log(`Imutavel lista: ${lista3}`)

const lista4 = [...lista3].sort((a,b)=>a-b)
console.log(`lista ordenada: ${lista4}`)

console.log(`lista (original): ${lista3}`)