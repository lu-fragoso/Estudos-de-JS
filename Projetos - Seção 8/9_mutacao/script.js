let pessoa = {
    nome: 'lucas'
}

let pessoa2 = pessoa
let pessoa3 = {
    nome: 'lucas'
}

console.log(pessoa == pessoa2)
console.log(pessoa3 == pessoa)
console.log(pessoa3 == pessoa2)

pessoa2.nome = 'pedro'  // quando altera um altera ambos

console.log(pessoa.nome)

pessoa.nome = 'maria'  // quando altera um altera ambos

console.log(pessoa2.nome)