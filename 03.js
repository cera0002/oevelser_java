let greeting = "Hello";
console.log(greeting);

let randomTal = Math.floor(Math.random() * 11);
let forsoeg = 0;

const input = document.querySelector("#tal");
const gætKnap = document.querySelector("#gætKnap");
const besked = document.querySelector("#besked");

function tjekGæt() {
  let brugerGæt = Number(input.value);
  forsoeg++;

  if (brugerGæt === randomTal) {
    besked.textContent = `Tillykke! Du gættede rigtigt efter ${forsoeg} forsøg. Vil de gætte igen?`;
    resetSpil();
  } else if (brugerGæt < randomTal) {
    besked.textContent = "For lavt! Prøven igen.";
  } else {
    besked.textContent = "For højt! Prøv igen.";
  }
}

function resetSpil() {
  if (confirm("Vil du prøve igen?.")) {
    randomTal = Math.floor(Math.random() * 11);
    besked.textContent = "";
    input.value = "";
  }
}

gætKnap.addEventListener("click", tjekGæt);
