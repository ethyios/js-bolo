let campoPeso = document.querySelector('.pesoBolo');
let campoPreco = document.querySelector('.precoBolo');
let campoDist = document.querySelector('.distancia');
const btCalculo = document.querySelector('.calcular');
const btCEnvio = document.querySelector('.cEnvio');
let resposta = document.querySelector('.resposta');
let radioFrete = [
	document.getElementsByClassName('0'),
	document.getElementsByClassName('05'),
	document.getElementsByClassName('1'),
	document.getElementsByClassName('15'),
	document.getElementsByClassName('2'),
];

function calcular() {
	let peso = campoPeso.value;
	let preco = campoPreco.value;

	const result = (peso * preco) / 1000;

	resposta.innerHTML = `A resposta é ${result}`;
	for (let index = 0; index < radioFrete.length; index++) {
		console.log(`${radioFrete[index].checked}`);
	}
}

function comEnvio() {
	let peso = campoPeso.value;
	let preco = campoPreco.value;
	let dist = campoDist.value;

	const result = (peso * preco) / 1000;

	resposta.innerHTML = `A resposta é ${result}`;
}

btCalculo.addEventListener('click', calcular);
