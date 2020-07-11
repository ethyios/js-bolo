const campo_peso = document.querySelector('.pesoBolo').textContent;
const campo_preco = document.querySelector('.precoBolo').textContent;
const subir = document.querySelector('.calcular');
const resposta = document.querySelector('.resposta');

function calcular() {
	let int_peso = parseInt(campo_peso);
	let float_preco = parseFloat(campo_preco);

	let result = (int_peso * float_preco) / 1000;
	console.log(result);
	console.log(campo_peso);
	console.log(campo_preco);
}

subir.addEventListener('click', calcular);
