function imprimirNumeros (...args) {
    for(let i = 0; i< args.length; i++)  {
        console.log(args[i])
    }
}

imprimirNumeros(true, 66, "Oi")