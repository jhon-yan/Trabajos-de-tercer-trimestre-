function calcularEdad(añoNacimiento) {
    let edad = 2025 - añoNacimiento;
    return edad
}


function esMayorEdad(edad) {
    if (edad >= 18) {
        return true
    }
    else {
        return false
    }
}


function analizarEdad(añoNacimiento) {
    let b = calcularEdad(añoNacimiento);
    alert(b);

    let a = esMayorEdad(edad);
    alert(a);

    if (añoNacimiento > 18) {
        alert("mayor de edad");
    }
    else {
        alert("menor de edad");
    }
}
let añoNacimiento = parseInt(prompt("digite su año de nacimiento:"));
let edad = parseInt(prompt("digite su edad:"));

let f = analizarEdad(añoNacimiento);
alert(f);