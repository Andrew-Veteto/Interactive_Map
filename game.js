// Loads OBJ from file
const script = document.createElement("script");
script.src = "./obj.js";
document.head.append(script);

// Variables
var stateName = '';
var lastState = '';
var img = document.querySelector('.stateImg');

// Gets random number for a state
function randomNum() {
    let a = Math.floor(Math.random() * 50);

    if (lastState == a) {
        a = Math.floor(Math.random() * 50);
    }

    lastState = a;
    return a;
}

// gets state based of number
function showState(state) {
    // console.log(states[state].name);
    stateName = states[state].name;
    img.style.backgroundImage = "url('" + states[state].image + "')";
}

// Shows the hidden Model with the results
function displayModal(message) {
    document.getElementById("modalMessage").innerText = message;
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

// Checks the user Input
function checkInput(){
    let input = document.getElementById('stateInputName').value;
    document.getElementById('stateInputName').value = '';
    
    // Removing space on the sides of the sting because autocomplete on tablets leaves spaces
    input = input.trim();

    if (input.toLowerCase() === stateName.toLowerCase()) {
        displayModal('Correct');
        playGame();
    } else {
        displayModal('Incorrect. The state was: ' + stateName + ". You entered: " + input);
        playGame();
    }

}

// Set the blur on the image of the state flag
function setDifficulty(num){
 if(num == 0){
    img.style.filter = 'blur(0px)';
 } else if(num == 1){
    img.style.filter = 'blur(5px)';
 } else {
    img.style.filter = 'blur(15px)';
 }
}

// Starts the Game
function playGame(){
    let num = randomNum();
    showState(num);
}

// Starts the game when the page is loaded
window.addEventListener('load', function() {
    playGame();
});
// I have ni clue what this code does but I'm going to keep it.
//getStates((data) => { states = data; console.log(states) });