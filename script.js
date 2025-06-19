let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = timeToString(elapsedTime);
    }, 1000);
    running = true;
    document.querySelector(".buttons button").textContent = "Pause";
  } else {
    clearInterval(timerInterval);
    running = false;
    document.querySelector(".buttons button").textContent = "Start";
  }
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  elapsedTime = 0;
  running = false;
  document.querySelector(".buttons button").textContent = "Start";
}

function lap() {
  if (running) {
    const lapTime = timeToString(elapsedTime);
    const li = document.createElement("li");
    li.textContent = "Lap: " + lapTime;
    document.getElementById("laps").appendChild(li);
  }
}