const collatz = (num) =>{
    if(num <= 1) return 0
    else if(num % 2 == 0) return collatz(num/2)+1 
    else return collatz((num*3)+1)+1
}
console.log(collatz(10))