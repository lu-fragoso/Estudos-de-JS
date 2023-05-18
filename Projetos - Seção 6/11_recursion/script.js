function recusao(n) {
    if(n-1 < 2 ){
        console.log('parou')
    }else if( n %2 !=0){
        console.log('numero impar ' + n)
        recusao(n-1)
    }else{
        console.log('numero par ' + n)
        recusao(n-2)
    }
}

recusao(2)
recusao(8)
recusao(5)