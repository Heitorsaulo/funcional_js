const caminhos = (num) =>{
    if(num == 1) return 1
    else{
        return caminhos(num-1,)*num
    }
}
console.log(caminhos(5))

