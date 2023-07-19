let idade = 17
let cnh = false

if (idade>=18 && cnh == true) {
    console.log('Possui CNH e tem 18 anos')
}else if(idade>=18 && cnh == false ){
    console.log('Não possui CNH e tem 18 anos')
}else{
    console.log('Não possui CNH e não tem 18 anos')
}