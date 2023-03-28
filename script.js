const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");

let currentQuestionIndex = 0;

function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

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
    console.log("Correct!");
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      console.log("Quiz over!");
    } else {
      showQuestion();
    }
  } else {
    console.log("Wrong!");
  }
}

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);