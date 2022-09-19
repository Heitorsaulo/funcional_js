


const sumtf = (lista = Array.from({length: 1000}, (_v, k) => k)) =>{
    const finallist = lista.filter((x) => x % 3 == 0 || x % 5 == 0)
    const somar = (acc, x) => acc + x
    return finallist.reduce(somar,0)
}

console.log(sumtf())
