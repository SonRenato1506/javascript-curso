function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
}

Cachorro.prototype.uivar = function() {
    console.log("AUUUUUUU")

}
Cachorro.prototype.latir = function() {
    console.log("Au au")
}

let Cid = new Cachorro("Yorkshire", 4, "preto")

Cid.uivar()
Cid.latir()