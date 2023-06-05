function calcular() {
    document.getElementById("senha").innerHTML = ""  

    var cont = 1

    var numero1 = Number(document.getElementById("numero1").value)

    while (cont <= 10) {
        var resul = (numero1 * cont)

        document.getElementById("senha").innerHTML +=
         `<br> ${numero1} x ${cont} = ${resul} `

         cont ++
    }



}