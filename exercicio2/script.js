const numeros = [1,10,15,20,25]
const nomes = ["Kagome", "Inuyasha","Kikyou"]
const misto = ["Game of Thrones", 4, false]

console.log("Quantidade de arrays na primeira", numeros.length)
console.log("Quantidade de arrays na segunda", nomes.length)
console.log("Quantidade de arrays na terceira", misto.length)
console.log("Primeiro item do primeiro array", numeros[0])
console.log("Segundo item do segundo array", nomes[2])
console.log("Terceiro item do terceiro array", misto[2])
console.log("Informação verdadeira primeiro Array", numeros.includes(1))
console.log("Informação falsa terceiro Array", misto.includes(5))
