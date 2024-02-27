function tamanho (s) {
    n = s.length
    if (n > 10) {
        return "Texto muito longo"
    } else {
        return "Texto dentro do limite"
    }
}

console.log(tamanho("Renato"))
console.log(tamanho("Renato Matos"))