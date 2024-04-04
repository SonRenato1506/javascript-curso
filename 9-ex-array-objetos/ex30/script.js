nomes = ["Arthur", "Márcio", "Mônica", "Renato", "Pingo"]

for(c = 0; c < nomes.length; c++) {
    if(nomes[c] == "arthur") {
        console.log(`O nome ${nomes[c]} está na posição ${c}`)
        break
    } else if(c == nomes.length) {
        console.log(`Não tem esse nome na lista`)
    }
    
}