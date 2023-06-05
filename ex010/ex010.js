function login(){
    var nome = (document.getElementById("nome2").value)
    var nome3 =(document.getElementById("nome4").value)
    
    if (nome == "adm" && nome3 == "123") 
    {      
            document.getElementById("senha").innerHTML = 
            `<br> <b class="sim"> parabens ${nome}, você acessar o sistema. </b>
            <br>`
        }
         else {  
            document.getElementById("senha").innerHTML = 
            `<br>  <b class="nao"> infelismente ${nome} você não pode acessar o site
            <br>` 
    }
    }