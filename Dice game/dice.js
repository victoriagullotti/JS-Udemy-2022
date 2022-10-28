function diceRoll() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/dice" + num1 + ".png")
    document.querySelector(".img2").setAttribute("src", "./images/dice" + num2 + ".png")

    if (num1 > num2) {
        document.querySelector("h1").textContent = "Player One Won!!!"
    }
    else if (num1 < num2) {
        document.querySelector("h1").textContent = "Player Two Won!!!"
    }
    else {
        document.querySelector("h1").textContent = "You draw!!!"
    }
}

diceRoll();
