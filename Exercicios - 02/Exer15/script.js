let num = 1
/* tentaiva falha de resolver

if (num%1 == 0 && num % num == 0) {
    if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
        console.log(`${num} não é primo`);
    }else{
        console.log(`${num} é um número primo`)
    }
}*/

let divisoes = 0
for(let i = 1; i <=num; i++){
    if(num%i == 0){
        divisoes ++
    }
}

if (divisoes == 2) {
    console.log(`o numero ${num} é primo`)
}else{
    console.log(`o numero ${num} não é primo`)
}