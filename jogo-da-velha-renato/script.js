let jogador = document.querySelector("h2")
let v1 = document.getElementById("v1")
let v2 = document.getElementById("v2")
let scorej1 = 0
let scorej2 = 0
let q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let vez = 1;
let i = 0;


function VerificarVitoria() {
    if ((q[1] == q[2] && q[1] == q[3] && q[1] != 0) ||
        (q[1] == q[5] && q[1] == q[9] && q[1] != 0) ||
        (q[1] == q[4] && q[1] == q[7] && q[1] != 0)) {
        return q[1];
    } else if ((q[2] == q[5] && q[2] == q[8] && q[2] != 0)) {
        return q[2];
    } else if ((q[4] == q[5] && q[4] == q[6] && q[4] != 0)) {
        return q[4];
    } else if ((q[7] == q[8] && q[7] == q[9] && q[7] != 0) ||
        (q[7] == q[5] && q[7] == q[3] && q[7] != 0)) {
        return q[7];
    } else if ((q[3] == q[6] && q[3] == q[9] && q[3] != 0)) {
        return q[3];
    }  else {
        i = 0;
        for (let c = 1; c < 10; c++) {
            if (q[c] > 0) {
                i++
            }
        }
        if (i == 9) {
            alert('Deu velha')
            reiniciar()
        } else {
            return 0
        }

    }
}

function AlterarJogador(player) {
    if (player == 1) {
        jogador.textContent = "Jogador: 1"
        jogador.style.color = "rgb(0, 0, 145)"
        vez = 1;
    } else if (player == 2) {
        jogador.textContent = "Jogador: 2"
        jogador.style.color = "rgb(145, 0, 0)"
        vez = 2;
    }
}

function AlterarVitorias(x, y) {
    v1.textContent = `Jogador 1: ${x} vitórias`
    v2.textContent = `Jogador 2: ${y} vitórias`
}

function evento() {
    if (VerificarVitoria() > 0) {
        alert(`Jogador ${VerificarVitoria()}° venceu`)
        if (VerificarVitoria() == 1) {
            scorej1++;
        } else if (VerificarVitoria() == 2) {
            scorej2++
        }
        AlterarVitorias(scorej1, scorej2)
        reiniciar()
    }
}

function reiniciar() {
    noroeste.textContent = ""
    norte.textContent = ""
    nordeste.textContent = ""
    suldoeste.textContent = ""
    sul.textContent = ""
    suldeste.textContent = ""
    oeste.textContent = ""
    centro.textContent = ""
    leste.textContent = ""

    for (let s = 0; s < 10; s++) {
        q[s] = 0
    }
}


let noroeste = document.getElementById("noroeste")
Xnoroeste = 0
let norte = document.getElementById("norte")
Xnorte = 0
let nordeste = document.getElementById("nordeste")
Xnordeste = 0
let oeste = document.getElementById("oeste")
Xoeste = 0
let centro = document.getElementById("centro")
Xcentro = 0
let leste = document.getElementById("leste")
Xleste = 0
let suldoeste = document.getElementById("suldoeste")
Xsuldoeste = 0
let sul = document.getElementById("sul")
Xsul = 0
let suldeste = document.getElementById("suldeste")
Xsuldeste = 0

noroeste.addEventListener("click", () => {
    if (q[1] == 0) {
        if (vez == 1) {
            noroeste.textContent = 'X'
            q[1] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            noroeste.textContent = "O"
            q[1] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

norte.addEventListener("click", () => {
    if (q[2] == 0) {
        if (vez == 1) {
            norte.textContent = 'X'
            q[2] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            norte.textContent = "O"
            q[2] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

nordeste.addEventListener("click", () => {
    if (q[3] == 0) {
        if (vez == 1) {
            nordeste.textContent = 'X'
            q[3] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            nordeste.textContent = "O"
            q[3] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

oeste.addEventListener("click", () => {
    if (q[4] == 0) {
        if (vez == 1) {
            oeste.textContent = 'X'
            q[4] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            oeste.textContent = "O"
            q[4] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

centro.addEventListener("click", () => {
    if (q[5] == 0) {
        if (vez == 1) {
            centro.textContent = 'X'
            q[5] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            centro.textContent = "O"
            q[5] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

leste.addEventListener("click", () => {
    if (q[6] == 0) {
        if (vez == 1) {
            leste.textContent = 'X'
            q[6] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            leste.textContent = "O"
            q[6] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

suldoeste.addEventListener("click", () => {
    if (q[7] == 0) {
        if (vez == 1) {
            suldoeste.textContent = 'X'
            q[7] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            suldoeste.textContent = "O"
            q[7] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

sul.addEventListener("click", () => {
    if (q[8] == 0) {
        if (vez == 1) {
            sul.textContent = 'X'
            q[8] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            sul.textContent = "O"
            q[8] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

suldeste.addEventListener("click", () => {
    if (q[9] == 0) {
        if (vez == 1) {
            suldeste.textContent = 'X'
            q[9] = 1
            AlterarJogador(2)
        } else if (vez == 2) {
            suldeste.textContent = "O"
            q[9] = 2
            AlterarJogador(1)
        }
    }
    console.log(q)
    evento()
})

