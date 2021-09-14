import "./style.css";
import "./components/header/header.sass";
import "./components/main/main.sass";
import "./components/footer/footer.sass";

const timer = document.getElementsByClassName("main__timer");
let [minutes, seconds] = timer[0].getAttribute("data-timer").split(":");
seconds = Number(minutes) * 60 + Number(seconds);
let timerId = setInterval(() => {
  if (seconds > 0) {
    timer[0].textContent =
      Math.trunc(seconds / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      (seconds % 60).toString().padStart(2, "0");
    seconds--;
  } else {
    clearInterval(timerId);
    location = location;
  }
}, 1000);
