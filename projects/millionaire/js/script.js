import quizQuestions from './quizQuestions.js';

const refs = {
  optionsList: document.querySelector('.options'),
  question: document.querySelector('.question'),
  numberOfquestion: document.querySelector('.number-of-question'),
  numberOfAllquestion: document.querySelector('.number-of-all-questions'),
  answersTracker: document.querySelector('[data-value="answers-tracker"]'),
  correctAnswer: document.querySelector('[data-value="correct-answer"]'),
  totalMoney: document.querySelector('[data-value="total-money"]'),
  bank: document.querySelector('[data-value="bank"]'),
  btnCloseModal: document.querySelector('[data-value="close-modal"]'),
  btnTryAgain: document.querySelector('[data-value="btn-try-again"]'),
  btnHelpFriend: document.querySelector('.js-call'),
  btnHelpFifty: document.querySelector('.js-fifty'),
  btnAskAudience: document.querySelector('.js-audience'),
  help: document.querySelector('[data-value="answer"]'),
  gameOverText: document.querySelector('[data-value="js-over-text"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]')
};

window.addEventListener('load', renderQuestion);
refs.optionsList.addEventListener('click', checkAnswer);
refs.btnCloseModal.addEventListener('click', closeModal);
refs.btnTryAgain.addEventListener('click', tryAgain);
refs.btnHelpFriend.addEventListener('click', callToFriend);
refs.btnHelpFifty.addEventListener('click', helpFiftyFifty);
refs.btnAskAudience.addEventListener('click', askAudience);

let indexId = 0;
let indexOfQuestion = -1;
let indexOfPage = 0;
let score = 0; //result of game
let arrAfterFifty = [];
let textWinner = `Вы выиграли 1 000 000! <br/> "Чем больше трудностей в борьбе, тем и победа будет краше". <br/> Лопе де Вега`;
let textGameOver = `«Никогда не сдавайся, даже когда должен». Келли Криг`;
let textTimeOver = `Время вышло!`

refs.numberOfAllquestion.innerHTML = quizQuestions.length;

// timer
let countdown = 15 * 60 * 1000;
let timerId = setInterval(() => {
  countdown -= 1000;
  let mins = String(Math.floor(countdown / (60 * 1000))).padStart(2, '0');
  let secs = String(Math.floor((countdown - (mins * 60 * 1000)) / 1000)).padStart(2, '0');

  if (countdown <= 0) {
    quizOver(textTimeOver);
  } else {
    refs.mins.textContent = mins; 
    refs.secs.textContent = secs; 
  }

}, 1000); 

// audio
function soundClick(src, play) {
  const audio = new Audio();
  audio.src = src;
  audio.autoplay = play; 
  }

// start new game
const startGame = () => {
  arrAfterFifty = [];
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
  let money = quizQuestions[indexOfQuestion].money;
  refs.totalMoney.innerHTML = money;

  // next page
  indexId = 0;
  refs.numberOfquestion.innerHTML = indexOfPage + 1;
  indexOfPage += 1;
};

// questions 
let completedAnswers = [];

function renderQuestion() {
  let index = indexOfQuestion + 1;
  if (indexOfPage == quizQuestions.length) {
    soundClick('sourse/out-of-commercials-2008.mp3', true)
    quizOver(textWinner);
  } else if (completedAnswers.length >= 0) {
        indexOfQuestion = index;
        startGame();
    }
  completedAnswers.push(indexOfQuestion);
  userBank()
}

// guaranteed amount
function userBank() {
  let moneyInBank;
  if(completedAnswers.length == 6){
    moneyInBank = quizQuestions[4].money
     refs.bank.innerHTML = moneyInBank
     refs.help.innerHTML = 'Поздравляем! В банке первая несгораемая сумма - 1000$'
     document.querySelector('.task-over-modal').classList.add('show');
   }
   if (completedAnswers.length == 11){
    moneyInBank = quizQuestions[9].money
    refs.bank.innerHTML = moneyInBank
    refs.help.innerHTML = 'Поздравляем! Ваш выигрыш увеличился, в банке - 32000$'
    document.querySelector('.task-over-modal').classList.add('show');
   } 
}

