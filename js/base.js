function aumentar(elemento, ceros = true) {

    var contador = parseInt(elemento.innerText) + 1;
    console.log(contador);
    var texto = contador;
    if (ceros && contador < 10) {
        texto = '0' + contador;
    }
    elemento.innerText = texto;
}

function cambio(elemento) {
    var tiempo = document.querySelector('#tiempo');
    tiempo.innerText = elemento.value;
}