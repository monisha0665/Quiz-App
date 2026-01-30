const questions = [
    {
        question: "What is the correct syntax to write an HTML comment?",
        options: ["<!--Comment-->", "//Comment", "#Comment", "/*Comment*/"],
        answer: 0
    },
    {
        question: "What is the smallest header in HTML by default?",
        options: ["h1", "h2", "h6", "h4"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Creative Style Sheets"],
        answer: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "styles", "script", "style"],
        answer: 3
    },
    {
        question: "In JavaScript the x===y statement implies that",
        options: ["Both x and y are equal in value, type and reference address", "Both are x and y are equal in value only", "Both are equal in the value and data type", "Both are not same at all"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionBtns = document.querySelectorAll('.optionBtn');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionBtns.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.style.backgroundColor = '#eee';
        btn.style.color = '#000';
    });
}

optionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const q = questions[currentQuestion];
        if(index === q.answer) {
            score++;
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';
        } else {
            btn.style.backgroundColor = 'red';
            btn.style.color = 'white';
            optionBtns[q.answer].style.backgroundColor = 'green';
            optionBtns[q.answer].style.color = 'white';
        }
        optionBtns.forEach(b => b.disabled = true);
    });
});

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.style.display = 'none';
        optionBtns.forEach(b => b.style.display = 'none');
        nextBtn.style.display = 'none';
        scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
    }
});

// Load the first question
loadQuestion();
