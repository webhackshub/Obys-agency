let count = 0;
let counter = document.querySelector(".counter");
let countInterval = setInterval(() => {
  if (count < 100) {
    counter.textContent = count++;
  } else {
    counter.textContent = count;
    clearInterval(countInterval);
  }
}, 25);