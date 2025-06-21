function esPar(numero) {
    if (numero %2 == 0) {
        return true
    }
    else {
        return false
    }
}

function evaluarNumero(numero) {
    let a = esPar(numero);
    let b = a ? " es par, " : " es imapar, "
    console.log(a);
    alert(`${b}. el número es: ${a}`);
}
let c = parseInt(prompt("digite su numero:"));
let d = evaluarNumero(c);
alert(d);