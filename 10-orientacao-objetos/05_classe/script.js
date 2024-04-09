let cachorro = {
    raca: "SRD",
    patas: 4,
    latir: function () {
        console.log("Au Au")
    }
}

let cid = Object.create(cachorro)

cid.latir()
cid.raca = "YorkShire"

console.log(cid.raca)
console.log(cachorro.raca)

let pingo = Object.create(cachorro)
pingo.raca = "Dalmata"
console.log(pingo.raca)