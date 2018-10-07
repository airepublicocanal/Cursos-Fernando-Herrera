function sumar(a = 1, b = 2) {
    console.log(arguments);
}

sumar();
sumar(1, 2, 5, "Fernando", { a: 3, b: 4 });