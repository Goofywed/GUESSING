document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const maxInput = document.getElementById("maxInput");
    const guessContainer = document.getElementById("guessContainer");
    const guessInput = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuess");
    const quitButton = document.getElementById("quitButton");
    const message = document.getElementById("message");

    let max, random;

    startButton.addEventListener("click", function() {
        max = parseInt(maxInput.value);
        random = Math.floor(Math.random() * max) + 1;
        guessContainer.style.display = "block";
    });

    submitGuessButton.addEventListener("click", function() {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess)) {
            showMessage("Please enter a valid number.");
        } else {
            if (guess === random) {
                showMessage(`You are right! Congratulations! The random number was ${random}`);
                setTimeout(resetGame, 1000); // Delay the reset for 1 second (1000 milliseconds)
            } else if (guess < random) {
                showMessage("Your guess was too small. Please try again.");
            } else {
                showMessage("Your guess is too big. Please try again!");
            }
        }
    });
    

    quitButton.addEventListener("click", function() {
        showMessage("User quit!");
        setTimeout(resetGame, 1000);
    });

    function showMessage(msg) {
        message.textContent = msg;
    }

    function resetGame() {
        maxInput.value = "";
        guessInput.value = "";
        guessContainer.style.display = "none";
        message.textContent = "";
        max = undefined;
        random = undefined;
    }
});
