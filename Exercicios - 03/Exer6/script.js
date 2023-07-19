/*function verificaTipo(tipo) {
    if (typeof(tipo) === 'String' ) {
       
        console.log(typeof(tipo))
    
    }else if(typeof(tipo) === 'Number') {
        
        console.log(typeof(tipo))
    
    }else{
        
        console.log(typeof(tipo))
    
    }
}

jeito do Lucas -> 90% correto

verificaTipo(6)
verificaTipo('lucas')
verificaTipo(true)*/


function verificaTipo(tipo) {
    if (typeof tipo === 'String' ) {
       
        console.log('aaaaa string')
    
    }else if(typeof tipo === 'Number') {
        
        console.log('number')
    
    }else{
        
        console.log('aaaa boolean')
    
    }
}

verificaTipo(6)
verificaTipo('lucas')
verificaTipo(true)

