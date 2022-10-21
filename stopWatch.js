const dMin = document.getElementById("displayMin");
const dSec = document.getElementById("displaySec");
const dMsec = document.getElementById("displayMsec");
const startbtn = document.getElementById("startbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");

let min = 0;
let sec = 0;
let msec = 0;
let interval;

function timer() {
  msec++;
  dMsec.innerHTML = msec;
  if (msec === 99) {
    msec = 0;
    sec++;
    dSec.innerHTML = sec;
  }
  if (sec === 59) {
    sec = 0;
    min++;
    dMin.innerHTML = min;
  }
}

function startTimer() {
  interval = setInterval(function () {
    timer();
  }, 10);

  startbtn.disabled = true;
  pausebtn.disabled = false;
  resetbtn.disabled = false;
}

function pauseTimer() {
  // To stop set interval so defined clear interval
  clearInterval(interval);
  startbtn.disabled = false;
  pausebtn.disabled = true;
  resetbtn.disabled = false;
}

function resetTimer() {
  min = 0;
  sec = 0;
  msec = 0;
  dMin.innerHTML = min;
  dSec.innerHTML = sec;
  dMsec.innerHTML = msec;
  clearInterval(interval);
  startbtn.disabled = false;
  pausebtn.disabled = true;
  resetbtn.disabled = true;
}
