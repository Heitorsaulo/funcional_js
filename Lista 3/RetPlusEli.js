const l1 = 6.7
const l2 = 3.5
const r1 = 2.3
const r2 = 6.4

const elipse = (x, y) => x*y*3.14
const retangulo = (x, y) => x*y
const somaf = (x, y) => x+y

const exec = (f,x,y) => f(x,y)


const a1 = exec(elipse, r1,r2)
const a2 = exec(retangulo, l1,l2)

const soma = somaf(a1, a2)

console.log(soma)