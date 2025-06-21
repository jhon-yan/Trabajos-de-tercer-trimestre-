function obtenerSaludo(hora) {
    if (hora > 0 && hora < 12) {
        return 'buenos dias, ';
    }
    else if (hora > 12 && hora < 18) {
        return 'buenas tardes, ';
    }
    else {
        return 'buenas noches, ';
    }
}


function mostarSaludo(nombre, hora) {
    const b = obtenerSaludo(a);
    alert(b + c);
}
const a = parseInt(prompt("digite un numero entre 0 - 24"));
const c = prompt("digite su nombre");
mostarSaludo(c, a);