let y =10

//Exemplo para definir que variaveis dentro e fora de funções são independentes

function imprimir() {
    let y = 150;
    console.log(y)
}

imprimir();

console.log(y)