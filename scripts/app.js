let startButton = document.getElementById('btn-start');
let promptsH2 = document.getElementById('title');
let promptsP = document.getElementById('description');
let buttonsDiv = document.getElementById('buttons');
let yesButton = document.getElementById('btn-yes');
let noButton = document.getElementById('btn-no');
let finishButton = document.getElementById('btn-finish');
let inputForm = document.getElementById('input-form');

let question1 = 'Is this your first time attending a Venture Connectors Event?';
let question2 = 'Question 2';
let question3 = 'Question 3';
let question4 = 'Question 4';

let questionArray = [question1, question2, question3, question4];

let answerArray = [];

let emailList = [];

let exitPromptText = `Thanks for taking our survey and we hope to see you at our next event!<br/><br/> Keep up with Venture Connectors on social media by clicking the links below!`;

startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    promptsP.style.display = 'none';
    promptsH2.innerHTML = questionArray[0];
    
    yesButton.style.display = 'block';
    noButton.style.display = 'block';
});

function yesAnimation() {
    yesButton.style.animation = '1s ease-in-out';
    setTimeout(function() {
        yesButton.style.animation = '';
    }, 1000);
    yesButton.style.backgroundColor = '#009000';
}

function noAnimation() {
    noButton.style.animation = '1s ease-in-out';
    setTimeout(function () {
        noButton.style.animation = '';
    }, 1000);
    noButton.style.backgroundColor = '#C41E3A';
}

let yesCount = 0;
let noCount = 0;

function yesButtonClick() {
    yesCount++;
    let arrayIndex = yesCount + noCount;
    promptsH2.innerHTML = questionArray[arrayIndex];
    console.log(`Question ${arrayIndex} answered yes. Yes count: ${yesCount}, No count: ${noCount}`);
    answerArray.push({question: questionArray[arrayIndex - 1], answer: 'yes'});
    console.log(answerArray);

    if (arrayIndex === questionArray.length) {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        inputForm.style.display = 'flex';
        finishButton.style.display = 'block';
        promptsH2.innerHTML = 'Enter your email address below if you wish to stay in contact with Venture Connectors!';
        document.getElementById('title').style.marginBottom = '0';
        document.getElementById('prompts').style.marginTop = '1em';
    }
}

function noButtonClick() {
    noCount++;
    let arrayIndex = yesCount + noCount;
    promptsH2.innerHTML = questionArray[arrayIndex];
    console.log(`Question ${arrayIndex} answered no. No count: ${noCount}, Yes count: ${yesCount}`);
    answerArray.push({ question: questionArray[arrayIndex - 1], answer: 'no' });
    console.log(answerArray);

    if (arrayIndex === questionArray.length) {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        inputForm.style.display = 'flex';
        finishButton.style.display = 'block';
        promptsH2.innerHTML = 'Enter your email address below if you wish to stay in contact with Venture Connectors!';
        document.getElementById('title').style.marginBottom = '0';
        document.getElementById('prompts').style.marginTop = '1em';
    }
}



function finishSurvey() {
    let email = document.getElementById('input-email').value;
    emailList.push({ question: 'Email', answer: email });
    
    inputForm.style.display = 'none';
    finishButton.style.display = 'none';
    promptsH2.innerHTML = exitPromptText;
    document.getElementById('prompts').style.marginTop = '2em';
    let outsideLinks = document.getElementById('links');
    outsideLinks.style.display = 'flex';
}