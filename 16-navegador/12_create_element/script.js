let lista = document.createElement('ul')

for (i = 0; i < 5; i++) {
    let item = document.createElement('li')
    let texto = document.createTextNode("texto lista " + (i+1))

    lista.appendChild(item)

    item.appendChild(texto)
}

let container = document.querySelector("#container-principal")

container.appendChild(lista)