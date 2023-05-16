let nome = 'lucas';

for (let i = 0; i <20; i = i+1){
    
    if( i == 3 ){
        nome = 'matheus';
    }
    
    if(i == 5 && nome == 'matheus'){
        console.log('matheus saiu do loop');
        break;
    }
    console.log(i)
}