let placar = document.getElementById("p1")
let placar2 = document.getElementById("p2")
let placar3 = document.getElementById("p3")
let placar4 = document.getElementById("p4")

var placar1_valor = 0
var placar2_valor = 0

function ponto(){
    placar1_valor ++
    placar.innerHTML = placar1_valor
}
function ponto2(){
    placar2_valor ++
    placar2.innerHTML = placar2_valor
}
var placar3_valor = 0
var placar4_valor = 0

function ponto3(){
    placar3_valor ++
    placar3.innerHTML = placar3_valor
}
function ponto32(){
    placar3_valor +=2
    placar3.innerHTML = placar3_valor
}
function ponto33(){
    placar3_valor +=3
    placar3.innerHTML = placar3_valor
}
function ponto4(){
    placar4_valor ++
    placar4.innerHTML = placar4_valor
}
function ponto42(){
    placar4_valor +=2
    placar4.innerHTML = placar4_valor
}
function ponto43(){
    placar4_valor +=3
    placar4.innerHTML = placar4_valor
}