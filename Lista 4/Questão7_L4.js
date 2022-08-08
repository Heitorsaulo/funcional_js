const quociente = (n,m) => {
    if(n==m) return 1 
    else if(n>m) return quociente(n-m,m) + 1
}
const quocienteMenor = (n,m) => n<m ? 1/quociente(m,n):quociente(n,m)

console.log(quocienteMenor(10,5))
