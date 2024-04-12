// Loads OBJ from file
const script = document.createElement("script");
script.src = "./obj.js";
document.head.append(script);

// Starts making the js when the page is loaded
window.addEventListener('load', function () {
    makeQuestions();
});

// Weird Object that I went with for how to generate questions
const questions = {
    capital: { question: 'What state has this capital: ', num: 1 },
    nickname: { question: 'What state has this nickname: ', num: 2 },
    motto: { question: 'What state has this motto: ', num: 3 },
    symbols: { question: 'What state is this based off the symbols: ', num: 4 },
    touristattractions: { question: 'What state is this based off of the attractions: ', num: 5 },
    population: { question: 'What state has this population: ', num: 6 },
    name: { question: "What is this state's capital: ", num: 7 },
    landmass: { question: 'What state has this landmass: ', num: 8 },
    date_of_statehood: { question: 'What state was founded on this day: ', num: 9 },
    majorindustry: { question: 'What state is this based off of the industries: ', num: 10 },
};

// Clears out old questions then calls makeQuestions()
function makeNewQuestions() {
    if (document.querySelector('#questionContainer')) {
        // This is here just to make sure that the screen doesn't get too long
        const divBox = document.getElementById('questionContainer');
        divBox.innerHTML = '';
    }
    makeQuestions();
}

// Chooses a topic then calls two help functions
function makeQuestions() {

    // numbers are like this because i is the num that shows up on the question
    for (let i = 1; i < 4; i++) {
        // Gets a number for a topic
        const keys = Object.keys(questions)
        let a = Math.floor(Math.random() * keys.length);

        // Gets a topic and desciption
        const topic = keys[a];
        const questionDesc = questions[topic];

        // try {
            // Get data based of topic
            getData(i, questionDesc.num, questionDesc);
        // } catch (e) {
            
        // }
    }

}

// gets data for question
function getData(questionNumb, topicNum, Desc) {
    // Get a random state
    let b = Math.floor(Math.random() * 50);

    // Make the question box
    var questionContainer = document.getElementById('questionContainer');

    // Setting up proper data
    switch (topicNum) {
        // capital
        case 1:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].capital, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // nickname
        case 2:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].nickname, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // motto
        case 3:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].motto, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // symbols
        case 4:
            // Getting all array of object into a string
            var temp = "";
            for (i in states[b].symbols) {
                temp = states[b].symbols[i].value + ', ' + temp;
            }
            var symbols = temp.substring(0, temp.length - 2);
            var questionElement = generateHTML(questionNumb, Desc.question + symbols, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // touristattractions
        case 5:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].touristattractions, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // population
        case 6:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].population, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // name
        case 7:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].name, states[b].capital);
            questionContainer.appendChild(questionElement);
            break;
        // landmass
        case 8:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].landmass, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // date_of_statehood
        case 9:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].date_of_statehood, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
        // majorinduustry
        case 10:
            var questionElement = generateHTML(questionNumb, Desc.question + states[b].majorindustry, states[b].name);
            questionContainer.appendChild(questionElement);
            break;
    }

}

// Makes HTML question box
function generateHTML(questionNumber, questionText, answerText) {
    // Create elements
    const divBox = document.createElement('div');
    divBox.classList.add('box');

    const h1 = document.createElement('h1');
    h1.textContent = 'Question ' + questionNumber;

    const divQuestion = document.createElement('div');
    divQuestion.classList.add('question');

    const divAccordion = document.createElement('div');
    divAccordion.classList.add('accordion');
    divAccordion.id = 'accordionExample';

    const divAccordionItem = document.createElement('div');
    divAccordionItem.classList.add('accordion-item');

    const pQuestion = document.createElement('p');
    pQuestion.textContent = questionText;

    const h2AccordionHeader = document.createElement('h2');
    h2AccordionHeader.classList.add('accordion-header');
    h2AccordionHeader.id = 'headingOne';
    h2AccordionHeader.style.border = '1px #636363 solid';
    h2AccordionHeader.style.borderRadius = '3px';

    const buttonAccordion = document.createElement('button');
    buttonAccordion.classList.add('accordion-button');
    buttonAccordion.classList.add('collapsed');
    buttonAccordion.setAttribute('type', 'button');
    buttonAccordion.setAttribute('data-bs-toggle', 'collapse');
    buttonAccordion.setAttribute('data-bs-target', '#collapse' + questionNumber);
    buttonAccordion.setAttribute('aria-expanded', 'false');
    buttonAccordion.setAttribute('aria-controls', 'collapseOne');
    buttonAccordion.textContent = 'Show Answer';

    const divCollapse = document.createElement('div');
    divCollapse.classList.add('accordion-collapse');
    divCollapse.classList.add('collapse');
    divCollapse.id = 'collapse' + questionNumber;
    divCollapse.setAttribute('aria-labelledby', 'headingOne');
    divCollapse.setAttribute('data-bs-parent', '#accordionExample');

    const divCollapseBody = document.createElement('div');
    divCollapseBody.classList.add('accordion-body');
    divCollapseBody.textContent = answerText;

    // Append elements
    divCollapse.appendChild(divCollapseBody);

    h2AccordionHeader.appendChild(buttonAccordion);

    divAccordionItem.appendChild(pQuestion);
    divAccordionItem.appendChild(h2AccordionHeader);
    divAccordionItem.appendChild(divCollapse);

    divAccordion.appendChild(divAccordionItem);

    divQuestion.appendChild(divAccordion);

    divBox.appendChild(h1);
    divBox.appendChild(divQuestion);

    return divBox;
}