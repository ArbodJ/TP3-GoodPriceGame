const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const btn = document.querySelector("button");
const error = document.getElementById("error");
const nbRandom = Math.floor(Math.random() * 101);
let n = 0;
let number;
console.log(nbRandom);

let checkNumber = (nbr) => {
  const answer = document.getElementById("answer");
  if (nbr < nbRandom) {
    answer.textContent = `#${n} - (${nbr}) - C'est plus ! `;
    answer.className = "more";
  } else if (nbr > nbRandom) {
    answer.textContent = `#${n} - (${nbr}) - C'est moins ! `;
    answer.className = "less";
  } else {
    answer.textContent = `#${n} - (${nbr}) - C'est GAGNÉ ! `;
    answer.className = "win";
    input.disabled = true;
  }
};

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.opacity = "1";
  } else {
    error.style.opacity = "0";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    isNaN(input.value) ||
    input.value == "" ||
    !input.value.match(/[0-9]\b/)
  ) {
    input.style.background = "red";
  } else {
    input.style.background = "revert";
    n++;
    number = input.value;
    input.value = null;
    checkNumber(number);
  }
});
