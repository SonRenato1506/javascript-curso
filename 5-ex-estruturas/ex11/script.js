var idade = 25
var cnh = true 

if(idade >= 18 && cnh == false) {
    console.log("Não pode dirigir, você não tem CNH!")
} else if(idade >= 18 && cnh == true) {
    console.log("Pode dirigir!")
} else {
    console.log("Não pode dirigir, você é menor de idade!")
}