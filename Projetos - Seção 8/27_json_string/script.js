let pessoa = {
    "Nome": "Lucas",
    "Idade": 20,
    "Profissão": "Programador",
    "Liguagens": ["C", "Java", "JavaScript", "Python"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
console.log(pessoaTexto.Nome)

let pessoaJson = JSON.parse(pessoaTexto)

console.log(pessoaJson)
console.log(pessoaJson.Liguagens[0])


// conversão de Json para String
// e vice - versa