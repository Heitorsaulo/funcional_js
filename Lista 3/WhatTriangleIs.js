const canBeTriangule = (x) => (y) => (z) => {
    const somaXY = x+y
    const somaXZ = x+z
    const somaYZ = y+z
    return (somaXY > z && somaXZ > y && somaYZ > x)
}

const whatTriangule = (l1, l2, l3) =>{
    const iguaisXYZ = l1==l2 && l2==l3
    const difXYZ = l1!=l2 && l1!=l3 && l2!=l3
    if (iguaisXYZ) return 'Equilátero'
    else if (difXYZ) return 'Escaleno'
    else return 'Isósceles'
    
}


if(canBeTriangule(l1,l2,l3)){
console.log(whatTriangule(4,4,4))
}
else{
    console.log("não é triangulo")
}
