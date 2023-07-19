let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4

function imprimirNumeros(...args){
    for (let i = 0; i < args.length; i ++) {
        console.log(args[i])
    }
}

imprimirNumeros(num1,num2)
console.log("Troca")
imprimirNumeros(num3,num1,num4)
console.log("Troca")
imprimirNumeros(num3)
console.log("Troca")
imprimirNumeros(num1,num2,num3,num4,num1)
console.log("Troca")    
imprimirNumeros(55,112,303,23,324,22,4,0,535)



// metodo utilizado para receber x parametros e tranformar-los em um único array
// para realizar uma tratativa posteriormente

// a mesma função pode receber 1, 5 ,8, 100 paramentros e eles tratrá todos 