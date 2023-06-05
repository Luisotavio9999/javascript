function calcular() {
    document.getElementById("senha").innerHTML = ""  

    var numero1 = Number(document.getElementById("numero1").value)

    for (var cont = 1; cont <= 10; cont ++) {
        var resul = (numero1 * cont)

        document.getElementById("senha").innerHTML +=
         `<br> ${numero1} x ${cont} = ${resul} `

        
    }



}