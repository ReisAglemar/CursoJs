

const informação = []

function inputValor() {

    let valor = document.querySelector("#valores").value
    let resultado = document.querySelector("#resultado")
    let valorTratado = parseFloat(valor)


    if (valorTratado > 100 || valorTratado < 0) {

        alert("Os valores inseridos devêm estar em 0 e 100!")

    } else {

        informação.push(valorTratado)
        resultado.innerHTML = (`Os dados informados até o momento são;<br> ${informação}`)

    }

    document.querySelector("#valores").value = ""
    document.querySelector("#valores").focus()
    

}


/*
--------------------------------------
CHECK POINT VÁLIDO
--------------------------------------
*/


function tratarDados() {

    let tratarDados = document.querySelector('#tratarDados')
    let somaArray = 0
    let valorMaximo = Math.max(...informação)
    let valorMinimo = Math.min(...informação)


    if (informação.length == 0) {

        alert("Primeiro insira os dados!")

    } else {

        tratarDados.innerHTML = (` Existem <strong>${informação.length}</strong> dados<br>`)
        tratarDados.innerHTML += (`Dados organizados: <strong>${informação.sort()}</strong><br>`)
        tratarDados.innerHTML += (`O primeiro dado é: <strong>${informação[0]}</strong><br>`)
        tratarDados.innerHTML += (`O último dado é: <strong>${informação[informação.length - 1]}</strong><br>`)

        for (soma in informação) {

            somaArray += informação[soma]

        }

        tratarDados.innerHTML += (`A soma dos dados é: <strong>${somaArray}</strong><br>`)
        //tratarDados.innerHTML += (`O daddo mais repetido é: <strong>${informação}</strong><br>`)//FALTA FAZER
        tratarDados.innerHTML += (`O menor dado é: <strong>${valorMinimo}</strong><br>`)
        tratarDados.innerHTML += (`O maior dado é: <strong>${valorMaximo}</strong><br>`)

        let mediaArray = (somaArray / informação.length)

        tratarDados.innerHTML += (`A média dos dados é: <strong>${mediaArray}</strong><br>`)

    }

}