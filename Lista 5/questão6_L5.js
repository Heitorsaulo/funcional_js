const lista = [1,2,3,4,5,6,7,8,9,10]

const aQ = (y, x) => y+x**2
const aoQuadradoLcada = (l) => l.reduce(aQ,0)

const allQ = (y,x) => y+x
const aoQuadradoLTudo = (l) => l.reduce(allQ,0)

const resultadoAoQuadradoTudo = aoQuadradoLTudo(lista)**2

const resultadoFinal = resultadoAoQuadradoTudo-aoQuadradoLcada(lista)
console.log(resultadoAoQuadradoTudo)
console.log(resultadoFinal)