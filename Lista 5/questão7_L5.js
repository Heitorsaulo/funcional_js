const primo = (num) => (divisor = num) =>{
    if(divisor == 0) return 0
    else{
        if(num % divisor) return primo(num)(divisor-1)
        else{ 
        return 1 + primo(num)(divisor-1)
    }
}
}

const listaPrimos = (n) => (lista = Array.from({length: n}, (_v, k) => k)) =>{
    return lista.filter((x) => primo(x)()<= 2)
}

console.log(listaPrimos(120)())