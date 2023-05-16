let x = 10

if (x > 5){
    let x  = 20;
    x++;
    console.log(x);//escopo do if -> vai pegar 21
}

console.log(x) //escopo global ->  vai pegar 10