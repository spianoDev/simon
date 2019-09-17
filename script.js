console.log('welcome to simon');
//https://stackoverflow.com/questions/9419263/playing-audio-with-javascript was pointed in this direction by Jonathan G.

// variables that allow for selection of wedge/button
let pickWedge = document.querySelector('section');
let answerButton = document.querySelector('.enter');
// variables that create the sounds
let pickSoundGreen = new Audio('sounds/green.mp3');
let pickSoundRed = new Audio('sounds/red.mp3');
let pickSoundYellow = new Audio('sounds/yellow.mp3');
let pickSoundBlue = new Audio('sounds/blue.mp3');
let correctSound = new Audio('sounds/gliss-(correct).mp3');
let buzzSound = new Audio('sounds/buzz-(incorrect).mp3');
// variable for computer generated sequences
let computerSequence = [];
//variable for player response
let playerSequence = [];
// allows for the player to select a box/button and the output is visual and auditory.
let option;
//function sequence() {
pickWedge.addEventListener('click', function (evt) {
    if (evt.target.className === 'wedge-choice1') {
        wedge('.wedge-choice1', '#30bb0b', '#008000', pickSoundGreen);
        option = 0;
    } else if (evt.target.className === 'wedge-choice2') {
        wedge('.wedge-choice2', '#FF0000', '#B22222', pickSoundRed);
        option = 1;
    } else if (evt.target.className === 'wedge-choice3') {
        wedge('.wedge-choice3', '#FFFF00', '#ffc303', pickSoundYellow);
        option = 2;
    } else if (evt.target.className === 'wedge-choice4') {
        wedge('.wedge-choice4', '#0000FF', '#00008B', pickSoundBlue);
        option = 3;
    }
    playerSequence.push(option);
});
//}
console.log(playerSequence);
compareSequences(playerSequence, computerSequence);
// had to make a separate event listener because it was interfering with my arrays.
// looked up comparing arrays because I was getting both sounds to play on the second round of game play
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// https://www.w3schools.com/jsref/jsref_every.asp
function compareSequences(player, computer) {
    answerButton.addEventListener(('click'), function (e) {
        if (e.target.className === 'simon') {
            for (let j = 0; j < computerSequence.length; j++) {
                if (player.every((value, j) => value === computer[j])) {
                //if (player[j] === computer[j]) {
                    // the direct comparison wasn't working... was returning both sounds.
                    correctSound.play();
                    playerSequence = [];
                } else {
                    buzzSound.play();
                    playerSequence = [];
                }
            }
        }
    });
}

// a function to select a specific wedge/color/sound
function wedge(selector, highlight, color, audioObject) {
    document.querySelector(selector).style.backgroundColor = highlight;
    audioObject.play();
    setTimeout(() => {
        document.querySelector(selector).style.backgroundColor = color;
    }, 500);
}

// a function to generate a random number
function randomNumberBetween(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

// need a way to create a computer generated sequence of options.
function gameStart() {
    // trying to add a timeout function to the order of the sounds generated by the loop
    // https://stackoverflow.com/questions/5226285/settimeout-in-for-loop-does-not-print-consecutive-values
    // https://stackoverflow.com/questions/24293376/javascript-for-loop-with-timeout
    for (let i = 1; i <= 1; i++) {
        let random = randomNumberBetween(0, 3);
        setTimeout(() => {
            if (random === 0) {
                wedge('.wedge-choice1', '#30bb0b', '#008000', pickSoundGreen);
            } else if (random === 1) {
                wedge('.wedge-choice2', '#FF0000', '#B22222', pickSoundRed);
            } else if (random === 2) {
                wedge('.wedge-choice3', '#FFFF00', '#ffc303', pickSoundYellow);
            } else if (random === 3) {
                wedge('.wedge-choice4', '#0000FF', '#00008B', pickSoundBlue);
            }
            console.log(random);
        }, (700 * computerSequence.length) * i);
        computerSequence.push(random);
    }
}



// need a function to add to the number of items in the array so that each round increases
function addingOn() {
    for (let index = 0; index < computerSequence.length; index++) {
        setTimeout(() => {
            if (computerSequence[index] === 0) {
                wedge('.wedge-choice1', '#30bb0b', '#008000', pickSoundGreen);
            } else if (computerSequence[index] === 1) {
                wedge('.wedge-choice2', '#FF0000', '#B22222', pickSoundRed);
            } else if (computerSequence[index] === 2) {
                wedge('.wedge-choice3', '#FFFF00', '#ffc303', pickSoundYellow);
            } else if (computerSequence[index] === 3) {
                wedge('.wedge-choice4', '#0000FF', '#00008B', pickSoundBlue);
            }
        }, 700 * index);
    }
    gameStart();
}

console.log(computerSequence);


