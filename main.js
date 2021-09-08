const data = [
    {
        id: "q1",
        question: "Whats the full name of Gojo?",
        options: ["Satoru Gojo", "Nara Gojo", "Kenji Gojo"],
        answer: ["Satoru Gojo"]
    },
    {
        id: "q2",
        question: "What is the name of Yuji's Grandpa?",
        options: ["Shigeru", "Wasuke", "Jin"],
        answer: ["Wasuke"]
    },
    {
        id: "q3",
        question: "What is the name of Gojo's Domain Expansion?",
        options: ["Malevolent Shrine", "Unlimited Void", "Six Eyes"],
        answer: ["Unlimited Void"]
    },
    {
        id: "q4",
        question: "How many Sukuna Fingers are there?",
        options: ["18", "21", "20"],
        answer: ["20"]
    },
    {
        id: "q5",
        question: "How many Sukuna Fingers are there?",
        options: ["18", "21", "20"],
        answer: ["20"]
    }
];

const questionsContainer = document.querySelector("#questionsContainer");

let questions = "";

data.forEach((q, index) => {
    questions +=
        `<div class="my-3 mx-2">
            <label for="${q.id}" class="form-label question">${index + 1 + ". " + q.question}</label><br />`;

    q.options.forEach(option =>
        questions +=
        `<div class="form-check form-check-inline">
                <input name="${q.id}" type="radio" class="form-check-input" value="${option}" />
                <label for="${q.id}" class="form-check-label">${option}</label>
                </div>`
    );

    questions += `</div>`;
});

questionsContainer.insertAdjacentHTML("afterBegin", questions);

questionsContainer.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let scorePercentage = 0;
    const finalScoreElement = document.querySelector("#finalScore");
    const numberOfQuestions = document.querySelectorAll('.question');
    const formInputs = questionsContainer.elements;

    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].checked) {
            data.forEach(question => {
                if (question.id === formInputs[i].name) {
                    score += formInputs[i].value === question.answer[0] ? 1 : 0;
                }
            });
        }
    }

    scorePercentage = (score / numberOfQuestions.length) * 100;

    let counter = 0;
    const scoreAnimator = setInterval(() => {
        if (counter >= scorePercentage) {
            clearInterval(scoreAnimator);
        }
        finalScoreElement.innerHTML = counter;
        counter++;
    }, 10);

});
