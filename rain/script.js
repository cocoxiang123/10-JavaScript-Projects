function createRain() {
  const rain = document.createElement("div");
  rain.innerText = "❤️";
  rain.classList.add("rain");
  rain.style.left = Math.random() * 100 + "vw";
  rain.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(rain);
  setTimeout(() => {
    rain.remove();
  }, 5000);
}

setInterval(createRain, 300);
