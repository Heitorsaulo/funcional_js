const primo = (num) => (divisor = num) =>{
    if(divisor == 0) return 0
    else{
        if(num % divisor) return primo(num)(divisor-1)
        else{ 
        return 1 + primo(num)(divisor-1)
    }
}
}

const check = (number) =>{
    if(primo(number)() <= 2) return "primo"
    else return "nao primo"
}
console.log(check(17))