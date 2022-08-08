const numX = 3
const numY = 2
const numZ = 5

lowerValue = (x,y,z) => (f) =>{
    const wIsLowXY = (x>y) ? y : x
    f(wIsLowXY,z)
}

const compValues = lowerValue(numX, numY, numZ)

compValues((XorY, z) => WIsLower = (XorY > z) ? z : XorY)

console.log(WIsLower)