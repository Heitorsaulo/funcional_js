const somatoriaAB = (a,b) =>{
    if(a == b) return 1/b
    if(a>b) return "numero invalido para operacao"
    else return  1/a + somatoriaAB(a+1,b) 
}
console.log(somatoriaAB(1,3))