function multiplicarTresNumero(x,y,z) {
    return x*y*z;
}

console.log(multiplicarTresNumero(2,3,4));

const mult =  multiplicarTresNumero(5,4,8);

console.log('o valor de mult é: ' + mult);

function podeDirigir(idade, cnh) {  
    if(idade>=18 && cnh == true){
        console.log('pode dirigir');
    }else{
        console.log('não pode dirigir');
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,false));