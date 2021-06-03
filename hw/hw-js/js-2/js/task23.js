import quizQuestions from './quizQuestions.js';

const refs = {
  optionsList: document.querySelector('.options'),
  optionElement: document.querySelector('.option'),
  question: document.querySelector('.question'),
  numberOfquestion: document.querySelector('.number-of-question'),
  numberOfAllquestion: document.querySelector('.number-of-all-questions'),
  btnNext: document.querySelector('[data-value="btn-next"]'),
  goOnNext: document.querySelector('[data-value="btn-go-on"]'),
  answersTracker: document.querySelector('[data-value="answers-tracker"]'),
  correctAnswer: document.querySelector('[data-value="correct-answer"]'),
  totalMoney: document.querySelector('[data-value="total-money"]'),
  numberOfAllquestion2: document.querySelector(
    '[data-value="number-of-all-questions-2"]',
  ),
  btnCloseModal: document.querySelector('[data-value="close-modal"]'),
  btnFinish: document.querySelector('[data-value="close-modal-finish"]'),
  btnTryAgain: document.querySelector('[data-value="btn-try-again"]'),
};

window.addEventListener('load', randomQuestion);
refs.optionsList.addEventListener('click', checkAnswer);
refs.btnNext.addEventListener('click', validate);
refs.goOnNext.addEventListener('click', randomQuestion);
refs.btnCloseModal.addEventListener('click', closeModal);
refs.btnFinish.addEventListener('click', closeModal);
refs.btnTryAgain.addEventListener('click', tryAgain);

let indexId = 0;
let indexOfQuestion;
let indexOfPage = 0;
let score = 0; //результат викторины
let money = 0;

refs.numberOfAllquestion.innerHTML = quizQuestions.length;

// блок с вопросами
const startGame = () => {
  refs.question.innerHTML = quizQuestions[indexOfQuestion].question;
  const list = createList(quizQuestions[indexOfQuestion].options);
  refs.optionsList.innerHTML = list;
  enableOptions();
  function createList(items) {
    return items
      .map(
        option =>
          `<li class="option option-items card col-5" data-id="${indexId++}">
                ${option}
            </li>`,
      )
      .join('');
  }

  // следующая страница
  indexId = 0;
  refs.numberOfquestion.innerHTML = indexOfPage + 1;
  indexOfPage += 1;
};

// вопросы рандомно
let completedAnswers = [];

function isGoOn() {
  document.querySelector('.task-over-modal').classList.add('show');
}

function randomQuestion() {
  let randomNum = Math.floor(Math.random() * quizQuestions.length);
  let hitDublicate;

  if (indexOfPage == quizQuestions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      hitDublicate = completedAnswers.some(num => num == randomNum);
      console.log(hitDublicate);
      if (hitDublicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNum;
        startGame();
      }
    }
    if (completedAnswers == 0) {
      indexOfQuestion = randomNum;
      startGame();
    }
  }
  completedAnswers.push(indexOfQuestion);
}

// выбор варианта ответа
function checkAnswer(evt) {
  if (evt.target.dataset.id == quizQuestions[indexOfQuestion].rightAnswer) {
    evt.target.classList.add('correct');
    score += 1;
    money += 100;
  } else {
    evt.target.classList.add('wrong');
  }
  disabledOptions();
}

const disabledOptions = () => {
  refs.optionsList.classList.add('disabled');
};

function enableOptions() {
  refs.optionsList.classList.remove('disabled', 'correct', 'wrong');
}

function validate() {
  if (!refs.optionsList.classList.contains('disabled')) {
    alert('Нужно выбрать один вариант ответа');
  } else {
    randomQuestion();
    enableOptions();
  }
}

// закончить игру
function quizOver() {
  document.querySelector('.quiz-over-modal').classList.add('show');
  refs.correctAnswer.innerHTML = score;
  refs.totalMoney.innerHTML = money;
  refs.numberOfAllquestion2.innerHTML = quizQuestions.length;
}

function closeModal() {
  document.querySelector('.quiz-over-modal').classList.remove('show');
  document.querySelector('.task-over-modal').classList.remove('show');
}

function tryAgain() {
  window.location.reload();
}
