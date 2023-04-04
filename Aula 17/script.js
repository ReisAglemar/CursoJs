
function gerarTabuada() {

    let valorInserido = document.querySelector("#valorInserido").value
    let resultado = document.querySelector("#resultado")
    let valorMinimo = 0

    //TRATAMENTO

    let valorInseridoTratado = Number(valorInserido)

    resultado.innerHTML = ("")

    if (valorInseridoTratado <= 10) {
        valorMinimo = 10
    }

    else {
        valorMinimo = valorInseridoTratado
    }

    for (a = 0; a <= valorMinimo; a++) {
        resultado.innerHTML += (`${valorInseridoTratado} X ${a} = ${a * valorInseridoTratado}<br>`)
    }


}