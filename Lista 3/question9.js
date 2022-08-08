const xor = (x,y) => {
    return (x || y) && !(x && y)
}

const v1 = true
const v2 = false

console.log(`${v1} ⊗ ${v2} = ${xor(v1,v2)}.`)