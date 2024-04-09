let cachorro = {
    raca: "SRD",
    latir: function () {
        console.log("Au Au")
    }, 
    rosnar: function () {
        console.log("grrrrrr")
    },
    setRaca: function(raca) {
        this.raca = raca
    }
}

cachorro.latir()
cachorro.rosnar()

cachorro.setRaca("Pastor Alemão")
console.log(cachorro.raca)