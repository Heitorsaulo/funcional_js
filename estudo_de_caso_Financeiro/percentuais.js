//Percentuais
const percentualValor = (taxa) => (valor)=>{
    return (taxa/100)*valor
}

const aumentoPercentual = (taxa) => (valor) =>{
    return percentualValor(taxa)(valor)+valor
}

const descontePercentual = (taxa) => (valor)=>{
    return valor-percentualValor(taxa)(valor)
}

const margemVenda = (taxa) => (custo) =>{
    return custo/(1-(taxa/100))
} 

const variacaoPercentual = (valorInicial) => (valorFinal) =>{
    return 100*(valorFinal/valorInicial - 1)
}

const relacaoPercentual = (valor1) => (valor2) =>{
    return (valor1/valor2)
}
