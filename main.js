// Declarations:
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
        question: "Who is the strongest Jujutsu Sorcerer in anime?",
        options: ["Junpie", "Sukuna", "Satoru Gojo", "Panda"],
        answer: ["Satoru Gojo"]
    },
    {
        id: "q6",
        question: "Who took out Itadori’s heart?",
        options: ["Gojo", "Sukuna", "Megumi", "Jogo"],
        answer: ["Sukuna"]
    },
    {
        id: "q7",
        question: "Who ate Sukua's first finger?",
        options: ["Cursed Spirit", "Panda", "Megumi", "Yuji"],
        answer: ["Yuji"]
    },
    {
        id: "q8",
        question: "Which anime studio is animating Jujutsu Kaisen?",
        options: ["Studio WIT", "Studio BONES", "Funimation", "Studio MAPPA"],
        answer: ["Studio MAPPA"]
    },
    {
        id: "q9",
        question: "Who was the first one to fought with Sukuna in anime?",
        options: ["Yuji", "Mahito", "Gojo", "Nobara"],
        answer: ["Gojo"]
    },
    {
        id: "q10",
        question: "Who created Panda?",
        options: ["No One", "Yoshinobu Gakuganji", "Utahime lori", "Masamichi Yaga"],
        answer: ["Masamichi Yaga"]
    },
    {
        id: "q11",
        question: "What idol is Aoi Todo obsessed with?",
        options: ["Takada", "Tomatsu", "Takagaki", "Tsuri"],
        answer: ["Takada"]
    }
];

const randomizer = (inputArray, numberOfOutputElements) => {
    const result = [];
    const elementsCount = inputArray.length;

    for (let i = 0; i < numberOfOutputElements; i++) {
        let randomIndex = Math.floor(Math.random() * elementsCount);
        if (!result.includes(inputArray[randomIndex])) {
            result.push(inputArray[randomIndex]);
        } else {
            i--; // Decrease the loop iteration count to maintain the numberOfOutputElements.
        }
    }

    return result;
};

const randomQuestionsSelector = (numberOfQuestions) => randomizer(data, numberOfQuestions);

const optionsRandomizer = (options) => randomizer(options, options.length);

const getQuestion = questionId => data.find(question => question.id === questionId);

// Selecting and populating questions:
const questionsContainer = document.querySelector("#questionsContainer");

const selectedQuestions = randomQuestionsSelector(5);
let questions = "";

selectedQuestions.forEach((q, index) => {
    questions +=
        `<div class="my-3 mx-2">
            <label for="${q.id}" class="form-label question">${index + 1 + ". " + q.question}</label><br />`;

    optionsRandomizer(q.options).forEach(option =>
        questions +=
        `<div class="form-check form-check-inline">
                <input name="${q.id}" type="radio" class="form-check-input" value="${option}" />
                <label for="${q.id}" class="form-check-label">${option}</label>
                </div>`
    );

    questions += `</div>`;
});

questionsContainer.insertAdjacentHTML("afterBegin", questions);

// Evaluation of selected answers:
questionsContainer.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let scorePercentage = 0;
    const finalScoreElement = document.querySelector("#finalScore");
    const numberOfQuestions = document.querySelectorAll('.question');
    const formInputs = Array.from(questionsContainer.elements);
    const selectedAnswers = formInputs.filter(input => input.checked);

    selectedAnswers.forEach(answer => {
        let question = getQuestion(answer.name);
        if (question !== undefined) {
            score += question.answer.includes(answer.value) ? 1 : 0;
        }
    });

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
