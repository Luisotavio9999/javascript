function calcular() {
    document.getElementById("senha").innerHTML = ""  

    for (var cont = 1; cont <= 20; cont ++) {
        var resul = (1 * cont)

        if (resul % 2 != 0)
        document.getElementById("senha").innerHTML +=
         `${resul} `  
    }
}