
function idade() {
    let dados = new Date()// informações de datas
    let anos = dados.getFullYear()// apenas o anos
    let nascimento = document.querySelector("#idade").value// input html
    let idade = anos - nascimento // tratamento (ano atual - ano nascimento)
    let radio = document.getElementsByName("genero")
    let genero = ""
    let res = document.querySelector("#res")
    let img = document.querySelector("#img")


    if (nascimento <= 0 || nascimento >= anos) {
        window.alert("ERRO! Revise os dados inseridos, ano inválido")
    }
    else {

        if (radio[0].checked) {
            genero = "homem"
            res.innerHTML = (`Você é <strong>${genero}</strong>, 
            e tem <strong>${idade}</strong> anos de idade`)

            if (idade <= 10) {
                img.src = "images/criancamas.png"
            }

            if (idade > 10 && idade <= 40) {
                img.src = "images/adultomas.png"
            }

            if (idade > 40) {
                img.src = "images/idosomas.png"
            }
        }

        if (radio[1].checked) {
            genero = "mulher"
            res.innerHTML = (`Você é <strong>${genero}</strong>, 
            e tem <strong>${idade}</strong> anos de idade`)

            if (idade <= 10) {
                img.src = "images/criancafem.png"
            }

            if (idade > 10 && idade <= 40) {
                img.src = "images/adultafem.png"
            }

            if (idade > 40) {
                img.src = "images/idosafem.png"
            }
        }
    }
}

