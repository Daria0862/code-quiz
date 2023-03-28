const startBtn = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const timer = document.getElementById("time");
const initials = document.getElementById("initials");
const submitBtn = document.getElementById("submit");
const highscores = document.getElementById("highscores");


startBtn.addEventListener("click",startQuiz);

function startQuiz () {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
}

showQuestions(); {}


function showQuestions() {
    const currentQuestion = questions[currentQuestionIndex];
}

questionTitle.textContent = currentQuestion.question;

currentQuestion.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    choices.appendChild(button);
});

const question = questions[currentQuestionIndex];