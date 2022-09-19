const funcaoApoioValor = (taxa) => (periodos)=>{
    return 1+(taxa/100)*periodos
}

const valorFuturo = (taxa) => (valorPresente) => (periodos)=>{
   return valorPresente*funcaoApoioValor(taxa)(periodos)
}

const valorPresente = (taxa) => (valorFuturo) => (periodos)=>{
    return valorFuturo*funcaoApoioValor(taxa)(periodos)
}

const taxaDeJuros = (valorPresente) => (valorFuturo) => (periodos) =>{
    return (valorFuturo-valorPresente)/(valorPresente*periodos)
}

const numeroDePeriodos = (valorPresente) => (valorFuturo) => (taxa) =>{
    return (valorFuturo-valorPresente)/(valorPresente*taxa)
}