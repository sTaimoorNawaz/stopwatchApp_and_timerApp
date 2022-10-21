// time set
const time = document.getElementById("times");

// btn works
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let min = 2;
let sec = 60;
let interval;

function timer() {
  sec--;
  if (sec === 0) {
    sec = 60;
  }
  if (sec === 60) {
    min--;
  }
  if (min === 0) {
    min = 0;
    sec = 0;
    clearInterval(interval);
  }
  time.innerHTML = `${min}m : ${sec}s`;
}

function Start() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  interval = setInterval(timer, 1000);
}
function Stop() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearInterval(interval);
}
function Reset() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  min = 2;
  sec = 60;
  time.innerHTML = `${min}m : ${sec}s`;
}
