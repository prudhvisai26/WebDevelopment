const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
function setDate() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = date.getMinutes();
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  hourHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hours = date.getHours();
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(secondsDegree, hoursDegree, minuteDegree);
}

setInterval(setDate, 1000);
setDate();
