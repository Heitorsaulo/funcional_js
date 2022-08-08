const somaN = (n) =>{
    if(n == 0) return 0
    else if(n == 1) return 1
    else return somaN(n-1) + n
}
console.log(somaN(7))