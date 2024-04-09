function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function () {
        console.log("AUuuuu")
    }
}

let cid = new Cachorro("YorkShire", 4, "preto")

cid.uivar()
console.log(cid)
