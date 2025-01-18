const questions = [
    {
        question: "A piece of electrical equipment that is designed to operate at alternate intervals of (1) load and no load; or (2) load and rest; or (3) load, no load rest is called _____duty.",
        choices: ["short time", "intermittent", "periodic", "varying"],
        answer: "intermittent"
    },
    {
        question: "Lamp holders installed over highly combustible material shall be of the type:",
        choices: ["porcelain", "smoke resistance", "unswitched", "switched"],
        answer: "unswitched"
    },
    {
        question: "The main purpose of bonding jumper is to connect equipment grounding conductors and ___ to the grounded conductor of the system.",
        choices: ["supply transformer", "service-disconnect enclosure", "load side of service drop", "line side of service drop"],
        answer: "service-disconnect enclosure"
    },
    // Add more questions as needed
];

let questionPool = [...questions];
let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "Pota REE ka na boy!";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";
        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(choice, currentQuestion.answer));
        choicesContainer.appendChild(button);
    });
    nextButton.disabled = true;
}

function handleChoice(selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correct) {
            button.classList.add("correct");
        } else if (button.textContent === selected) {
            button.classList.add("incorrect");
        }
    });
    nextButton.disabled = false;

    if (selected !== correct) {
        questionPool.push(questionPool[currentQuestionIndex]);
    }
    questionPool.splice(currentQuestionIndex, 1);
}

nextButton.addEventListener("click", () => {
    loadQuestion();
});

restartButton.addEventListener("click", () => {
    questionPool = [...questions];
    currentQuestionIndex = 0;
    nextButton.style.display = "inline-block";
    restartButton.style.display = "none";
    loadQuestion();
});

loadQuestion();
