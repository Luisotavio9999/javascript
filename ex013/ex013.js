function novo(){
    
var nome1 = document.getElementById("nome1").value

var meses = (parseInt(Math.random() * 13) + 1)
        switch (meses) {
            case 1:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você pode se casar no mês de Janeiro  </br>`
                break
            case 2:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você não vai se casar no mês de fevereiro </br>`
                break
            case 3:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você pode se casar no mês de março </br>`
                break
            case 4:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você não vai se casar no mês de abril </br>`
                break 
            case 5:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você pode se casar no mês de maio </br>`
                break
            case 6:
                document.getElementById("senha").innerHTML +=
            `<br> ${nome1}, você não vai se casar no mês de junho </br>`
                break
            case 7:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você pode se casar no mês de julho </br>`
                break 
            case 8:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você não vai se casar no mês de agosto </br>`
                break 
            case 9:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você pode se casar no mês de setembro </br>`
                break
            case 10:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você não vai se casar no mês de outubro </br>`
                break
            case 11:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você pode se casar no mês de novembro </br>`
                break 
            case 12:
                document.getElementById("senha").innerHTML =
            `<br> ${nome1}, você não vai se casar no mês de dezembro </br>`
                break 

            default:
                document.getElementById("senha").innerHTML =
                `${nome1}, você não vai se casar`
        }
    }