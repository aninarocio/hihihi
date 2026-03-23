const questions = [
    { q: "Lets start easy, what is your name? (Include caps and accent)", a: "Adrián" },
    { q: "How many words are in the sentence 'I love you so much my beautiful angel boyfriend future husband if I don't fuck it up before then'?", a: "19" },
    { q: "What is my name?", a: "Anina" },
    { q: "Are you excited for biopic on Sunday? (YES YES OF COURSE MY LOVE/Yes/no)", a: "YES YES OF COURSE MY LOVE" },
    { q: "What show are we currently watching?", a: "Peaky Blinders" }
];

let current = 0;

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

const imagesContainer = document.getElementById("images-container");
const loveLetter = document.getElementById("love-letter");
const endBtn = document.getElementById("end-btn");

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    questionBox.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    questionText.textContent = questions[current].q;
    answerInput.value = "";
    feedback.textContent = "";
}

submitBtn.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[current].a.toLowerCase();

    // ELIMINAR TODAS LAS IMÁGENES ANTERIORES (correctas o incorrectas)
    imagesContainer.innerHTML = "";

    if (userAnswer === correctAnswer) {
        feedback.textContent = "GOOD JOB BABY";
        feedback.style.color = "green";

        // Añadir imagen correcta
        const img = document.createElement("img");
        img.src = `imagenes/imagen${current + 1}.jpg`;
        imagesContainer.appendChild(img);

        current++;

        if (current < questions.length) {
            setTimeout(loadQuestion, 800);
        } else {
            questionBox.classList.add("hidden");
            loveLetter.classList.remove("hidden");
        }

    } else {
        feedback.textContent = "wrong but its ok I still love you";
        feedback.style.color = "red";

        // Número aleatorio entre 1 y 5
        const randomNum = Math.floor(Math.random() * 5) + 1;

        // Crear imagen incorrecta aleatoria
        const img = document.createElement("img");
        img.src = `imagenes/incorrecto${randomNum}.jpg`;
        imagesContainer.appendChild(img);
    }
});


endBtn.addEventListener("click", () => {
    location.reload();
});