import quizQuestions from './quizQuestions.js';

const refs = {
  optionsList: document.querySelector('.options'),
  question: document.querySelector('.question'),
  numberOfquestion: document.querySelector('.number-of-question'),
  numberOfAllquestion: document.querySelector('.number-of-all-questions'),
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
  btnHelpFifty: document.querySelector('.js-fifty'),
  btnAskAudience: document.querySelector('.js-audience'),
  help: document.querySelector('[data-value="answer"]'),
  gameOverText: document.querySelector('[data-value="js-over-text"]'),
};

window.addEventListener('load', randomQuestion);
refs.optionsList.addEventListener('click', checkAnswer);
refs.btnCloseModal.addEventListener('click', closeModal);
refs.btnFinish.addEventListener('click', closeModal);
refs.btnTryAgain.addEventListener('click', tryAgain);
refs.btnHelpFriend.addEventListener('click', callToFriend);
refs.btnHelpFifty.addEventListener('click', helpFiftyFifty);
refs.btnAskAudience.addEventListener('click', askAudience);

let indexId = 0;
let indexOfQuestion;
let indexOfPage = 0;
let score = 0; //результат викторины
let money = 0;

refs.numberOfAllquestion.innerHTML = quizQuestions.length;


// аудио
function soundClick(src, play) {
  const audio = new Audio();
  audio.src = src;
  audio.autoplay = play; 
  }

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
          `<li class="option option-items card col-sm-12 col-md-4 col-lg-5" data-id="${indexId++}">
          <span>${option.slice(0,3)}</span> ${option.split(' ').splice(1,4).join(' ')}
            </li>`,
      )
      .join('');
  }

  // следующая страница
  indexId = 0;
  refs.numberOfquestion.innerHTML = indexOfPage + 1;
  refs.totalMoney.innerHTML = money;
  indexOfPage += 1;
};

// вопросы рандомно
let completedAnswers = [];

function randomQuestion() {
  let randomNum = Math.floor(Math.random() * quizQuestions.length);
  let hitDublicate;

  if (indexOfPage == quizQuestions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      hitDublicate = completedAnswers.some(num => num == randomNum);
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
      soundClick('sourse/khsm_q1-5-correct-o.mp3', true)
      setTimeout(() => {
        randomQuestion();
        enableOptions();
      }, 500);
    }, 300);

    score += 1;
    money += 100000;
    console.log(money);

  } else {
    evt.target.classList.add('value');
    setTimeout(() => {
    evt.target.classList.remove('value');
    evt.target.classList.add('wrong');
    soundClick('sourse/khsm_q1-5-wrong.mp3', true);
    setTimeout(() => {
      quizOver();
    }, 1000);
    }, 500);
  }
  disabledOptions();
}

const disabledOptions = () => {
  let items = document.querySelectorAll('.option')
  items.forEach(item=> {
    if(item.dataset.id == quizQuestions[indexOfQuestion].rightAnswer) {
      setTimeout(() => {
        item.classList.add('correct')
      }, 500);
    }
  })
  refs.optionsList.classList.add('disabled');
};

function enableOptions() {
  refs.optionsList.classList.remove('disabled', 'correct', 'wrong');
}

// блок подсказок
function callToFriend() {
  soundClick('sourse/khsm_phone_end.mp3', true)
  let randomNum = Math.floor(Math.random() * 3);
  indexOfQuestion = completedAnswers[completedAnswers.length - 1];
  refs.help.innerHTML = `Я думаю ответ <b>${quizQuestions[indexOfQuestion]?.options[randomNum]}</b> &#128515;`;

  document.querySelector('.task-over-modal').classList.add('show');
  refs.btnHelpFriend.classList.add('disabled');
}

function helpFiftyFifty() {
  let item = document.querySelectorAll('.option')
  let answerId = quizQuestions[indexOfQuestion].rightAnswer;
  let itemId = 0;
  let itemId2 = 1;

  if(itemId == answerId) {
    itemId += 1;
    if(itemId == itemId2) itemId += 1;
  } else if (itemId2 == answerId) {
    itemId2 +=1
  }

  item[itemId].classList.add('opacity');
  item[itemId2].classList.add('opacity');
  refs.btnHelpFifty.classList.add('disabled');
}

function askAudience() {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 100);
  let d = Math.floor(Math.random() * 100);

  const createList = (a,b,c,d) => {
    soundClick('sourse/khsm_phone_end.mp3', true)
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
  soundClick('sourse/q6-2000-clock.mp3', true)

//  refs.gameOverText.innerHTM = `«Никогда не сдавайся, даже когда должен». — Келли Криг`
 document.querySelector('.quiz-over-modal').classList.add('show');
}

function closeModal() {
  document.querySelector('.quiz-over-modal').classList.remove('show');
  document.querySelector('.task-over-modal').classList.remove('show');
}

function tryAgain() {
  window.location.reload();
}