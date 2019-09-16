console.log('welcome to simon');
//https://stackoverflow.com/questions/9419263/playing-audio-with-javascript was pointed in this direction by Jonathan G.

// variables that allow for selection of wedge/button
let pickWedge = document.querySelector('section');
// variables that create the sounds
let pickSoundGreen = new Audio('sounds/high-C-(green).mp3');
let pickSoundRed = new Audio('sounds/G-(red).mp3');
let pickSoundYellow = new Audio('sounds/E-(yellow).mp3');
let pickSoundBlue = new Audio('sounds/low-c-(blue).mp3');
let correctSound = new Audio('sounds/gliss-(correct).mp3');
let buzzSound = new Audio('sounds/buzz-(incorrect).mp3');
// variable for computer generated sequences
let computerSequence = [];
function wedge(selector, highlight, color, audioObject) {
    document.querySelector(selector).style.backgroundColor = highlight;
    audioObject.play();
    setTimeout(() => {
        document.querySelector(selector).style.backgroundColor = color;
    }, 800);
}
// allows for the player to select a box/button and the output is visual and auditory.
pickWedge.addEventListener('click', function (evt) {
    if (evt.target.className === 'wedge-choice1') {
        wedge('.wedge-choice1', '#30bb0b','#008000', pickSoundGreen);
    } else if (evt.target.className === 'wedge-choice2') {
        wedge('.wedge-choice2', '#FF0000', '#B22222', pickSoundRed);
    } else if (evt.target.className === 'wedge-choice3') {
        wedge('.wedge-choice3', '#FFFF00', '#ffc303', pickSoundYellow);
    } else if (evt.target.className === 'wedge-choice4') {
        wedge('.wedge-choice4', '#0000FF', '#00008B', pickSoundBlue);
    } else if (evt.target.className === 'simon') {
        // place hold the gliss sound and buzz sound
        correctSound.play();
        buzzSound.play();
    }
});
// need a way to create a computer generated sequence of options.
function gameStart() {
    for (let i = 1; i < 4; i++) {
        i = pickWedge.
      computerSequence.push(i);
    }
}

console.log(computerSequence);
// need a way for the user to enter their response
function playerAttempt() {

}