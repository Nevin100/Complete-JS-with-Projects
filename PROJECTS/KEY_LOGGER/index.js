const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

startbtn.addEventListener("click", () => {
  document.addEventListener("keyup", handleup);
  document.addEventListener("keydown", handledown);
  startbtn.disabled = true;
  stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
  document.removeEventListener("keyup", handleup);
  document.removeEventListener("keydown", handledown);
  logdiv.textContent = "";
  statediv.textContent = " ";
  stopbtn.disabled = true;
  startbtn.disabled = false;
});

function handleup(e) {
  logdiv.textContent = `key ${e.key} is pressed`;
  statediv.textContent = `key is up `;
}

function handledown(e) {
  logdiv.textContent = `key ${e.key} is pressed`;
  statediv.textContent = `key is down `;
}
