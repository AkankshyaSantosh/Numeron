var number1 = Math.round(Math.random() * 100)
const number1box = document.getElementById("number1")
number1box.innerHTML = number1

var number2 = Math.round(Math.random() * 100)
const number2box = document.getElementById("number2")
number2box.innerHTML = number2

var greaterTHAN = document.getElementById("greater-than")
var equalTO = document.getElementById("equal-to")
var lesserTHAN = document.getElementById("lesser-than")

var score = 0

greaterTHAN.onclick = () => {
    if(number1 > number2){
score++;
resetTime(timerId)
    }else{
        location.href = "./gameover.html"
    }


number1 = Math.round(Math.random() * 100)
number1box.innerHTML = number1
number2 = Math.round(Math.random() * 100)
number2box.innerHTML = number2
}

lesserTHAN.onclick = () => {
    if(number1 < number2){
score++;
resetTime(timerId)
    }else{
        location.href = "./gameover.html"
    }


number1 = Math.round(Math.random() * 100)
number1box.innerHTML = number1
number2 = Math.round(Math.random() * 100)
number2box.innerHTML = number2
}

equalTO.onclick = () => {
    if(number1 == number2){
score++;
resetTime(timerId)
    }else{
        location.href = "./gameover.html"
    }


number1 = Math.round(Math.random() * 100)
number1box.innerHTML = number1
number2 = Math.round(Math.random() * 100)
number2box.innerHTML = number2
}

var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  time = 3 ;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "./gameover.html?score" + score;
    }
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

