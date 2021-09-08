const data = [
    {
        id: "1",
        question: "Whats the full name of Gojo?",
        options: ["Satoru Gojo", "Nara Gojo", "Kenji Gojo"],
        answer: ["Satoru Gojo"]
    },
    {
        id: "2",
        question: "What is the name of Yuji's Grandpa?",
        options: ["Shigeru", "Wasuke", "Jin"],
        answer: ["Wasuke"]
    },
    {
        id: "3",
        question: "What is the name of Gojo's Domain Expansion?",
        options: ["Malevolent Shrine", "Unlimited Void", "Six Eyes"],
        answer: ["Unlimited Void"]
    },
    {
        id: "4",
        question: "How many Sukuna Fingers are there?",
        options: ["18", "21", "20"],
        answer: ["20"]
    },
    {
        id: "5",
        question: "How many Sukuna Fingers are there?",
        options: ["18", "21", "20"],
        answer: ["20"]
    }
];

const questionsContainer = document.querySelector("#questionsContainer");

let questions = "";

data.forEach(q => {
        questions +=
        `<div class="my-3 mx-2">
            <label for="q${q.id}" class="form-label">${q.id +". "+ q.question}</label><br />`;
        
        q.options.forEach(option =>
            questions += 
                `<div class="form-check form-check-inline">
                <input name="q${q.id}" type="radio" class="form-check-input" value="${option}" />
                <label for="q${q.id}" class="form-check-label">${option}</label>
                </div>`
        );

        questions += `</div>`;
});

questionsContainer.innerHTML = questions;
