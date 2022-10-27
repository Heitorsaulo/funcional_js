const triangulo = (x,y,z) => (f) => {

    const somaXY = x + y
    const somaYZ = y + z
    const somaXZ = x + z

    f(somaXY,somaYZ,somaXZ)
}

const t1 = triangulo(1,1,3)

t1((xy, yz, xz) =>{ if(xy < l3 || yz < l1 || xz < l2){
    console.log(`os valores ${l1} ${l2} ${l3} nao podem formar um triangulo`)
}
else{
    console.log(`os valores do triangulo sao ${l1} ${l2} ${l3}`)
}
})