let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arcodicionado: true,
}


console.log(carro)

Object.assign(carro, adicionais) // adicionar 'adicionais' ao 'carro'

console.log(carro)