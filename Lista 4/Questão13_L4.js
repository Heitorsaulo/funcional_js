const somaQuadrados = (num) => {
    if(num == 1) return 1
    else return num*num + somaQuadrados(num-1)
}

console.log(somaQuadrados(4))