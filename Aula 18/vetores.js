/*
    USE O TERMINAL (F8) PARA UM MELHOR DETALHAMENTO 
*/


var meuDados = [10, 5, 8, 10, 11, 1, 2]

console.log("")
console.log("INÍCIO DO PRIMEIRO ESTADO DO VETOR--------------------------!")
console.log(`Vetor: ${meuDados}`)
console.log("")


for (let tamanho in meuDados) { // for especial para vetores
    console.log(`Na posição ${tamanho}, você tem o seguinte dado: ${meuDados[tamanho]}`)
}

console.log("")
console.log("FIM DO PRIMEIRO ESTADO DO VETOR--------------------------!")
console.log("")
console.log("")


//ADICIONANDO VALORES AO VETOR
console.log("")
console.log("Adiciona o 102 ao último indíce")

meuDados.push(102) //adiciona o 102 ao último indíce

console.log("")
console.log("INÍCIO DO SEGUNDO ESTADO DO VETOR--------------------------!")
console.log("")
console.log(`Vetor: ${meuDados}`)
console.log("")

for (let tamanho in meuDados) { // for especial para vetores
    console.log(`Na posição ${tamanho}, você tem o seguinte dado: ${meuDados[tamanho]}`)
}

console.log("")
console.log("102 adicionado ao último indíce")
console.log("")
console.log("FIM DO SEGUNDO ESTADO DO VETOR--------------------------!")
console.log("")
