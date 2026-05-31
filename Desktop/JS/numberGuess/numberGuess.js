// JS file
  const inputEl = document.querySelector("#input");
  const resultEl = document.querySelector("#result");
  const guessEl = document.querySelector("#guess");
  const clickEl = document.querySelector("#clicks");

  let randomNum = Math.floor(Math.random() * 100);
  let clicks = 0;
      //console.log(randomNum);
      guessEl.addEventListener("click", () => {
    clicks++;
  clickEl.innerHTML = clicks;
  let input = Number(inputEl.value);
  console.log(input);

  if (input == randomNum) {
    resultEl.innerHTML = "You Win";
        } else if (input > randomNum) {
    resultEl.innerHTML = "guess the lower number";
        } else if (input < randomNum) {
    resultEl.innerHTML = "guess the higher number";
        }
      });
