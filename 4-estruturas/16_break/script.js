let nome = "Renato"

for (c = 0; c < 10; c++) {
    if(c == 3) {
        nome = "João"
    }
    if(c == 5 && nome == "João") {
        console.log("O nome é João pode parar")
        break;
    }

    console.log(c)
}