// check answer
function checkAnswer(evt) {
 if(evt.target.nodeName !== 'LI') {
   return
 }
if (evt.target.dataset.id == quizQuestions[indexOfQuestion].rightAnswer) {
    evt.target.classList.add('value');
    setTimeout(() => {
      evt.target.classList.remove('value');
      evt.target.classList.add('correct');
      soundClick('sourse/khsm_q1-5-correct-o.mp3', true)
      setTimeout(() => {
        renderQuestion();
        enableOptions();
      }, 1000);
    }, 1000);

    score += 1;

  } else {
    evt.target.classList.add('value');
    setTimeout(() => {
    evt.target.classList.remove('value');
    evt.target.classList.add('wrong');
    soundClick('sourse/khsm_q1-5-wrong.mp3', true);
    setTimeout(() => {
      soundClick('sourse/q6-2000-clock.mp3', true)
      quizOver(textGameOver);
    }, 1000);
    }, 1000);
  }
  disabledOptions();
}

const disabledOptions = () => {
  let items = document.querySelectorAll('.option')
  let interval
  items.forEach(item=> {
    if(item.dataset.id == quizQuestions[indexOfQuestion].rightAnswer) {
      interval = setInterval(() => {
        item.classList.toggle('correct')
      }, 100);
    }
    setTimeout(() => {
      clearInterval(interval)
    }, 1000);
  })
  
  refs.optionsList.classList.add('disabled');
};

function enableOptions() {
  refs.optionsList.classList.remove('disabled', 'correct', 'wrong');
}

// help block
function callToFriend() {
  soundClick('sourse/khsm_phone_end.mp3', true)
  refs.btnHelpFriend.classList.add('disabled');
  let randomNum;
  if(arrAfterFifty.length != 0) {
    for (let index = 0; index < arrAfterFifty.length; index++) {
      randomNum = arrAfterFifty[index].dataset.id
      refs.help.innerHTML = `Я думаю ответ <b>${quizQuestions[indexOfQuestion]?.options[randomNum]}</b> &#128515;`;
    }
  } else {
    randomNum = Math.floor(Math.random() * 3);
    indexOfQuestion = completedAnswers[completedAnswers.length - 1];
    refs.help.innerHTML = `Я думаю ответ <b>${quizQuestions[indexOfQuestion]?.options[randomNum]}</b> &#128515;`;
  }
  document.querySelector('.task-over-modal').classList.add('show');
}

function helpFiftyFifty() {
  soundClick('sourse/khsm_50-50.mp3', true)
  refs.btnHelpFifty.classList.add('disabled');
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

  item.forEach(item => {
    if(!item.classList.contains('opacity')) {
     arrAfterFifty.push(item);
     return(arrAfterFifty);
    }
  })
}

function askAudience() {
  refs.btnAskAudience.classList.add('disabled');
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 100);
  let d = Math.floor(Math.random() * 100);
  let list = createList(a, b, c, d);

  if(arrAfterFifty.length != 0){
    let id1 = arrAfterFifty[0].dataset.id 
    let id2 = arrAfterFifty[1].dataset.id

      if ((id1 == 0 && id2 == 1) || (id1 == 1 && id2 == 0)) {
        list = createList(a, b, c = ' ', d = ' ');
      }
      else if ((id1 == 0 && id2 == 2) || (id1 == 2 && id2 == 0)) {
        list = createList(a, b = ' ', c, d = ' ');
      }
      else if ((id1 == 0 && id2 == 3) || id1 == 3 && id2 == 0) {
        list = createList(a, b = ' ', c = ' ', d);
      }
      else if ((id1 == 2 && id2 == 1) || (id1 == 1 && id2 == 2)) {
        list = createList(a = ' ', b, c, d = ' ');
      }
      else if ((id1 == 2 && id2 == 3) || (id1 == 3 && id2 == 2)) {
        list = createList(a = ' ', b = ' ', c, d);
      }
      else if ((id1 == 3 && id2 == 1) || (id1 == 1 && id2 == 3)) {
        list = createList(a = ' ', b, c = ' ', d);
      } else {
        createList(a, b, c, d)
      }
  };

  function createList(a,b,c,d) {
    soundClick('sourse/khsm_phone_end.mp3', true)
    return  (`
      А: ${a}%
      <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${a}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      В: ${b}%
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${b}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      С: ${c}%
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${c}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      D: ${d}%
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${d}%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
          `);
  };
  
  refs.help.innerHTML = list
  document.querySelector('.task-over-modal').classList.add('show');
}

// game over
function quizOver(listOver) {
clearInterval(timerId);
refs.gameOverText.innerHTML = listOver;
 document.querySelector('.quiz-over-modal').classList.add('show');
}

function closeModal() {
  document.querySelector('.task-over-modal').classList.remove('show');
}

function tryAgain() {
  window.location.reload();
}