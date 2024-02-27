function tipo (x) {
    if (typeof(x) ==  "number") {
        return "Number"
    } else if (typeof(x) == "boolean") {
        return "Boolean"
    } else {
        return "String"
    }
}

console.log(tipo(17))
console.log(tipo(false))
console.log(tipo("17 false"))