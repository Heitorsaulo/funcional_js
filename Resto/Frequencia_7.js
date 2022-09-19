const nimpar = (n) =>{
    if(n===1) return 1
    else return nimpar(n-1)+2
}
console.log(nimpar(8))