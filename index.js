import './index.html'

const campo_peso = document.getElementById("f-quant-bolo").innerText;
const campo_preco = document.getElementById("f-preco-kg").innerText;

function calcular() {
    let int_peso = parseInt(campo_peso);
    let float_preco = parseFloat(campo_preco);

    let result = int_peso*float_preco/1000;
    alert(result);
}

document.getElementById('calcular').onclick(calcular());