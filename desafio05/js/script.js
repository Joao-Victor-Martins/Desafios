

function coverdolar() {
    var realC = document.getElementById("real")
    var dolarC = document.getElementById("dolar")
    var res = document.getElementById("resultado")

    var real = parseFloat(realC.value)
    var dolar = parseFloat(dolarC.value)

    if (real <= 0) {
        window.alert("[ERRO!] Os dados devem está preenchidos. Tente novamente!")
    } else {
        dolar = 4.74
        var cover = real * dolar
        var covertotal = cover.toLocaleString("pt-br", { style: "currency", currency: "USD" })

        res.innerText = covertotal
    }
}

function covereuro() {
    var realC = document.getElementById("real")
    var euroC = document.getElementById("euro")
    var res = document.getElementById("resultado")

    var real = parseFloat(realC.value)
    var euro = parseFloat(euroC.value)

    if (real <= 0) {
        window.alert("[ERRO!] Os dados devem está preenchidos. Tente novamente!")
    } else {
        euro = 5.23
        var cover = real * euro
        var covertotal = cover.toLocaleString("pt-br", { style: "currency", currency: "EUR" })

        res.innerText = covertotal
    }
}

function coveryen() {
    var realC = document.getElementById("real")
    var yenC = document.getElementById("yen")
    var res = document.getElementById("resultado")

    var real = parseFloat(realC.value)
    var yen = parseFloat(yenC.value)

    if (real <= 0) {
        window.alert("[ERRO!] Os dados devem está preenchidos. Tente novamente!")
    } else {
        yen = 0.039
        var cover = real * yen
        var covertotal = cover.toFixed(3).replace(".",",").toLocaleString("pt-br", { style: "currency", currency: "JPY" })

        res.innerText = `¥ ${covertotal}`
    }
}