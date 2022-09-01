const arrayNumeros = [0 , 7 , 13 , 29 , 38]

const arrayStrings = ["cachorro" , "gato" , "elefante"]

const arrayVariados = [81 , 7 , "girafa" , 2>1 , false ]


// - Adicione um item `number` ao primeiro array. 
// Utilize `console.log()` para exibir o original e a cópia;

const primeiroArray = arrayNumeros.slice()
primeiroArray.push(3)

console.log ("A Array de números original é = ", arrayNumeros)
console.log ("A Array de números cópia é = " , primeiroArray)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const segundaArray = arrayStrings.slice()
arrayStrings.pop()
console.log ("A Array de strings original é = ", segundaArray)
console.log ("A Array de strings cópia é = ", arrayStrings)


// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const terceiroArray = arrayVariados.slice()

console.log ("A Array de itens variados original é = " , terceiroArray)

terceiroArray.splice(1,1)

console.log ("A Array de itens variados cópia é = ", terceiroArray)
