// My Dice Game
let rollButton = document.getElementById('myButton');
let score = document.getElementById('number');
let randomNumber = 0;
let diceImage = document.getElementById('diceImage')
let winningNumber = 21;
let losingNumber = 1;
let playerScore = 0;
const generateNumber = () => {
    randomNumber = Math.floor(Math.random() * (6) + 1);
    console.log(randomNumber);
     
}

rollButton.addEventListener('click', () => {
    generateNumber();
    score.textContent += randomNumber 
    if(randomNumber == 1) {
        playerScore = 0;
        console.log("You lose");
    }
    else if (playerScore > 20) {
        playerScore = 0;
        console.log("You win");
    }
    else {
        playerScore += randomNumber
    }
    diceImage.src = `/images/dice${randomNumber}.png` 
})









// let dice1 = document.getElementById('dice1').src = '/images/dice' + randomNumber + '.png'

// let side_alt = ['roll: 1', 'roll: 2', 'roll:3', 'roll: 4', 'roll: 5', 'roll: 6']
// document.getElementById('Dice1').alt = side_alt[randomNumber-1]

// score.innerHTML = randomNumber;


/* let roll = 2;
let score = 20;
if (roll == 1) {
    console.log("You lose, Manchester Dan.");
}
else if (score >= 21) {
    console.log("Somehow, Man-like Dan, you win.");
}
else {
    console.log("Continue playing.")
} */