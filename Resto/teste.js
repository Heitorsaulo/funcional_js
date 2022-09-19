const min = (a,b,c) => a(c) < b(c) ? a : b
console.log(min((x) => x**3, (y) => y*3)(7))