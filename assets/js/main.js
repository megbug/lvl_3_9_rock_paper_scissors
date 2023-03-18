const form = document.querySelector('#form');
let roundsDisplay = document.querySelector('#roundScore');
let radioBtnValue = document.querySelector('input[name="rounds"]:checked');
let resultText = document.querySelector('#resultTextform');
let roundsPlayed = 0;
let scoreMe = 0;
let scoreCom = 0;
let score = document.querySelector('#score');

score.innerHTML = scoreMe + " : " + scoreCom;

const gamePlay = (userChoice) => {
    console.log(userChoice);

    radioBtnValue = document.querySelector('input[name="rounds"]:checked').value;
    
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)]; 

    if (roundsPlayed < radioBtnValue) {
        roundsPlayed++        

        switch (userChoice + computerChoice) {
            case "ScissorsScissors":
            case "PaperPaper":
            case "RockRock":
                console.log("this is a tie");
                resultText.innerHTML = userChoice + computerChoice;
                break;
            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                console.log("user wins");
                resultText.innerHTML = userChoice + computerChoice;
                scoreMe++;
                score.innerHTML = scoreMe + " : " + scoreCom;
                break;
            case "ScissorsRock":
            case "PaperScissors":
            case "RockPaper":
                console.log("com wins");
                resultText.innerHTML = userChoice + computerChoice;
                scoreCom++
                score.innerHTML = scoreMe + " : " + scoreCom;
                break;
        };
    
        if (roundsPlayed == radioBtnValue && scoreMe > scoreCom) {
            resultText.innerHTML = "You win!"
        }   else if (roundsPlayed == radioBtnValue && scoreMe < scoreCom) {
            resultText.innerHTML = "Computer win!"
        }   else if (roundsPlayed == radioBtnValue && scoreMe == scoreCom) {
            resultText.innerHTML = "It's a tie. Nobody wins. Go home...or play again"
        }
    } 
    
    form.style.display = 'none';
    roundScore.innerHTML = roundsPlayed + "/" +  radioBtnValue;

    console.log("com " + computerChoice);
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


/*

Radio Buttons Anzahl Runden festlegen 

onclick gibt value für loop wie häufig gespielt wird 

Anzeige springt zu Ablauf der Runden 1 / X; sobald icon geklickt wird 

*/ 

/*

Zählerstand User/Computer ändert sich nur bei Gewinn oder Niederlage 
result from switch case 

gewähltes icon blinkt grün bei Gewinn und Rot bei Niederlage, grau bei Unentschieden 
Ausgabe Result in Textform während des ongoing spiels

Ausgabe Result in Textform am Ende 

*/

// restart

// ===================================================================





    // console.log(choices[0]);
    
    // const computerChoice = choices.map();

    // if (computerChoice[0] == Math.floor(Math.random()*3)) {
    //     console.log("Hallo");

    // } else if (computerChoice[1] == Math.random()) {
        
    //     console.log("Ciao");
    // } else if (computerChoice[2] == Math.random()) {
    //     console.log("Hi again");
    // }
        




    // console.log(user());

//     let computer = (Math.floor(Math.random()*3))
//         
// }




/*

*/


/*
    rock beats scissors
    scissors beats paper
    paper beats rock 


    if user rock & com scissors => win user 

    if user scissors & 


*/