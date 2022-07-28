const numeros = [1,10,15,20,25]
const nomes = ["Kagome", "Inuyasha","Kikyou"]
const misto = ["Game of Thrones", 4, false]

const numerosCopia = [1,10,15,20,25]
numerosCopia.push(30)
const nomesCopia = ["Kagome", "Inuyasha","Kikyou"]
nomesCopia.pop("Kikyou")
const mistoCopia = ["Game of Thrones", 4, false]
mistoCopia.splice(2,1)

console.log("Primeira Array original", numeros, "Primeira Array copia", numerosCopia)
console.log("Segunda Array original", nomes, "Segunda Array copia", nomesCopia)
console.log("Terceiro Array original", misto, "Terceiro Array copia", mistoCopia)




