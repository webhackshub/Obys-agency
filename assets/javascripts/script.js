const loader = () => {
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
};
// loader();

const reelController = () => {
  const controllerCount = 0;
  const controllerPlay = document.querySelector(".play");
  const controllerPause = document.querySelector(".pause");

  if (controllerCount === 0) {
    controllerPause.style.display = "none";
  } else {
    controllerPlay.style.display = "none";
  }
};
reelController();
