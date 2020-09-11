const track = ["long", "mid", "short"];

track.forEach((sound) => {
  //create elements
  const btn = document.createElement("button");
  const audio = document.createElement("audio");
  audio.setAttribute("id", sound);
  btn.classList.add("btn");

  //load sound
  btn.innerText = sound;
  audio.src = `sound/${sound}.mp3`;

  //btn event listener
  btn.addEventListener("click", () => {
    stopSound();
    audio.play();
  });
  //append sound
  document.body.appendChild(btn);
  document.body.appendChild(audio);
});

function stopSound() {
  track.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
