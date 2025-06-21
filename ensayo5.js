function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function esPesoSaludable(imc) {
    if (imc > 18.5 && imc < 24.9) {
        return true;
    }
    else {
        return false;
    }
}

function evaluarSalud(peso, altura) {
    const imc = calcularIMC(peso, altura);
    

    const altura1 = esPesoSaludable(imc);
    

    alert("su IMC: " + imc.toFixed(2) + ", peso saludable: " + altura1);
}
const peso = parseInt(prompt("digite su peso en kilogramos:"));
const altura = parseFloat(prompt("digite su altura en metros:"));
evaluarSalud(peso, altura);