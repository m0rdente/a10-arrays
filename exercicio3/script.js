const numeros = [1,10,15,20,25]
const nomes = ["Kagome", "Inuyasha","Kikyou"]
const booleanos = [true, false]

const numerosCopia = [1,10,15,20,25]
numerosCopia.push(30)
const nomesCopia = ["Kagome", "Inuyasha","Kikyou"]
nomesCopia.pop("Kikyou")
const booleanosCopia = [true, false]
booleanosCopia.splice(1,1)

console.log("Primeira Array original", numeros, "\nPrimeira Array copia", numerosCopia)
console.log("Segunda Array original", nomes, "\nSegunda Array copia", nomesCopia)
console.log("Terceiro Array original", booleanos, "\nTerceiro Array copia", booleanosCopia)