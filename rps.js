const rpsValues = {
    "rock": 1,
    "paper": 2,
    "scissor": 3
};

const rpsList = ["rock", "paper", "scissor"]

var rockBtn = document.getElementById("rock")
var paperBtn = document.getElementById("paper")
var scissorBtn = document.getElementById("scissor")
var btnDiv = document.getElementById("btn");

var userSelect

userValue = document.createElement("h3");
computerValue = document.createElement("h3");
resultDeclaration = document.createElement("h2");

document.getElementById("btn").addEventListener("click", function (e) {
    if (e.target && e.target.matches("button")) {

        userSelect = e.target.id
        var computerSelect = Math.floor(Math.random() * 3) + 1

        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true

        console.log(userSelect)

        var winner = playGame(userSelect, computerSelect)

        rockBtn.disabled = false
        paperBtn.disabled = false
        scissorBtn.disabled = false



        userValue.textContent = "User selected: " + userSelect
        computerValue.textContent = "Computer selected: " + rpsList[computerSelect - 1]

        document.body.appendChild(userValue);
        document.body.appendChild(computerValue);


        if (winner !== "Tie") {
            resultDeclaration.textContent = winner + " wins!"
        } else {
            resultDeclaration.textContent = "It's a tie!"
        }
        document.body.appendChild(resultDeclaration);
    }
})

// var userSelect = parseInt(process.argv[2]);
function playGame(userSelect, computerSelect) {
    var winner = ""

    if ((userSelect === "rock" && computerSelect === rpsValues.scissor) ||
        (userSelect === "scissor" && computerSelect === rpsValues.paper) ||
        (userSelect === "paper" && computerSelect === rpsValues.rock)) {
        winner = "User"
    } else if (rpsValues[userSelect] === computerSelect) {
        winner = "Tie"
    } else {
        winner = "Computer";
    }
    console.log(winner);
    return winner;
}