const quizdata = [
    {
        question: 'Question 1(Answer is 2)',
        ans1: 'Answer 1',
        ans2: 'Answer 2',
        ans3: 'Answer 3',
        ans4: 'Answer 4',
        correct: 'ans2'
    },
    {
        question: 'Question 2(Answer is 3)',
        ans1: 'Answer 1',
        ans2: 'Answer 2',
        ans3: 'Answer 3',
        ans4: 'Answer 4',
        correct: 'ans3'
    },
    {
        question: 'Question 3(Answer is 1)',
        ans1: 'Answer 1',
        ans2: 'Answer 2',
        ans3: 'Answer 3',
        ans4: 'Answer 4',
        correct: 'ans1'
    },
];

let quizCount = 0;
let score=0;

let questionElem = document.getElementById('question');
const ans1elem = document.querySelector('label[for="ans1"]');
const ans2elem = document.querySelector('label[for="ans2"]');
const ans3elem = document.querySelector('label[for="ans3"]');
const ans4elem = document.querySelector('label[for="ans4"]');

const mainElm = document.getElementById('maincontainer');

const submitbtn = document.getElementById('submitBtn');

const loadQuiz = () => {
    let currQuiz = quizdata[quizCount];
    questionElem.innerHTML = currQuiz.question;
    ans1elem.innerHTML = currQuiz.ans1;
    ans2elem.innerHTML = currQuiz.ans2;
    ans3elem.innerHTML = currQuiz.ans3;
    ans4elem.innerHTML = currQuiz.ans4;
};

const deselectans = () => {
    answers = document.querySelectorAll('input[name="answer"]');

    answers.forEach(element => {
        element.checked = false;
    });
}

const getselection = () => {
    answers = document.querySelectorAll('input[name="answer"]');
    let selectedans = false;

    answers.forEach(element => {
        if(element.checked){
            selectedans = element.id;
        }
    });

    return selectedans
}
submitbtn.addEventListener('click',()=> {
    let selection = getselection();
    if(selection){
        if(quizCount< quizdata.length-1){
            if(selection == quizdata[quizCount].correct){
                score++;
                document.body.style.background = '#bde7bd';
            }
            else{
                document.body.style.background = '#ff8986';
            }
            quizCount++;
            deselectans();
            loadQuiz();
        } else{
            mainElm.innerHTML = `<h1> Congrats! You scored ${score} </h1>
            <button onclick="location.reload();">Play again</Button>`;
        }
    }
})

loadQuiz();