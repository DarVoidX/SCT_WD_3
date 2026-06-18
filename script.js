const questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Hyper Transfer Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language styles webpages?",
        answers: [
            "Python",
            "Java",
            "CSS",
            "C++"
        ],
        correct: 2
    },

    {
        question: "Which language adds interactivity?",
        answers: [
            "JavaScript",
            "HTML",
            "CSS",
            "SQL"
        ],
        correct: 0
    },

    {
        question: "Which tag creates a hyperlink?",
        answers: [
            "<img>",
            "<a>",
            "<div>",
            "<p>"
        ],
        correct: 1
    },

    {
        question: "Which property changes text color in CSS?",
        answers: [
            "font-color",
            "background",
            "color",
            "text-style"
        ],
        correct: 2
    }

];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressBar = document.getElementById("progressBar");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    nextBtn.style.display = "none";

    const q = questions[currentQuestion];

    counter.innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion) / questions.length) * 100}%`;

    questionElement.innerText = q.question;

    answersElement.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.innerText = answer;

        button.classList.add("btn");

        button.addEventListener("click", () => {

            const allButtons =
                document.querySelectorAll(".btn");

            allButtons.forEach(btn => {
                btn.disabled = true;
            });

            if (index === q.correct) {

                button.classList.add("correct");
                score++;

            } else {

                button.classList.add("wrong");
                allButtons[q.correct]
                    .classList.add("correct");

            }

            scoreDisplay.innerText =
                `Score: ${score}`;

            nextBtn.style.display =
                "block";

        });

        answersElement.appendChild(button);

    });

}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        progressBar.style.width = "100%";

        questionElement.innerText =
            `Quiz Completed!`;

        answersElement.innerHTML =
            `<h3>Your Score: ${score}/${questions.length}</h3>`;

        counter.innerText = "";

        nextBtn.style.display = "none";

    }

});

loadQuestion();