const questions = [
    {
        question: "What is the correct syntax to write an HTML comment?",
        options: ["<!--Comment-->", "//Comment", "#Comment", "/*Comment*/"],
        answer: 0
    },
    {
        question: "What is the smallest header in HTML?",
        options: ["h1", "h2", "h6", "h4"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which HTML attribute is used for inline styles?",
        options: ["font", "styles", "style", "script"],
        answer: 2
    },
    {
        question: "In JavaScript, === means?",
        options: [
            "Same value only",
            "Same type only",
            "Same value and type",
            "Not equal"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionEl.innerText = q.question;

    optionBtns.forEach((btn, index) => {
        btn.innerText =
            String.fromCharCode(65 + index) + ". " + q.options[index];
        btn.disabled = false;
        btn.style.background = "white";
        btn.style.color = "#333";
    });
}

optionBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const correct = questions[currentQuestion].answer;

        if (index === correct) {
            btn.style.background = "green";
            btn.style.color = "white";
            score++;
        } else {
            btn.style.background = "red";
            btn.style.color = "white";
            optionBtns[correct].style.background = "green";
            optionBtns[correct].style.color = "white";
        }

        optionBtns.forEach(b => b.disabled = true);
    });
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-card").style.display = "none";
        document.querySelector(".options").style.display = "none";
        nextBtn.style.display = "none";

        scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
    }
});

loadQuestion();
