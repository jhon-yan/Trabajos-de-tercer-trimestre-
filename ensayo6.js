function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function clasificarNota(promedio) {
    if (promedio > 3.0) {
        return 'aprobado';
    }
    else {
        return 'reprobado';
    }
}

function analizarEstudiante(n1, n2, n3) {
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let resultado = clasificarNota(promedio);

    alert("Promedio: " + promedio.toFixed(2) + "\nClasificación: " + resultado);
}
// Pedir las notas y pasar como argumentos

const nota1 = parseFloat(prompt("digite nota 1:"));
const nota2 = parseFloat(prompt("digite nota 2:"));
const nota3 = parseFloat(prompt("digite nota 3:"));

analizarEstudiante(nota1, nota2, nota3);