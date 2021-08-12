const start = document.getElementById("start");
const pause = document.getElementById("pause");
const displayTime = document.getElementById("display");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const reset = document.getElementById("reset");
const para = document.getElementById("countdown");
const sound = document.getElementById("sound");
const resume = document.getElementById("resume");
const musicSound = new Audio("timer.mp3");
const wow = 0;
start.addEventListener("click", function () {
  const hoursValue = hours.value;
  const minutesValue = minutes.value;
  const secondsValue = seconds.value;
  displayTime.value = hoursValue + ":" + minutesValue + ":" + secondsValue;
  let startinghours = hours.value * 3600;
  let startingminutes = minutes.value * 60;
  let startingseconds = seconds.value * 1;
  let totalSec = startinghours + startingminutes + startingseconds;
  let myinterval = setInterval(timer, 1000);
  pause.addEventListener("click", function () {
    clearInterval(myinterval);
  });
  resume.addEventListener("click", function () {
    myinterval = setInterval(timer, 1000);
  });
  function timer() {
    const newhours = Math.floor(totalSec / 3600);
    const newminutes = Math.floor((totalSec / 60) % 60);
    const newseconds = totalSec % 60;
    displayTime.value = `${newhours}:${newminutes}:${newseconds}`;
    if (totalSec > 0) totalSec--;
    if (totalSec === 0) musicSound.play();
  }
  reset.addEventListener("click", function () {
    window.location.reload();
  });
});
