function multiplicar(a, b) {
    return a*b;
}


function dobleProducto(a,b) {
    return (a*b) * 2
}


function mostrarResultados(a, b) {
    const c = multiplicar(a1, b1);
    alert(c);

    const d = dobleProducto(a1, b1);
    alert(d);
}
const a1 = parseInt(prompt("digite un numero:"));
const b1 = parseInt(prompt("digite un segundo numero:"));
mostrarResultados(a1, b1);