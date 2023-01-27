document.getElementById("quiz").style.display = "none"

const quizData = [
    {
        question: "For how long do snails hibernate for?",
        a: "3 Days",
        b: "3 Weeks",
        c: "3 Months",
        d: "3 Years",
        correct: "d",
    },
    {
        question: "Which country has more sheep than humans?",
        a: "Wales",
        b: "Australia",
        c: "New Zealand",
        d: "U.S.A",
        correct: "c",
    },
    {
        question: "Which one of these cat species can't roar?",
        a: "Cheetahs",
        b: "Tigers",
        c: "Leopards",
        d: "Lions",
        correct: "a",
    },
    {
        question: "Which animal is known to have the most powerful bite in the world?",
        a: "Jaguar",
        b: "Hippopotamus",
        c: "Gorilla",
        d: "Hyena",
        correct: "b",
    },
    {
        question: "How long is an elephant pregnant for before it gives birth?",
        a: "9 Months",
        b: "15 Months",
        c: "22 Months",
        d: "3 Months",
        correct: "c",
    },
];

function startQuiz() {
    document.getElementById("quiz").style.display = "block"
    document.getElementById("start-quiz").style.display = "none"
}

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Try Again</button>
           `
        }
    }
})

var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("YOU RAN OUT OF TIME!!");
    }
}

