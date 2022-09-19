const lista1 = ['carla','patricia','carlos','jorge']
const lista2 = ['patricia', 'pedro', 'claudio','jorge']

const howManyEqual = lista1.filter((element) => lista2.indexOf(element) != -1)
const finalList = howManyEqual.length

console.log(finalList)
