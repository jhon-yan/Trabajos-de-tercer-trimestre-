function calcularBonificacion(salario) {
    return salario / 10
}


function esBonificacionAlta(bonificacion) {
    if (bonificacion > 500) {
        return true
    }
    else {
        return false
    }
}


function analizarBonificacion(salario) {
    
    let b = calcularBonificacion(a);
    alert(b);

    
    let d = esBonificacionAlta(c);
    alert(d);

    if (salario > 500) {
        alert("bonificación alta");
    }
    else {
        alert("bonificación baja")
    }
}
let a = parseInt(prompt("digite su salario:"));
let c = parseInt(prompt("digite su bonificación"));
let br = analizarBonificacion(a);
alert(br);