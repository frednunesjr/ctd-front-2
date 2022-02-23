let resultadoDiv = document.getElementById("resultado");
let resetarBtn = document.getElementById("resetar");
let opcao = document.getElementsByClassName("opcao");

const jokenpo = (escolha) => {
    let usuario = parseInt(escolha.value, 10);
    let computador = parseInt(Math.random() * 3 + 1, 10);
    console.log('Usuário', usuario);
    console.log('Computador', computador);

    let opcoes = {
        1: 'Pedra 🪨',
        2: 'Papel 📜',
        3: 'Tesoura ✂️'
    }

    let placar = {
        vitoria: "Vitoria 😁",
        derrota: "Derrota 😭",
        empate: "Empate 😑"
    }

    let resultado;
    let err = "Não foi possível encontrar um resultado.";

    switch (usuario) {
        case 1:
            computador == 1 ? resultado = placar.empate  : false;
            computador == 2 ? resultado = placar.derrota : false;
            computador == 3 ? resultado = placar.vitoria : false;
            break;

        case 2:
            computador == 1 ? resultado = placar.vitoria : false;
            computador == 2 ? resultado = placar.empate  : false;
            computador == 3 ? resultado = placar.derrota : false;
            break;

        case 3:
            computador == 1 ? resultado = placar.derrota : false;
            computador == 2 ? resultado = placar.vitoria : false;
            computador == 3 ? resultado = placar.empate  : false;
            break;
            
        default:
            resultado = err;
            break;
    }
    for(item of opcao) {
        item.setAttribute('disabled', true);
    }
    resultadoDiv.innerText = `Usuário: ${opcoes[usuario]}\nComputador: ${opcoes[computador]}\n${resultado}`;
    resetarBtn.classList.remove('d-none');
}

const resetar = () => {
    for(item of opcao) {
        item.removeAttribute('disabled');
    }
    resultadoDiv.innerText = 'Aguardando escolha...';
    resetarBtn.classList.add('d-none');
}