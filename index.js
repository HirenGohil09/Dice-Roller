function rollDice() {

    const numOfDice = Number(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    // if (!Number.isInteger(numOfDice) || numOfDice < 1 || numOfDice > 100) {
    //     diceResult.textContent = "Please enter a number between 1 and 100.";
    //     diceImages.innerHTML = "";
    //     return;
    // }

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);

        images.push(`<img src="dice_images/${value}.png" alt="Dice showing ${value}" width="70" height="70">`);
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
