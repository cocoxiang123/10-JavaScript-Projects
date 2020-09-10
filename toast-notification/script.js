const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = "Hello! Toast is here.";
  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
};
