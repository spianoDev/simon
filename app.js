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
/***** Version 2 upgrade below*****/
let level1 = 900;
let level2 = 850;
let level3 = 700;
let level4 = 550;
let level5 = 400;

let totalScore = 0;

// function for adding levels

function scoreKeeper() {
    let score = document.querySelector('.score');
    totalScore += 1;
    score.innerHTML = `player score = ${totalScore}`;
}

// since my function was getting really long...
function checkScore() {
    if (totalScore < 8) {
        setTimeout(() => {
            addingOn(level1)
        }, 2000);
    } else if (totalScore === 8) {
        levelUp();
    } else if (totalScore > 8 && totalScore < 20) {
        setTimeout(() => {
            addingOn(level2)
        }, 2000);
    } else if (totalScore === 20) {
        levelUp();
    } else if (totalScore > 20 && totalScore < 34) {
        setTimeout(() => {
            addingOn(level3)
        }, 2000);
    } else if (totalScore === 34) {
        levelUp();
    } else if (totalScore > 34 && totalScore < 50) {
        setTimeout(() => {
            addingOn(level4)
        }, 2000);
    } else if (totalScore === 50) {
        levelUp();
    } else if (totalScore > 50 && totalScore < 70) {
        setTimeout(() => {
            addingOn(level5);
        }, 2000);
    } else if (totalScore === 70) {
        beatSimon();
    }
}

// I wanted to add a visual element to the correct sound
function visualCorrect(selector, highlight, color) {
    document.querySelector(selector).style.backgroundColor = highlight;
    setTimeout(() => {
        document.querySelector(selector).style.backgroundColor = color;
    }, 300);
}

// to add the correct sound to the visual element
function youAreCorrect() {
    correctSound.play();
    visualCorrect('.wedge-choice4', '#0000FF', '#00008B');
    setTimeout(() => {
        visualCorrect('.wedge-choice3', '#FFFF00', '#ffc303')
    }, 100);
    setTimeout(() => {
        visualCorrect('.wedge-choice1', '#30bb0b', '#008000')
    }, 200);
    setTimeout(() => {
        visualCorrect('.wedge-choice2', '#FF0000', '#B22222')
    }, 300);
    setTimeout(() => {
        visualCorrect('.wedge-choice4', '#0000FF', '#00008B')
    }, 400);
    setTimeout(() => {
        visualCorrect('.wedge-choice3', '#FFFF00', '#ffc303')
    }, 500);
    setTimeout(() => {
        visualCorrect('.wedge-choice1', '#30bb0b', '#008000')
    }, 600);
    setTimeout(() => {
        visualCorrect('.wedge-choice2', '#FF0000', '#B22222')
    }, 700);
}

/***** Version 2 upgrade above*****/
/***** Version 3 upgrade below*****/
function gameLevelCheck() {
    if (totalScore < 8) {
        gameStart(level1);
    } else if (totalScore >= 8 && totalScore < 20) {
        gameStart(level2);
    } else if (totalScore >= 20 && totalScore < 34) {
        gameStart(level3);
    } else if (totalScore >= 34 && totalScore < 50) {
        gameStart(level4);
    } else if (totalScore >= 50 && totalScore < 70) {
        gameStart(level5);
    } else if (totalScore >= 70) {
        beatSimon();
    }
}

// https://stackoverflow.com/questions/16334323/event-handlers-on-message-box-buttons
// trying to add an event listener to the alert box
function levelUp() {
    if (totalScore === 8) {
        levelMessage();
        computerSequence.splice(0, computerSequence.length);
        playerSequence.splice(0, playerSequence.length);
        setTimeout(() => {
            gameStart(level2);
            updatePlayerLevel();
        }, 5000);
    } else if (totalScore === 20) {
        levelMessage();
        computerSequence.splice(0, computerSequence.length);
        playerSequence.splice(0, playerSequence.length);
        setTimeout(() => {
            gameStart(level3);
            updatePlayerLevel();
        }, 5000);
    } else if (totalScore === 34) {
        levelMessage();
        computerSequence.splice(0, computerSequence.length);
        playerSequence.splice(0, playerSequence.length);
        setTimeout(() => {
            gameStart(level4);
            updatePlayerLevel();
        }, 5000);
    } else if (totalScore === 50) {
        levelMessage();
        computerSequence.splice(0, computerSequence.length);
        playerSequence.splice(0, playerSequence.length);
        setTimeout(() => {
            gameStart(level5);
            updatePlayerLevel();
        }, 5000);
    }
}

function levelMessage() {
    youAreCorrect();
    setTimeout(() => {
        youAreCorrect();
    }, 1600);
    setTimeout(() => {
        alert(`You have completed a level! Hit ok to keep trying to beat Simon!`);
    }, 3400);
}

/***** Version 3 upgrade above*****/
/***** Version 4 upgrade below*****/
function updatePlayerLevel() {
    if (totalScore === 8) {
        document.getElementById('game-level').innerHTML = 'You are now on level 2!';
    } else if (totalScore === 20) {
        document.getElementById('game-level').innerHTML = 'You are now on level 3!!';
    } else if (totalScore === 34) {
        document.getElementById('game-level').innerHTML = 'You are now on level 4!!!';
    } else if (totalScore === 50) {
        document.getElementById('game-level').innerHTML = 'You are now on level 5!!!';
    }
}

function beatSimon() {
    if (totalScore >= 70) {
        youAreCorrect();
        setTimeout(() => {
            youAreCorrect();
        }, 1600);
        setTimeout(() => {
            youAreCorrect();
        }, 3200);
        setTimeout(() => {
            alert('CONGRATULATIONS! You have beat SIMON!!');
        }, 6000);
        setTimeout(() => {
            document.location.reload();
        }, 15000);
    }
}

/***** Version 4 upgrade above*****/
// select wedge
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


compareSequences(playerSequence, computerSequence);
// had to make a separate event listener because it was interfering with my arrays.
// looked up comparing arrays because I was getting both sounds to play on the second round of game play
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// https://www.w3schools.com/jsref/jsref_every.asp
function compareSequences(player, computer) {
    answerButton.addEventListener(('click'), function (e) {
        if (e.target.className === 'simon') {
            if (playerSequence.length !== computerSequence.length) {
                buzzSound.play();
                setTimeout(() => {
                    document.location.reload();
                }, 1500);
            } else {
                for (let j = 0; j < computerSequence.length; j++) {
                    if (player.every((value, j) => value === computer[j])) {
                        youAreCorrect();
                        console.log(player);
                        console.log(computer);
                    } else {
                        buzzSound.play();
                        setTimeout(() => {
                            document.location.reload();
                        }, 1500);
                    }
                }
                scoreKeeper();
                checkScore();
            }
        }
        playerSequence.splice(0, computerSequence.length);
    });
}

// a function to select a specific wedge/color/sound
function wedge(selector, highlight, color, audioObject) {
    document.querySelector(selector).style.backgroundColor = highlight;
    audioObject.play();
    setTimeout(() => {
        document.querySelector(selector).style.backgroundColor = color;
    }, 300);
}

// a function to generate a random number
function randomNumberBetween(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

// need a way to create a computer generated sequence of options.
function gameStart(time) {
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
        }, (time * computerSequence.length) * i);
        computerSequence.push(random);
    }
}


// need a function to add to the number of items in the array so that each round increases
function addingOn(time) {
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
        }, time * index);
    }
    gameLevelCheck();
}



