const calcularVelocidade = (x)=> (t) =>{
    const x0 = 500
    const t0 = 0

    return (x - x0)/(t-t0)
}

const x = 1400
const t = 40

const exec = (f,x,y) => f(x)(y)

console.log(exec(calcularVelocidade,x,t))