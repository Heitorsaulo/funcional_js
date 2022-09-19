const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const conteudo = fs.readFileSync(caminho)

const lista = conteudo.toString()

const listaPorPalavra = lista.split(' ')

const listaFiltrada = listaPorPalavra.filter((x) => x=="porco" ? x:null)

console.log(listaFiltrada)

