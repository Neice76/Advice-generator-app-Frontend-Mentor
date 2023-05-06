let diceButton = document.getElementById("diceButton");
let adviceNumber = document.getElementById("adviceNumber");
let adviceText = document.getElementById("adviceText");

function ShowAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => {
        adviceNumber.innerText = `ADVICE #${data.slip.id}`;
        adviceText.innerText = `"${data.slip.advice}"`;
    })
    .catch((error) => {
        return error;
    })
}

diceButton.addEventListener("click", function() {
    ShowAdvice();
});

ShowAdvice();