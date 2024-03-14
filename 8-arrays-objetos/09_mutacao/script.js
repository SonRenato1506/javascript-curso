let pessoa = {
    nome: "Renato"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2)

pessoa2.nome = "Arthur"
console.log(pessoa.nome)