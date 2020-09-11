const btn = document.getElementById("toggle-btn-container");

btn.addEventListener("click", switchMode);

function switchMode(e) {
  document.body.classList.toggle("dark", e.target.checked);
}
