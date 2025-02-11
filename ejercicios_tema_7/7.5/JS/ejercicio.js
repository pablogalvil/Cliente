let deck = [];
        let playerHand = [];
        let dealerHand = [];
        let gameOver = false;

        function createDeck() {
            const values = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5];
            const names = ["As", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Sota", "Caballo", "Rey"];
            deck = [];
            for (let i = 0; i < values.length; i++) {
                deck.push({ name: names[i], value: values[i] });
            }
            deck = shuffle(deck.concat(deck));
        }

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        function getHandValue(hand) {
            return hand.reduce((acc, card) => acc + card.value, 0);
        }

        function hit() {
            if (gameOver) return;

            let card = deck.pop();
            playerHand.push(card);
            updateUI();

            let score = getHandValue(playerHand);
            if (score > 7.5) {
                endGame("💀 Te pasaste. ¡Pierdes!");
            }
        }

        function stand() {
            if (gameOver) return;

            let playerScore = getHandValue(playerHand);
            dealerTurn(playerScore);
        }

        function dealerTurn(playerScore) {
            dealerHand = [];
            let dealerScore = 0;

            while (dealerScore <= playerScore) {
                let card = deck.pop();
                dealerHand.push(card);
                dealerScore = getHandValue(dealerHand);
            }

            setTimeout(() => {
                if (dealerScore > 7.5 || dealerScore < playerScore) {
                    endGame("🎉 ¡Ganaste! La banca tenía " + dealerScore);
                } else if (dealerScore === playerScore && playerScore === 7.5) {
                    endGame("🤝 ¡Empate! Ambos tienen 7.5");
                } else {
                    endGame("😔 Perdiste. La banca tenía " + dealerScore);
                }
            }, 1000);
        }

        function endGame(message) {
            document.getElementById("message").innerText = message;
            gameOver = true;
            document.querySelector(".btn-hit").style.display = "none";
            document.querySelector(".btn-stand").style.display = "none";
            document.querySelector(".btn-restart").style.display = "inline-block";
        }

        function restart() {
            createDeck();
            playerHand = [];
            dealerHand = [];
            gameOver = false;
            document.querySelector(".btn-hit").style.display = "inline-block";
            document.querySelector(".btn-stand").style.display = "inline-block";
            document.querySelector(".btn-restart").style.display = "none";
            document.getElementById("message").innerText = "";
            updateUI();
        }

        function updateUI() {
            document.getElementById("player-cards").innerText = "Cartas: " + playerHand.map(c => c.name).join(", ");
            document.getElementById("player-score").innerText = "Puntuación: " + getHandValue(playerHand);
        }

        restart();