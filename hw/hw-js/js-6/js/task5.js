const field = document.querySelector('[id="field"]');
const ball = document.querySelector('[id="ball"]')
console.log(field);
console.log(ball);

field.addEventListener('click', getCoords);

function getCoords(evt){
    console.log(evt);
    console.log(field.getBoundingClientRect());

    const fieldCoords = field.getBoundingClientRect();
    let ballCoords = {
        left: evt.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,
        top: evt.clientY -fieldCoords.top - field.clientTop - ball.clientHeight / 2,

    }
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    if (ballCoords.left < 0) ballCoords.left = 0;
    
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

