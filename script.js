console.log('welcome to simon');
//https://stackoverflow.com/questions/9419263/playing-audio-with-javascript was pointed in this direction by Jonathan G.

let pickWedge = document.querySelector('section');
let pickSoundGreen = new Audio('sounds/high-C-(green).mp3');
let pickSoundRed = new Audio('sounds/G-(red).mp3');
let pickSoundYellow = new Audio('sounds/E-(yellow).mp3');
let pickSoundBlue = new Audio('sounds/low-c-(blue).mp3');
let correctSound = new Audio('sounds/gliss-(correct).mp3');
let buzzSound = new Audio('sounds/buzz-(incorrect).mp3');

pickWedge.addEventListener('click', function (evt) {
    if (evt.target.className === 'wedge-choice1') {
        document.querySelector('.wedge-choice1').style.backgroundColor = '#30bb0b';
        pickSoundGreen.play();
        setTimeout(() => {
            document.querySelector('.wedge-choice1').style.backgroundColor = '#008000';
        }, 800);
    } else if (evt.target.className === 'wedge-choice2') {
        document.querySelector('.wedge-choice2').style.backgroundColor = '#FF0000';
        pickSoundRed.play();
        setTimeout(() => {
            document.querySelector('.wedge-choice2').style.backgroundColor = '#B22222';
        }, 800);
    } else if (evt.target.className === 'wedge-choice3') {
        document.querySelector('.wedge-choice3').style.backgroundColor = '#FFFF00';
        pickSoundYellow.play();
        setTimeout(() => {
            document.querySelector('.wedge-choice3').style.backgroundColor = '#ffc303';
        }, 800);
    } else if (evt.target.className === 'wedge-choice4') {
        document.querySelector('.wedge-choice4').style.backgroundColor = '#0000FF';
        pickSoundBlue.play();
        setTimeout(() => {
            document.querySelector('.wedge-choice4').style.backgroundColor = '#00008B';
        }, 800);
    } else if (evt.target.className === 'simon') {
        // place hold the gliss sound and buzz sound
        correctSound.play();
        buzzSound.play();
    }
});