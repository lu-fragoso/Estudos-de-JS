let y = 5 

const multilplicar = function (a,b) {
    let y = a * b;

    console.log(y); // escopo da função

    if (y > 10) {
        
        let y = 0; 

        console.log(y) // escopo do if dentro da função
    }
}

console.log(y) // escopo global

multilplicar(4,3)