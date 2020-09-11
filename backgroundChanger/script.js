const btn = document.getElementById("btn");

btn.addEventListener("click", bgChanger);

function bgChanger() {
  document.body.style.background = randomBg();
}

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
}
