'use strict';
const choiceText = document.querySelectorAll('.choice-text')
const question = document.querySelector('#question')
const questionCounter = document.querySelector('#question-counter');
const questionCounterSpan = document.querySelector('.question-counter-span');
const scoreEl = document.querySelector('#score')
let questions = [
    {},
    {
        id:1,
        question: "MayoqHub jamosida Counter Strike ni eng yaxshi o'ynovchi kim",
        choice1: "Shoxruh",
        choice2: "Farruh",
        choice3: "Fazliddin",
        choice4: "Hech qaysi manga yetomidi",
        answer: [2]
    },
    {
        id:2,
        question: "Teshiktosh g'orini eshitganmisiz? o'sha g'orni kim teshgan?😜",
        choice1: "🤔",
        choice2: "boree",
        choice3: "men🤣🤣",
        choice4: "you are stupid😏",
        answer: [3]
    },
    {
        id:3,
        question: "Ronaldoni MYU ga o'tishiga qanday qaraysiz?",
        choice1: "qariya bekor qildi",
        choice2: "Men yoshligimdan MYU muhlisiman",
        choice3: "Eldor shomurodovni soyasida qolishdan qo'rdi bola",
        choice4: "Menga pushkin bir jahon",
        answer: [3]
    },
    {
        id:4,
        question: "Nimaga go'sht qimmatlashib ketyapti",
        choice1: "Fermer buva yangi moshina olishi kerak",
        choice2: "dollar oshdi ukam",
        choice3: "hayvonlar kamayip ketyapti",
        choice4: "Ko'p go'sht yep qo'yganimiz uchun",
        answer: [4]
    },
    {
        id:5,
        question: "Dasturlash bo'yicha dunyodagi eng yaxshi o'qish qaysi",
        choice1: "MIT",
        choice2: "42 coding school",
        choice3: "MayoqHub😎",
        choice4: "Na'jot Ta'lim",
        answer: [3]
    },
    {
        id:6,
        question: "Bu yil chempionlar ligasida kim g'olib boladi",
        choice1: "Barselona",
        choice2: "Yana Barselona",
        choice3: "Faqat Barselona",
        choice4: "Tochni Barselona",
        answer: [1, 2, 3, 4]
    },
    {
        id:7,
        question: "O'zbekistonning poytaxti toshkent dunyoning poytaxti qayer?",
        choice1: "New York",
        choice2: "London",
        choice3: "Andijon",
        choice4: "Asaka",
        answer: [4]
    },
    {
        id:8,
        question: "Bu yil prezident saylovida kim yutadi?",
        choice1: "Shavkat Miromonovich Mirziyoyev",
        choice2: "Amaldagi Prezident",
        choice3: "A javob tog'ri",
        choice4: "C javob tog'ri",
        answer: [1, 2, 3, 4]
    },
    {
        id:9,
        question: "Tik Tok erlargan qanday qaraysiz?",
        choice1: "Bular odam Bo'lmaydi",
        choice2: "A javob to'gri",
        choice3: "B javob tog'ri",
        choice4: "C javob tog'ri",
        answer: [1, 2, 3, 4]
    },
    {
        id:10,
        question: "Kechasi uyda osmonga qaraganizda nima ko'rasiz",
        choice1: "Yulduzlarni",
        choice2: "Oyni",
        choice3: "Bulutlarni",
        choice4: "Uyimizni tomi bor hech narsa ko'rinmidi",
        answer: [4]
    }
];

let i = 1;
let obj;
let num = questions.length;
let score = 0;
function showQuestion() {
    obj = questions[i]
    question.textContent = obj.question;
    choiceText[0].textContent = obj.choice1;
    choiceText[1].textContent = obj.choice2;
    choiceText[2].textContent = obj.choice3;
    choiceText[3].textContent = obj.choice4;
    questionCounter.textContent = `${i}/${num - 1}`;
    scoreEl.textContent = score
}
showQuestion()
choiceText.forEach(item => {

    item.addEventListener('click', (evt) => {


        if (i + 1 == questions.length) {
        setTimeout(() => {
            document.querySelector('.questions-container').classList.add('hidden')
            document.querySelector('.currentScore-container').classList.remove('hidden')
            document.querySelector('.currentScore').textContent='Your score is '+score
        }, 1000);
        } else {
            setTimeout(() => {
                item.classList.remove('correct')
                item.classList.remove('incorrect')
                i++;
                showQuestion()
            }, 1000)
        }
        let choice = evt.target;
        let id = 0;
        for (let i = 0; i <= obj.answer.length; i++) {
            if (choice.id == obj.answer[i]) {
                id = obj.answer[i]
            }
        }
        // let correctChoice = obj.answer
        if (choice.id == id) {
            choice.classList.add('correct')
            score += 10
        } else {
            choice.classList.add('incorrect')
        };
    })
})

