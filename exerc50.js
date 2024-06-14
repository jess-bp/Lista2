/*Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema. 
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica. 
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis. 
○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos. 
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel. */

const prompt = require('prompt-sync')();

class Hotel {
	constructor(id, nome, cidade, quartosTotais) {
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.quartosTotais = quartosTotais;
		this.quartosDisponiveis = quartosTotais;
		this.avaliacoes = [];
	}

	adicionarAvaliacao(avaliacao) {
		this.avaliacoes.push(avaliacao);
	}

	gerarRelatorioOcupacao() {
		return {
			nome: this.nome,
			cidade: this.cidade,
			quartosTotais: this.quartosTotais,
			quartosDisponiveis: this.quartosDisponiveis,
			ocupacao:
				((this.quartosTotais - this.quartosDisponiveis) / this.quartosTotais) *
				100,
		};
	}
}

class Reserva {
	constructor(idReserva, idHotel, nomeCliente) {
		this.idReserva = idReserva;
		this.idHotel = idHotel;
		this.nomeCliente = nomeCliente;
		this.checkin = false;
		this.checkout = false;
	}

	fazerCheckin() {
		this.checkin = true;
	}

	fazerCheckout() {
		this.checkout = true;
	}
}

const hoteis = [];
const reservas = [];

let idHotelAtual = 1;
let idReservaAtual = 1;


function adicionarHotel(nome, cidade, quartosTotais) {
	const novoHotel = new Hotel(idHotelAtual++, nome, cidade, quartosTotais);
	hoteis.push(novoHotel);
	console.log(`Hotel ${nome} adicionado com sucesso.`);
}

function buscarHoteisPorCidade(cidade) {
	return hoteis.filter(
		(hotel) => hotel.cidade.toLowerCase() === cidade.toLowerCase()
	);
}

function fazerReserva(idHotel, nomeCliente) {
	const hotel = hoteis.find((h) => h.id === idHotel);
	if (!hotel) {
		console.log("Hotel não encontrado.");
		return;
	}

	if (hotel.quartosDisponiveis > 0) {
		hotel.quartosDisponiveis--;
		const novaReserva = new Reserva(idReservaAtual++, idHotel, nomeCliente);
		reservas.push(novaReserva);
		console.log(
			`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`
		);
	} else {
		console.log("Não há quartos disponíveis neste hotel.");
	}
}

function cancelarReserva(idReserva) {
	const reserva = reservas.find((r) => r.idReserva === idReserva);
	if (!reserva) {
		console.log("Reserva não encontrada.");
		return;
	}

	const hotel = hoteis.find((h) => h.id === reserva.idHotel);
	if (hotel) {
		hotel.quartosDisponiveis++;
		reservas.splice(reservas.indexOf(reserva), 1);
		console.log(`Reserva ${idReserva} cancelada com sucesso.`);
	}
}

function listarReservas() {
	reservas.forEach((reserva) => {
		const hotel = hoteis.find((h) => h.id === reserva.idHotel);
		console.log(
			`ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`
		);
	});
}

function fazerCheckin(idReserva) {
	const reserva = reservas.find((r) => r.idReserva === idReserva);
	if (reserva && !reserva.checkin) {
		reserva.fazerCheckin();
		console.log(`Check-in realizado para a reserva ${idReserva}.`);
	} else {
		console.log("Reserva não encontrada ou check-in já realizado.");
	}
}

function fazerCheckout(idReserva) {
	const reserva = reservas.find((r) => r.idReserva === idReserva);
	if (reserva && reserva.checkin && !reserva.checkout) {
		reserva.fazerCheckout();
		const hotel = hoteis.find((h) => h.id === reserva.idHotel);
		if (hotel) {
			hotel.quartosDisponiveis++;
			console.log(`Check-out realizado para a reserva ${idReserva}.`);
		}
	} else {
		console.log("Reserva não encontrada ou check-out já realizado.");
	}
}

function adicionarAvaliacao(idHotel, avaliacao) {
	const hotel = hoteis.find((h) => h.id === idHotel);
	if (hotel) {
		hotel.adicionarAvaliacao(avaliacao);
		console.log(`Avaliação adicionada ao hotel ${hotel.nome}.`);
	} else {
		console.log("Hotel não encontrado.");
	}
}

function gerarRelatorioOcupacao(idHotel) {
	const hotel = hoteis.find((h) => h.id === idHotel);
	if (hotel) {
		console.log(hotel.gerarRelatorioOcupacao());
	} else {
		console.log("Hotel não encontrado.");
	}
}


adicionarHotel("Hotel A", "São Paulo", 10);
adicionarHotel("Hotel B", "Rio de Janeiro", 5);
adicionarHotel("Hotel C", "São Paulo", 7);

console.log(buscarHoteisPorCidade("São Paulo"));

fazerReserva(1, "Cliente 1");
fazerReserva(1, "Cliente 2");
fazerReserva(2, "Cliente 3");

listarReservas();

cancelarReserva(2);

listarReservas();

fazerCheckin(1);
fazerCheckout(1);

adicionarAvaliacao(1, "Excelente serviço!");
gerarRelatorioOcupacao(1);