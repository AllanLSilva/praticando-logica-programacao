let quantidadeJogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // aqui o jogo é devolvido
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        alert('O jogo foi devolvido!');
        botao.classList.remove('dashboard__item__button--return');
    } else {
        // aqui o jogo é alugado
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        alert('O jogo foi alugado!');
        botao.classList.add('dashboard__item__button--return');
        // e seu contador é incrementado e exibido apenas no console
        quantidadeJogosAlugados++;
        console.log(`Total de jogos alugados: ${quantidadeJogosAlugados}`);
    }

}

