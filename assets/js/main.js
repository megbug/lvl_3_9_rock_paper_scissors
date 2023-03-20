const form = document.querySelector('#form');
let radioBtnValue = document.querySelector('input[name="rounds"]:checked');
let roundsDisplay = document.querySelector('#roundScore');
let resultText = document.querySelector('#resultTextform');

let roundsPlayed = 0;
let scoreMe = 0;
let scoreCom = 0;

let score = document.querySelector('#score');
score.innerHTML = scoreMe + " : " + scoreCom;

const gamePlay = (userChoice) => {

    radioBtnValue = document.querySelector('input[name="rounds"]:checked').value;
    
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)]; 

    if (roundsPlayed < radioBtnValue) {
        roundsPlayed++        

        switch (userChoice + computerChoice) {
            case "ScissorsScissors":
            case "PaperPaper":
            case "RockRock":
                resultText.innerHTML = "Both of you choose " + computerChoice + ". So it's a tie!";
                document.querySelector('#'+ userChoice).style.animation = "pulsatingColorGrey 1s ease-out"
                break;
            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                resultText.innerHTML = " You choose " + userChoice + " and that beats " + computerChoice + ". You win!";
                document.querySelector('#'+ userChoice).style.animation = "pulsatingColorGreen 1s ease-out"
                scoreMe++;
                score.innerHTML = scoreMe + " : " + scoreCom;
                break;
            case "ScissorsRock":
            case "PaperScissors":
            case "RockPaper":
                resultText.innerHTML = " The computer choose " + computerChoice + " and that beats " + userChoice + ". You lose!";
                document.querySelector('#'+ userChoice).style.animation = "pulsatingColorRed 1s ease-out"
                scoreCom++
                score.innerHTML = scoreMe + " : " + scoreCom;
                break;
        };
    
        if (roundsPlayed == radioBtnValue && scoreMe > scoreCom) {
            resultText.innerHTML = "You're a winner!"
        }   
        else if (roundsPlayed == radioBtnValue && scoreMe < scoreCom) {
            resultText.innerHTML = "You're a loser!"
        }   
        else if (roundsPlayed == radioBtnValue && scoreMe == scoreCom) {
            resultText.innerHTML = "It's a tie. Nobody wins. Go home...Or play again"
        }
    } 
    
    form.style.display = 'none';
    roundsDisplay.style.display = 'flex'
    roundScore.innerHTML = roundsPlayed + " / " +  radioBtnValue;
}

const playRock = () => {
    gamePlay("Rock");
}

const playPaper = () => {
    gamePlay("Paper");
}

const playScissors = () => {
    gamePlay("Scissors");
}

// ===================================================================
/*

Radio Buttons Anzahl Runden festlegen 

onclick gibt value für loop wie häufig gespielt wird 

Anzeige springt zu Ablauf der Runden 1 / X; sobald icon geklickt wird 


Zählerstand User/Computer ändert sich nur bei Gewinn oder Niederlage 
result from switch case 

gewähltes icon blinkt grün bei Gewinn und Rot bei Niederlage, grau bei Unentschieden 
Ausgabe Result in Textform während des ongoing spiels

Ausgabe Result in Textform am Ende 

restart
*/
