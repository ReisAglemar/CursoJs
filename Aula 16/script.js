
function gerarPA() {

    let primeiroTermo = document.querySelector("#primeiroTermo").value
    let ultimoTermo = document.querySelector("#ultimoTermo").value
    let razao = document.querySelector("#razao").value
    let resultado = document.querySelector("#resultado")


    //TRATAMENTO DE DADOS 

    let primeiroTermoTratado = parseFloat(primeiroTermo)
    let ultimoTermoTratado = parseFloat(ultimoTermo)
    let razaoTratada = parseFloat(razao)


    /*check point
    ----------------------------------------
    console.log("entrou na função")
    console.log(primeiroTermo)
    console.log(ultimoTermo)
    console.log(razao)
    console.log(typeof (primeiroTermoTratado))
    console.log(typeof (ultimoTermoTratado))
    console.log(typeof (razaoTratada))
    resultado.innerHTML = ("resultado")
    ----------------------------------------
    */


    if (primeiroTermo == "") {
        resultado.innerHTML = ("Revise os dados! <strong>PRIMEIRO TERMO</strong> inválido")
    }

    else if (ultimoTermo == "") {
        resultado.innerHTML = ("Revise os dados! <strong>ÚLTIMO TERMO</strong> inválido")
    }

    else if (razao == "" || razao == 0) {
        resultado.innerHTML = ("Revise os dados! <strong>RAZÃO</strong> inválida")
    }

    else {

        resultado.innerHTML = ("<strong>A progressão gerada é:</strong><br><br>")


        for (let a = primeiroTermoTratado; a >= ultimoTermoTratado; a -= razaoTratada) {
            resultado.innerHTML += (`${a}, `)
        }


        for (let a = primeiroTermoTratado; a <= ultimoTermoTratado; a += razaoTratada) {
            resultado.innerHTML += (`${a}, `)
        }

        resultado.innerHTML += (`<br><br>FIM!`)
    }






}
