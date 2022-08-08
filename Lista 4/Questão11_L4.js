const multisoma = (num,n = 10) =>{
    
    if(n == 0) return 0 
    else return num*n + multisoma(num,n-1)

}
console.log(multisoma(33))