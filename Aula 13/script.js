
function test(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#img")
    var dados = new Date()
    var horas = dados.getHours()
    var minutos = dados.getMinutes()

   if (horas>=0 && horas<= 12){
    msg.innerHTML = (`Bom Dia! Agora são ${horas}:${minutos}`)
    img.src = "images/manha.png"
    document.body.style.background = "#eab48e"
   }
   else if(horas>=13 && horas<=18){
    msg.innerHTML = (`Bom Tarde! Agora são ${horas}:${minutos}`)
    img.src = "images/tarde.png"
    document.body.style.background = "#479e74"
   }
   else{
    msg.innerHTML = (`Bom Noite! Agora são ${horas}:${minutos}`)
    img.src = "images/noite.png"
    document.body.style.background = "#313131"
   }

}