const inverte = (p) => {
    if(p.length == 1) return p
    else{
        return p[p.length-1] + inverte(p.substring(0, p.length -1))
    } 
   
}

const palindromo = (str) => (strInversa = inverte(str)) =>{
    return (str.toUpperCase() == strInversa.toUpperCase()) ? true:false
}
console.log(palindromo("Tenet")())