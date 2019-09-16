console.log('welcome to simon');

let pickWedge = document.querySelector('section');
pickWedge.addEventListener('click', function(evt) {
    if (evt.target.className === 'wedge-choice1') {
        alert('green!');
    } else if (evt.target.className === 'wedge-choice2') {
        alert('red!');
    } else if (evt.target.className === 'wedge-choice3') {
        alert('yellow!');
    } else if (evt.target.className === 'wedge-choice4') {
        alert('blue!');
    } else if (evt.target.className === 'simon') {
        alert('SIMON!');
    }
});