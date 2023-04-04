function test(){
    var loc = document.querySelector('#naci')
    var loc1 = loc.value
    var loc2 = loc1.toUpperCase()
    var res = document.querySelector('#naciRes')
  
        
    if (loc2 == "BRASIL"){        
       res.innerHTML = (`Você nasceu no <strong>${loc1[0].toUpperCase()}${loc1.substring(1)},</strong> 
       então você é brasileiro`)
    }
    else{
        res.innerHTML = (`Você nasceu no <strong>${loc1[0].toUpperCase()}${loc1.substring(1)},</strong> então você é estrangeiro`)
    }
}

