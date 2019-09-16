console.log('welcome to simon');
//https://stackoverflow.com/questions/9419263/playing-audio-with-javascript was pointed in this direction by Jonathan G.

let pickWedge = document.querySelector('section');
let pickSoundGreen = new Audio('sounds/high-C-(green).mp3');
let pickSoundRed = new Audio('sounds/G-(red).mp3');
let pickSoundYellow = new Audio('sounds/E-(yellow).mp3');
let pickSoundBlue = new Audio('sounds/low-c-(blue).mp3');
let correctSound = new Audio('sounds/gliss-(correct).mp3');
let buzzSound = new Audio('sounds/buzz-(incorrect).mp3');

pickWedge.addEventListener('click', function(evt) {
    if (evt.target.className === 'wedge-choice1') {
            pickSoundGreen.play();
        }
     else if (evt.target.className === 'wedge-choice2') {
        pickSoundRed.play();
    } else if (evt.target.className === 'wedge-choice3') {
        pickSoundYellow.play();
    } else if (evt.target.className === 'wedge-choice4') {
        pickSoundBlue.play();
    } else if (evt.target.className === 'simon') {
       // place hold the gliss sound and buzz sound
        correctSound.play();
        buzzSound.play();

    }
});