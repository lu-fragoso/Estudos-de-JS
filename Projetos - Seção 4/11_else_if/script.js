let nome = 'lucas', idade = 20;

//entra no if
if(nome!=undefined){
    console.log('nome não definido')
}else if(nome=='lucas' && nome.length>4){
    console.log('o nome é lucas')
}else{
    console.log('seu nome não é lucas')
}

//entra no else if
if(nome!=undefined && nome == 'joao'){
    console.log('nome não definido')
}else if(nome == 'lucas'){
    console.log('o nome é lucas')
}else{
    console.log('seu nome não é lucas')
}


//entra no else
if(nome!=undefined && nome == 'joao'){
    console.log('nome não definido')
}else if(nome =='lucas'&& nome.length>4 && idade == 212){
    console.log('o nome é lucas')
}else{
    console.log('seu nome não é lucas')
}

