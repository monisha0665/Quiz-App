const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Creative Style Sheets"],
        answer: 1
    },
    {
        question: "Which company developed the React framework?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        answer: 1
    },
    {
        question: "HTML stands for?",
        options: ["Hypertext Markup Language", "Hyper Transfer Markup Language", "Hightext Markup Language", "Hyper Text Machine Language"],
        answer: 0
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
