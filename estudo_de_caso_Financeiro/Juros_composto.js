const {funcaoApoioValor} = require('./Juros_simples')

const valorFuturo = (taxa) => (valorPresente) => (periodos) =>{
    return valorPresente**funcaoApoioValor(taxa)(periodos)
}

const valorPresente = (taxa) => (valorFuturo) => (periodos) =>{
    return valorFuturo**funcaoApoioValor(taxa)(periodos)
}

const taxaDeJuros = (valorPresente) => (valorFuturo) => (peridos) =>{
    return ((valorFuturo/valorPresente)**1/peridos) - 1
}

const numeroPeriodos = (valorPresente) => (valorFuturo) => (taxa) =>{
    return (Math.log(valorFuturo/valorPresente)/Math.log(1+taxa))
}

