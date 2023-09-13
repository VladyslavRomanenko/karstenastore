function startTimer(timerElement) {
  const hoursElement = timerElement.querySelector(".hours");
  const minutesElement = timerElement.querySelector(".minutes");
  const secondsElement = timerElement.querySelector(".seconds");

  let hours = localStorage.getItem("timerHours") || 7;
  let minutes = localStorage.getItem("timerMinutes") || 27;
  let seconds = localStorage.getItem("timerSeconds") || 34;

  const interval = setInterval(function () {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      timerElement.style.display = "none";
    } else {
      if (seconds === 0) {
        if (minutes === 0) {
          hours--;
          minutes = 59;
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }

      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  }, 1000);
}

const timerElements = document.querySelectorAll(".timer");
timerElements.forEach(function (timerElement) {
  startTimer(timerElement);
});

// slider
const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) {
    currentIndex = slider.children.length - 1;
  } else if (index >= slider.children.length) {
    currentIndex = 0;
  }
  const translateX = -currentIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex--;
  goToSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  goToSlide(currentIndex);
});

setInterval(() => {
  currentIndex++;
  goToSlide(currentIndex);
}, 5000);
