const lista = ['maria','claudio','carla','patricia','carlos','jorge']

const ultimoNome = (l) =>{
    const index = l.indexOf(l[l.length-1])
    const ultimo = l[index]
    console.log(ultimo)
}

const penultimoNome = (l) =>{
    const index = l.indexOf(l[l.length-2])
    const ultimo = l[index]
    console.log(ultimo)
}
ultimoNome(lista)
penultimoNome(lista)
