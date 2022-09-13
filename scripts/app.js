let startButton = document.getElementById('btn-start');
let promptsH2 = document.getElementById('title');
let promptsP = document.getElementById('description');
let buttonsDiv = document.getElementById('buttons');

startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    promptsP.style.display = 'none';
    promptsH2.innerHTML = 'Is this your first time attending a Venture Connectors Event?';
    
    if (startButton.style.display === 'none') {
        let yesButton = document.createElement('button');
        yesButton.innerHTML = 'Yes';
        yesButton.setAttribute('id', 'btn-yes');
        buttonsDiv.appendChild(yesButton);
        let noButton = document.createElement('button');
        noButton.innerHTML = 'No';
        noButton.setAttribute('id', 'btn-no');
        buttonsDiv.appendChild(noButton);
    }
});

let yesButton = document.getElementById('btn-yes');
let noButton = document.getElementById('btn-no');
let [yesCount, noCount] = 0;

function yesButtonClick() {
    yesCount++;
    yesButton.style.backgroundColor = 'green';
    yesButton.style.backgroundColor = '#2182BF';
}