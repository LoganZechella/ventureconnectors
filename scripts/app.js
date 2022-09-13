let startButton = document.getElementById('btn-start');
let promptsH2 = document.getElementById('title');
let promptsP = document.getElementById('description');
let buttonsDiv = document.getElementById('buttons');
let yesButton = document.getElementById('btn-yes');
let noButton = document.getElementById('btn-no');

let question1 = 'Is this your first time attending a Venture Connectors Event?';
let question2 = 'Question 2';
let question3 = 'Question 3';
let question4 = 'Question 4';

let questionArray = [question1, question2, question3, question4];

startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    promptsP.style.display = 'none';
    promptsH2.innerHTML = questionArray[0];
    
    yesButton.style.display = 'block';
    noButton.style.display = 'block';
});


let yesCount = 0;
let noCount = 0;

function yesButtonClick() {
    yesCount++;
    let arrayIndex = yesCount + noCount;
    promptsH2.innerHTML = questionArray[arrayIndex];
    console.log(`Question ${arrayIndex} answered yes. Yes count: ${yesCount}, No count: ${noCount}`);
}

function noButtonClick() {
    noCount++;
    let arrayIndex = yesCount + noCount;
    promptsH2.innerHTML = questionArray[arrayIndex];
    console.log(`Question ${arrayIndex} answered no. No count: ${noCount}, Yes count: ${yesCount}`);
}