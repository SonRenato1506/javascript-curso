let jogador = document.querySelector("h2")
let v1 = document.getElementById("v1")
let v2 = document.getElementById("v2")

let q = [0, 2, 1, 2, 2, 1, 1, 1, 2, 1]

AlterarJogador(2)
AlterarVitorias(7, 1)
alert(`Jogador ${VerificarVitoria()}° venceu`)


function VerificarVitoria() {
    if (q[1] == q[2] && q[1] == q[3]) {
     
        return q[1]
    } else if (q[1] == q[5] && q[1] == q[9]) {
       
        return q[1]
    } else if (q[1] == q[4] && q[1] == q[7]) {
        
        return q[1]
    } else if (q[2] == q[5] && q[2] == q[8]) {
      
        return q[2]
    } else if (q[4] == q[5] && q[4] == q[6]) {
     
        return q[4]
    } else if (q[7] == q[8] && q[7] == q[9]) {

        return q[7]
    } else if (q[7] == q[5] && q[7] == q[3]) {
   
        return q[7]
    } else if (q[3] == q[6] && q[3] == q[9]) {

        return q[3]
    } else {
        alert("Velha")
        
    }
}

function AlterarJogador(player) {
    if (player == 1) {
        jogador.textContent = "Jogador: 1"
        jogador.style.color = "rgb(0, 0, 145)"
    } else if (player == 2) {
        jogador.textContent = "Jogador: 2"
        jogador.style.color = "rgb(145, 0, 0)"
    }
}

function AlterarVitorias(x, y) {
    v1.textContent = `Jogador 1: ${x} vitórias`
    v2.textContent = `Jogador 2: ${y} vitórias`
}