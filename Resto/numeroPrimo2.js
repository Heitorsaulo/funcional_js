const primo = (num) => (divisor = num - 1) =>{
    if(divisor == 1) return "primo"
    else if(num % divisor != 0) return primo(num)(divisor-1)
}