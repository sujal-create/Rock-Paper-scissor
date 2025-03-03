document.addEventListener("DOMContentLoaded", function() {
    let userScore = 0;
    let computerScore = 0;
    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userscorepara = document.querySelector("#userscore");
    const compscorepara = document.querySelector("#compscore");

    const gencompchoice = () => {
        const options = ["rock", "paper", "scissors"]; 
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const drawgame = (compchoice) => {
        msg.innerText = "Game was a draw. Play again! As you both chooses " + compchoice;
        msg.style.backgroundColor = "rgb(7, 7, 46)";
    };

    const showWinner = (userwin, userchoice, compchoice) => {
        if (userwin) {
            userScore++;
            userscorepara.innerText = userScore;
            msg.innerText = "You Win, As Computer chooses " + compchoice;
            msg.style.backgroundColor = "green";
        } else {
            computerScore++;
            compscorepara.innerText = computerScore;
            msg.innerText = "You lose, As Computer chooses " + compchoice;
            msg.style.backgroundColor = "red";
        }
    };

    const playgame = (userchoice) => {
        console.log("user choice ", userchoice);
        const compchoice = gencompchoice();
        console.log("computer choice", compchoice);

        if (userchoice === compchoice) {
            drawgame(compchoice); // Pass compchoice here
        } else {
            let userwin = true;
            if (userchoice === "rock") {
                userwin = compchoice === "paper" ? false : true;
            } else if (userchoice === "paper") {
                userwin = compchoice === "scissors" ? false : true;
            } else {
                userwin = compchoice === "rock" ? false : true;
            }
            showWinner(userwin, userchoice, compchoice);
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            playgame(userchoice);
        });
    });
});