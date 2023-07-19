let frase = "Testando o método Split"

let numeros = '1;2;3;4;5;6;7;8;9;10'

let palavras = frase.split(" ")

let nums = numeros.split(";")

let novaFrase = palavras.join("#")

let somaNumeros = nums.join('+')

console.log(novaFrase)
console.log(somaNumeros)

// o inverso do método split
// juntas os elementos do array formando uma string com um elemento de separador 