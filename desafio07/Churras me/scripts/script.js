// Carne - 400/200 gr por pessoa   + de 6 horas - 650/325
// Cerveja - 1200/600 ml por Pessoa + 6 horas - 2000/1000 ml
// Refrigerante/agua - 1000/500 ml por pessoa + 6 horas 1500/750 ml
// 1 lata de cerveja tem 375 ml

// Crianças valem por 0,5
var carne
var cerveja
var bebidas



function calculando() {
    let adultos = document.getElementById("dadosAdultos")
    let criancas = document.getElementById("dadosCrianças")
    let duracao = document.getElementById("dadosHora")
    let res = document.getElementById("res")

    let adultos01 = Number.parseInt(adultos.value)
    let criancas01 = Number.parseInt(criancas.value)
    let duracao01 = Number(duracao.value)



    if (adultos.value.length == 0 && criancas.value.length == 0) {
        alert("[ERRO] Digite um valor nas duas caixas de texto")

    } else if (duracao01 >= 6) {
        carne = adultos01 * 650 + criancas01 * 325
        cerveja = (adultos01 * 2000 + criancas01 * 1000) / 355
        bebidas = adultos01 * 1500 + criancas01 * 750

        res.innerText = `${carne}  ${Math.ceil(cerveja)} ${bebidas}`

    } else if (adultos01 > 0 && criancas01 > 0) {
        carne = adultos01 * 400 + criancas01 * 200
        cerveja = (adultos01 * 1200) / 355
        bebidas = (adultos01 * 1000 + criancas01 * 500) / 2000

        if (bebidas > 500) {
            res.innerHTML = `${carne}  ${Math.ceil(cerveja)} ${Math.ceil(bebidas)} pet´s 2l de Bebidas`
        } else {
            res.innerHTML = `${carne}  ${Math.ceil(cerveja)} ${Math.ceil(bebidas)} pet´s 2l de Bebidas`
        }

    } else if (adultos01 > 0) {
        carne = adultos01 * 400
        cerveja = (adultos01 * 1200) / 355
        bebidas = adultos01 * 1000

        res.innerText = `${carne}  ${Math.ceil(cerveja)} ${bebidas}`

    } else if (criancas01 > 0) {
        carne = criancas01 * 200
        cerveja = (criancas01 * 600) / 355
        bebidas = criancas01 * 500

        res.innerText = `${carne}  ${Math.ceil(cerveja)} ${bebidas}`
    }


}