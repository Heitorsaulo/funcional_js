const criarLista = (n) =>{
    return Array.from({length: n}, (_v, k) => k)
}

const seprarAsListas = (n) => (times) =>{
    const lista = criarLista(n+1)
    if(times == 0) return lista
    if(n == 1) return lista.push(lista[n]) + seprarAsListas(n)(times-1)
    else return lista.push(lista[n]) + seprarAsListas(n-1)(times)
}

console.log(seprarAsListas(7)(3))
seprarAsListas(7)(3)