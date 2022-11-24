let displayTimer = document.querySelector(".time > span");
let clock = document.querySelector(".clock");

let hour = 0;
let min = 0;
let sec = 0;
let mili = 0;

let rot = 0;

let id = null;
let click = 0;

document.querySelector("button#start").addEventListener("click", () => {
  click += 1;

  if (click == 1) {
    startTime();
  } else {
    return false;
  }
});

document.querySelector("button#stop").addEventListener("click", stopTimer);

document
  .querySelector("button#restart")
  .addEventListener("click", restartTimer);

function startTime() {
  count();
  clock.classList.add("clock-animate");
  id = setInterval(count, 17.5);
}

function stopTimer() {
  clock.classList.remove("clock-animate");
  clearInterval(id);
  click = 0;
}

function restartTimer() {
  sec = 0;
  min = 0;
  hour = 0;
  rot = 0;
  click = 0;

  clock.classList.remove("clock-animate");
  clearInterval(id);

  clock.style.transform = `rotate(${rot}deg)`;
  displayTimer.innerHTML = "00:00:00:00";
}

function checkDigit(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function count() {
  mili++;

  if (mili == 60) {
    mili = 0;
    sec++;

    if (sec == 60) {
      sec = 0;
      min++;
    }

    if (min == 60) {
      min = 0;
      hour++;
    }

    if (hour == 24) {
      hour = 0;
    }
  }

  rot += 1;
  clock.style.transform = `rotate(${rot}deg)`;

  let timer =
    checkDigit(hour) +
    ":" +
    checkDigit(min) +
    ":" +
    checkDigit(sec) +
    ":" +
    checkDigit(mili);
  displayTimer.innerHTML = timer;
}
