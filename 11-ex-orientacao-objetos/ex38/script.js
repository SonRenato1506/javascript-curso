class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    mRua(x) {
        this.rua = x
    } 

    mBairro(x) {
        this.bairro = x
    } 

    mCidade(x) {
        this.cidade = x
    }

    mEstado(x) {
        this.estado = x
    }
}

let RenatoCasa = new Endereco("Antonio Alves Arantes", "Jardim Castelo", "Santos", "São Paulo")
console.log(RenatoCasa)
RenatoCasa.mRua("Monkey d Luffy")
RenatoCasa.mBairro("BaroqueWorks")
console.log(RenatoCasa)
RenatoCasa.mCidade("Alubarna")
RenatoCasa.mEstado("Alabasta")
console.log(RenatoCasa)