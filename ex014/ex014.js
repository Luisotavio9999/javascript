function sortear() {
    document.getElementById("senha").innerHTML = ""  
    
    var num = 1

    while (num <= 6) 
    {
        var numero = (parseInt(Math.random() * 60) + 1)
        document.getElementById("senha").innerHTML +=` ${numero} `
        num ++
    }
}