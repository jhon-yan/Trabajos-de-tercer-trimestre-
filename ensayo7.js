function calcularExceso(velocidad, limite) {
    return velocidad - limite;
}


function aplicaMulta(exceso) {
    if (exceso > 10) {
        return true
    }
    else {
        return false
    }
}


function verificarMulta(velocidad, limite) {
    const exceso = calcularExceso(a1, b1);
    alert(exceso);

    const resultado = aplicaMulta(exceso);
    alert(resultado);

    if (velocidad > limite) {
        alert("tienes multa");
    }
    else {
        alert("no tienes multa");
    }
}
const a1 = parseInt(prompt("digite su velocidad:"));
const b1 = parseInt(prompt("digite su limite:"));
verificarMulta(a1, b1);