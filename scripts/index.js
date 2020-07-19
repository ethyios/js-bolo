let campoPeso = document.querySelector('.pesoBolo');
let campoPreco = document.querySelector('.precoBolo');
let campoDist = document.querySelector('.distancia');
const btCalculo = document.querySelector('.calcular');
const btCEnvio = document.querySelector('.cEnvio');
let resposta = document.querySelector('.resposta');

function calcular() {
	let peso = campoPeso.value;
	let preco = campoPreco.value;
	let dist = campoDist.value;
	let radioFrete = document.querySelectorAll('input[name="precoFrete"]');
	let result;

	for (const radio of radioFrete) {
		if (radio.checked) {
			console.log(radio.value);
			result = (peso * preco) / 1000 + dist * radio.value;
		}
	}

	resposta.innerHTML = `A resposta é ${result}`;
}

btCalculo.addEventListener('click', calcular);
