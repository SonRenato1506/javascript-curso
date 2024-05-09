let btn1 = document.querySelector("#btn1")

btn1.addEventListener("mousedown", function() {
    console.log("Apertou um botão")
})

btn1.addEventListener("mouseup", function() {
    console.log("Soltou um botão")
})

btn2.addEventListener("dblclick", function() {
    console.log("Apertou 2 vzs um botão")
})

btn2.addEventListener("contextmenu", function(e) {
    console.log("Botão direito")
})