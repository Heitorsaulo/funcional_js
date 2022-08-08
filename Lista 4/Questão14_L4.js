const repita = (p,r) =>{
    if(r == 1) return p
    else return p + repita(p, r-1)
}
console.log(repita("Gimmelove", 3))