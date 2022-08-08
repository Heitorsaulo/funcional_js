const restoD = (n,m) => n<m ? n : restoD(n-m,m)
console.log(restoD(27,8))