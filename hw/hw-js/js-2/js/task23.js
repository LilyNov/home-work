import quizQuestions from './quizQuestions.js';

const refs = {
  optionsList: document.querySelector('.options'),
  optionElements: document.querySelectorAll('.option'),
  question: document.querySelector('.question'),
  numberOfquestion: document.querySelector('.number-of-question'),
  numberOfAllquestion: document.querySelector('.number-of-all-questions'),
  btnNext: document.querySelector('[data-value="btn-next"]'),
  answersTracker: document.querySelector('[data-value="answers-tracker"]'),
  correctAnswer: document.querySelector('[data-value="correct-answer"]'),
  numberOfAllquestion2: document.querySelector(
    '[data-value="number-of-all-questions-2"]',
  ),
  btnTryAgain: document.querySelector('[data-value="btn-try-again"]'),
};

window.addEventListener('load', randomQuestion);
refs.btnNext.addEventListener('click', randomQuestion);
refs.optionsList.addEventListener('click', checkAnswer);

let indexId = 0;
let indexOfQuestion;
let indexOfPage = 0;
let score = 0; //результат викторины

refs.numberOfAllquestion.innerHTML = quizQuestions.length;

// блок с вопросами
const unit = () => {
  refs.question.innerHTML = quizQuestions[indexOfQuestion].question;
  const list = createList(quizQuestions[indexOfQuestion].options);
  refs.optionsList.innerHTML = list;

  function createList(items) {
    return items
      .map(
        option =>
          `<li class="option option-items" data-id="${indexId++}">${option}</li>`,
      )
      .join('');
  }

  // следующая страница
  refs.numberOfquestion.innerHTML = indexOfPage + 1;
  indexOfPage += 1;
};

// выбор варианта ответа
function checkAnswer(evt) {
  let id = evt.target.dataset.id;
  let answer = quizQuestions[indexOfQuestion].rightAnswer;
  if (+id === answer) {
    evt.target.classList.add('correct');
    score += 1;
  } else {
    evt.target.classList.add('wrong');
  }
  if (evt.target.nodeName !== 'LI') {
    return;
  }
}

// вопросы рандомно
let completedAnswers = [];

function randomQuestion() {
  let randomNum = Math.floor(Math.random() * quizQuestions.length);
  let hitDublicate;

  if (indexOfPage == quizQuestions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.map(item => {
        item == randomNum ? (hitDublicate = true) : (hitDublicate = false);
      });
      if (hitDublicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNum;
        unit();
      }
    }
    if (completedAnswers == 0) {
      indexOfQuestion = randomNum;
      unit();
    }
  }
  completedAnswers.push(indexOfQuestion);
}

// закончить игру
function quizOver() {
  console.log('over');
  document.querySelector('.quiz-over-modal').classList.add('show');
}
