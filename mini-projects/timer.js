const countdownElement = document.getElementById('minutes');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let countSec;
let countMin;
let selectedMinutes = 20;
let myInterval;

function setMinutes(value) {
    selectedMinutes = value;
    reset();
}

function formatCountdown(value) {
  return  (value+'').padStart(2,'0');
}

function update() {
    if (countSec == 0 || countSec == 60) {
        countMin--;
        countSec=60;
    }
    countSec--;
    
    if (countMin == 0) {
        stop()
    }
    
    countdownElement.innerHTML = `${formatCountdown(countMin)}:${formatCountdown(countSec)}`;
}

function start() {
    startButton.setAttribute('disabled', true);
    stopButton.removeAttribute('disabled');
    myInterval = setInterval(update, 1000);
}

function stop() {
    stopButton.setAttribute('disabled', true);
    startButton.removeAttribute('disabled');
    clearInterval(myInterval);
}

function reset() {
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', true);
    if (myInterval) {
        stop();
    }

    countSec = 60;
    countMin = selectedMinutes;
    countdownElement.innerHTML = `${formatCountdown(countMin)}:00`;
}

reset();