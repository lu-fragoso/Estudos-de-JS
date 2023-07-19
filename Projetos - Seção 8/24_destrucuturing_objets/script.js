let obj = {
    rodas: 4,
    portas: 2,
    direcao: 'Elétrica',
    velocidadeMax: 160,
    motor: "1.0"
}

const {"rodas": vRodas, "portas": vPortas, "direcao": vDirecao, "velocidadeMax": vVelocidadeMax, "motor": vMotor} = obj

console.log(vDirecao)
console.log(vRodas)
console.log(vPortas)
console.log(vVelocidadeMax)
console.log(vMotor)

// metodo de criação de variaveis com propriedades de objetos de maneira diferente