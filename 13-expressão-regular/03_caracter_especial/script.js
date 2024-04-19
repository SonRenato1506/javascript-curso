/*
\d - Qualquer dígito de caractere
\w - Um caractere alfanumérico ("teste")
\s - Qualquer caractere de espaço em braco
\D - Caracteres que não são dígitos
\W - Caractere não-alfanumérico
\S - Caracatere que não seja espaço em branco
.  - QUalquer caractere, menos nova linha
*/ 

const pontoRegex = /./

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test("  "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))
console.log("------")

const dRegex = /\d/

console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123sad"))
console.log("------")

const DRegex = /\D/

console.log(DRegex.test("asd"))
console.log(DRegex.test(" "))
console.log(DRegex.test("123"))
console.log(DRegex.test("123sad"))
console.log("------")

const wRegex = /\w/

console.log(wRegex.test("asd"))
console.log(wRegex.test(" "))
console.log(wRegex.test("123"))
console.log(wRegex.test("123sad"))
console.log("------")

const WRegex = /\W/

console.log(WRegex.test("asd"))
console.log(WRegex.test(" "))
console.log(WRegex.test("123"))
console.log(WRegex.test("123sad"))
console.log("------")

const sRegex = /\s/

console.log(sRegex.test("asd"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("123sad"))
console.log("------")

const SRegex = /\S/

console.log(SRegex.test("asd"))
console.log(SRegex.test(" "))
console.log(SRegex.test("123"))
console.log(SRegex.test("123sad"))
console.log("------")