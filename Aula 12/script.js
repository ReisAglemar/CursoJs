// o objetivo é mostrar a data e hora
// desa forma; h/m/s, dd/mm/ano, nome do dia. 

var dados = new Date()

var horas = dados.getHours()
var minutos = dados.getMinutes()
var segundos = dados.getSeconds()

var dia = dados.getDate()
var mes = dados.getMonth()
var ano = dados.getFullYear()

const dias = ["Domingo", "Segunda-Feira", "Terça-Feira",
    "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

var nomeDia = dias[dados.getDay()]

switch (mes) {

    case 0:
        mes = "Janeiro"
        break

    case 1:
        mes = "Fevereiro"
        break

    case 2:
        mes = "Março"
        break

    case 3:
        mes = "Abril"
        break

    case 4:
        mes = "Maio"
        break

    case 5:
        mes = "Junho"
        break

    case 6:
        mes = "Julho"
        break

    case 7:
        mes = "Agosto"
        break

    case 8:
        mes = "Setembro"
        break

    case 9:
        mes = "Outubro"
        break

    case 10:
        mes = "Novembro"
        break

    case 11:
        mes = "Dezembro"
        break

    default:
        mes = "[ERRO!] mês invalido!"
        break

}

console.log(`Hora exata: ${horas}:${minutos}:${segundos}`)
console.log(`Data: ${dia} de ${mes} de ${ano}`)
console.log(`Dia da semana: ${nomeDia}.`)

