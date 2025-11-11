// Variáveis globais para armazenar o estado do jogo
let capital = 0;
let aposta = 0;
let jogoAtivo = false;

// Função para iniciar o jogo (equivalente ao input inicial em Python)
function startGame() {
    const initialCapitalInput = document.getElementById('initial-capital');
    const betAmountInput = document.getElementById('bet-amount');

    capital = parseInt(initialCapitalInput.value);
    aposta = parseInt(betAmountInput.value);

    // Validação básica
    if (isNaN(capital) || capital <= 0 || isNaN(aposta) || aposta <= 0 || aposta > capital) {
        alert("Valores inválidos. Capital e Aposta devem ser números positivos e Aposta <= Capital.");
        return;
    }

    // Atualiza a interface
    document.getElementById('capital-display').textContent = capital;
    document.getElementById('aposta-display').textContent = aposta;
    document.getElementById('game-setup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('message-area').textContent = 'Jogo iniciado!';
    jogoAtivo = true;
}

// Função para jogar uma rodada (o núcleo do loop 'while' em Python)
function playRound() {
    if (!jogoAtivo) {
        alert("Inicie o jogo primeiro.");
        return;
    }

    // 1. Checagem de Capital (condição de parada)
    if (capital < aposta) {
        document.getElementById('message-area').textContent = "💰 Seu capital não é suficiente para a próxima aposta. Fim do jogo.";
        endGame();
        return;
    }

    const userGuessInput = document.getElementById('user-guess');
    let y = parseInt(userGuessInput.value);

    // Validação do palpite
    if (isNaN(y) || y < 0 || y > 10) {
        document.getElementById('message-area').textContent = "Palpite inválido. Digite um número de 0 a 10.";
        return;
    }

    // 2. Sorteio do número (random.randint(0, 10) em Python)
    let x = Math.floor(Math.random() * 11); // Gera inteiro entre 0 e 10

    // 3. Lógica do Jogo
    if (y === x) {
        document.getElementById('message-area').textContent = '🎉 TIGRINHO SOLTOU CARTINHA!! Você ganhou!';
        capital += aposta;
    } else {
        document.getElementById('message-area').textContent = `❌ Você errou!! O número certo era: ${x}`;
        capital -= aposta;
    }

    // 4. Feedback e atualização da interface
    document.getElementById('capital-display').textContent = capital;
    userGuessInput.value = ''; // Limpa o campo de palpite
}

// Função para encerrar o jogo (o 'n' ou 'N' no input de python)
function endGame() {
    jogoAtivo = false;
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('final-message').textContent = `Você ficou com ${capital} reais. Obrigado por jogar!`;
}