import quizQuestions from './quizQuestions.js';

const refs = {
  optionsList: document.querySelector('.options'),
  question: document.querySelector('.question'),
  numberOfquestion: document.querySelector('.number-of-question'),
  numberOfAllquestion: document.querySelector('.number-of-all-questions'),
  btnNext: document.querySelector('[data-value="btn-next"]'),
  answersTracker: document.querySelector('[data-value="answers-tracker"]'),
  correctAnswer: document.querySelector('[data-value="correct-answer"]'),
  totalMoney: document.querySelector('[data-value="total-money"]'),
  numberOfAllquestion2: document.querySelector(
    '[data-value="number-of-all-questions-2"]',
  ),
  btnCloseModal: document.querySelector('[data-value="close-modal"]'),
  btnFinish: document.querySelector('[data-value="close-modal-finish"]'),
  btnTryAgain: document.querySelector('[data-value="btn-try-again"]'),
  btnHelpFriend: document.querySelector('.js-call'),
  btnAskAudience: document.querySelector('.js-audience'),
  help: document.querySelector('[data-value="answer"]'),
};

window.addEventListener('load', randomQuestion);
refs.optionsList.addEventListener('click', checkAnswer);
refs.btnNext.addEventListener('click', validate);
refs.btnCloseModal.addEventListener('click', closeModal);
refs.btnFinish.addEventListener('click', closeModal);
refs.btnTryAgain.addEventListener('click', tryAgain);
refs.btnHelpFriend.addEventListener('click', callToFriend);
refs.btnAskAudience.addEventListener('click', askAudience);

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
    evt.target.classList.add('value');
    setTimeout(() => {
      evt.target.classList.remove('value');
      evt.target.classList.add('correct');
    }, 2000);

    score += 1;
    money += 100;

  } else {
    evt.target.classList.add('value');
    setTimeout(() => {
    evt.target.classList.remove('value');
    }, 2000);
  }
  disabledOptions();
}

const disabledOptions = () => {
  let items = document.querySelectorAll('.option')
  items.forEach(item=> {
    if(item.dataset.id == quizQuestions[indexOfQuestion].rightAnswer) {
      setTimeout(() => {
        item.classList.add('correct')
      }, 2000);
    }
  })
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

// блок подсказок
function callToFriend() {
  let randomNum = Math.floor(Math.random() * quizQuestions.length);
  indexOfQuestion = completedAnswers[completedAnswers.length - 1];
  refs.help.innerHTML = quizQuestions[indexOfQuestion].options[randomNum];

  document.querySelector('.task-over-modal').classList.add('show');
  refs.btnHelpFriend.classList.add('disabled');
}

function askAudience() {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 100);
  let d = Math.floor(Math.random() * 100);

  const createList = (a,b,c,d) => {
    return  (`
    А ${a}%
    <div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${a}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
В ${b}%
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${b}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
С ${c}%
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${c}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
D ${d}%
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${d}%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    `)

  };
  const list = createList(a, b, c, d);
  refs.help.innerHTML = list
  document.querySelector('.task-over-modal').classList.add('show');
  refs.btnAskAudience.classList.add('disabled');
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
