const seqF = (n) =>{
    if(n == 0) return 0
    else if(n == 1) return 1
    else{return seqF(n-1)+seqF(n-2)}
}
console.log(seqF(7))