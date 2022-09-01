const arrayNumeros = [71 , 7 , 1 , 13 , 11 , 29 , 38]
//         indice      0   1   2   3    4     5    6

const arrayStrings = ["cachorro" , "gato" , "passáro" , "elefante"]
//         indice         0           1         2            3 

const arrayVariados = [81 , 7 , "girafa" , 2>1 , false ]
//         indice      0    1       2       3      4

const qtdArrayNumeros = arrayNumeros.length
console.log (`A quantidade de itens na lista de números é = ${qtdArrayNumeros}`)

const qtdArrayStrings = arrayStrings.length
console.log (`A quantidade de itens na lista de strings é = ${qtdArrayStrings}`)

const qtdArrayVariados = arrayVariados.length
console.log (`A quantidade de itens na lista de elementos variados é = ${qtdArrayVariados}`)

const primeiroitemArraynumeros = arrayNumeros.slice(0,1)
console.log (primeiroitemArraynumeros)

const segundoitemArraystrings = arrayStrings.slice(1,2)
console.log (segundoitemArraystrings)

const terceiroitemArrayvariados = arrayVariados.slice(2,3)
console.log (terceiroitemArrayvariados)

arrayNumeros.unshift(1)
console.log (arrayNumeros)
const boleanoverdade = arrayNumeros.includes(1)
console.log (boleanoverdade)

arrayVariados.unshift("camelo")
console.log (arrayVariados)
const boleanofalso = arrayVariados.includes("cegonha")
console.log (boleanofalso)


