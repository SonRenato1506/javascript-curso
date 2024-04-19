const dia = /\d\d/

console.log(dia.test("2019") && "2019".length == 2)
console.log(dia.test("Asd"))
console.log(dia.test("05") && "05".length == 2)
console.log(dia.test("Asd1"))
console.log("--------------------------")

const palavraPeloMenosTresLetras = /\w\w\w/

console.log(palavraPeloMenosTresLetras.test("asd"))
console.log(palavraPeloMenosTresLetras.test("asdd"))
console.log(palavraPeloMenosTresLetras.test("as"))