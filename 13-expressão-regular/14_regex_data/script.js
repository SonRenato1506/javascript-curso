const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/

console.log(validarDataNasc.test("15/06/2008"))
console.log(validarDataNasc.test("15/06/200"))
console.log(validarDataNasc.test("15/35/200"))