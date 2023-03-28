let currentQuestionIndex = 0;
let time = 60;
let timerId;
let score = 0;

const startBtn = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const timeEl = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const scoreEl = document.getElementById("score");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");

    timeEl.textContent = time;
    timerId = setInterval(updateTimer, 1000);

    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.question;

    choices.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", checkAnswer);
        choices.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;

    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
        feedback.textContent = "Correct!";
        score += 10;
        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
            endQuiz();
        } else {
            showQuestion();
        }
    } else {
        feedback.textContent = "Wrong!";
        time -= 10;
        if (time < 0) {
            time = 0;
            endQuiz();
        }
        updateTimer();
    }
}

function updateTimer() {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerId);

    document.getElementById("questions").classList.add("hide");
    endScreen.classList.remove("hide");

    scoreEl.textContent = score;
}
