let n = 1
let n2 = 137


function somar(n, n2) {
    return n + n2
}


function dividir(n, n2) {
    return n / n2
}


function multiplicar(n, n2) {
    return n * n2
}


function subtrair(n, n2) {
    return n - n2
}


let executar = [somar(n, n2), dividir(n, n2), multiplicar(n, n2), subtrair(n, n2)]


for (resultado in executar) {
    console.log(executar[resultado])
}


