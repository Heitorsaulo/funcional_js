const inverte = (p) => {
    if(p.length == 1) return p
    else{
        return p[p.length-1] + inverte(p.substring(0, p.length -1))
    } 
   
}
console.log(inverte("white-ferrari"))