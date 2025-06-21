function calcularDescuento(precio, porcentaje) {
    return precio - (precio * (porcentaje / 100))
}

function esDescuentoalto(porcentaje) {
    if (porcentaje > 30) {
        return true
    }
    else {
        return false
    }
}

function verificarDescuento(precio, porcentaje) {
    let a = calcularDescuento(precio, porcentaje);
    let b = esDescuentoalto(porcentaje);

    let c = b ? "descuento alto, " : "descuento bajo, ";
    alert(c + " nuevo precio = " + a);
}

let precio = parseInt(prompt("digite su precio:"));
let porcentaje = parseInt(prompt("digite su porcentaje:"));

let f = verificarDescuento(precio, porcentaje);
alert(f);