let opening = document.querySelector(".story-opening");
let storyBeginning = document.querySelector(".first-screen");
let optionA = document.querySelector(".option-A-screen");
let optionAcont = document.querySelector(".option-A-continue-screen");
let optionA1 = document.querySelector(".option-A1-screen");
let optionB = document.querySelector(".option-B-screen");
let optionB1 = document.querySelector(".option-B1-screen");
let optionB2 = document.querySelector(".option-B2-screen");
let ending1 = document.querySelector(".ending-1-screen");
let ending2 = document.querySelector(".ending-2-screen");
let ending3 = document.querySelector(".ending-3-screen");
let ending4 = document.querySelector(".ending-4-screen");
let ending5 = document.querySelector(".ending-5-screen");
let ending6 = document.querySelector(".ending-6-screen");
let ending7 = document.querySelector(".ending-7-screen");

let beginStoryButton = document.querySelector(".start-game");
let optionAButton = document.querySelector(".option-A");
let optionAContinueButton = document.querySelector(".option-A-continue");
let optionA1Button = document.querySelector(".option-A1");
let optionA2Button = document.querySelector(".option-A2");
let optionA3Button = document.querySelector(".option-A3");
let optionA4Button = document.querySelector(".option-A4");
let optionBButton = document.querySelector(".option-B");
let optionB1Button = document.querySelector(".option-B1");
let optionB2Button = document.querySelector(".option-B2");
let optionB3Button = document.querySelector(".option-B3");
let optionB4Button = document.querySelector(".option-B4");
let optionB5Button = document.querySelector(".option-B5");
let optionB6Button = document.querySelector(".option-B6");

let body = document.querySelector("body");
let aText = document.querySelector(".Atext");
let epicButton = document.querySelector(".epic-buttons");
let playAgain = document.querySelector(".play-again");
let playAgain2 = document.querySelector(".play-again2");
let playAgain3 = document.querySelector(".play-again3");
let playAgain4 = document.querySelector(".play-again4");
let playAgain5 = document.querySelector(".play-again5");
let playAgain6 = document.querySelector(".play-again6");
let playAgain7 = document.querySelector(".play-again7");

playAgain.onclick = function() {
    ending1.style.display = "none";
    opening.style.display = "block";
};

playAgain2.onclick = function() {
    ending2.style.display = "none";
    opening.style.display = "block";
};

playAgain3.onclick = function() {
    ending3.style.display = "none";
    opening.style.display = "block";
};

playAgain4.onclick = function() {
    ending4.style.display = "none";
    opening.style.display = "block";
};

playAgain5.onclick = function() {
    ending5.style.display = "none";
    opening.style.display = "block";
};

playAgain6.onclick = function() {
    ending6.style.display = "none";
    opening.style.display = "block";
};

playAgain7.onclick = function() {
    ending7.style.display = "none";
    opening.style.display = "block";
};

/* You have to add body at the beginning if you want this function to work */
body.onkeydown = function() {
    opening.style.display = "none";
    storyBeginning.style.display = "block";
};

optionAButton.onclick = function() {
    storyBeginning.style.display = "none";
    optionA.style.display = "block";
};

/* HTML in "innerHTML" MUST be capitalized. Code will not work if it is not capitalized + it will not display as an error if you didn't capitalize HTML*/
optionAContinueButton.onclick = function() {
    aText.innerHTML = "You can either let the uninfected inside or block the door to keep everyone outside.";
    optionAContinueButton.style.display = "none";
    epicButton.style.display = "block";
};

optionA1Button.onclick = function() {
    optionA.style.display = "none";
    optionA1.style.display = "block";
    epicButton.style.display = "none";
};

optionA2Button.onclick = function() {
    optionA.style.display = "none";
    ending3.style.display = "block";
    epicButton.style.display = "none";
};

optionA3Button.onclick = function() {
    optionA1.style.display = "none";
    ending1.style.display = "block";
};

optionA4Button.onclick = function() {
    optionA1.style.display = "none";
    ending2.style.display = "block";
};

optionBButton.onclick = function() {
    storyBeginning.style.display = "none";
    optionB.style.display = "block";
};

optionB1Button.onclick = function() {
    optionB.style.display = "none";
    optionB1.style.display = "block";
};

optionB2Button.onclick = function() {
    optionB.style.display = "none";
    optionB2.style.display = "block";
};

optionB3Button.onclick = function() {
    optionB1.style.display = "none";
    ending4.style.display = "block";
};

optionB4Button.onclick = function() {
    optionB1.style.display = "none";
    ending5.style.display = "block";
};

optionB5Button.onclick = function() {
    optionB2.style.display = "none";
    ending6.style.display = "block";
};

optionB6Button.onclick = function() {
    optionB2.style.display = "none";
    ending7.style.display = "block";
};