const startBtn = document.getElementById("start");

startBtn.addEventListener("click",startQuiz);

function startQuiz () {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
}