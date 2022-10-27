const vogais = (str) =>{
    const [x, ...xs] = str
    if(str.length == 0){
        return 0
    }
    else if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
        return 1 + vogais(xs)
    }
    else{
        return vogais(xs)
    }
}

console.log(vogais("Heitor"))