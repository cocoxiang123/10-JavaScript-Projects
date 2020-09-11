const img_Container = document.getElementById("image-container");
const imgs = document.querySelectorAll("#image-container img");

let index = 0;
console.log(imgs);
function display() {
  index++;
  if (index > imgs.length - 1) {
    index = 0;
  }
  img_Container.style.transform = `translateX(${-index * 400}px)`;
}
setInterval(display, 1500);
