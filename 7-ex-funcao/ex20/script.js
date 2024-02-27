function autoEscola (idade) {
    if (idade >= 18) {
        return "Pode entrar na alto escola"
    } else {
        return "Você precisa ter no minimo 18 anos para entrar na auto escola"
    }
}

console.log(autoEscola(19))
console.log(autoEscola(18))
console.log(autoEscola(17))
console.log(autoEscola(-20))