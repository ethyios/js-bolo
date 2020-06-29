function calcular() {
  let spreco = document.getElementById("f-preco-kg").innerHTML;
  let preco = parseInt(spreco);
  let squant = document.getElementById("f-quant-bolo").innerHTML;
  let quant = parseFloat(squant);


  let result = preco*quant/1000;
  alert(`O resultado é ${result}`);
}
