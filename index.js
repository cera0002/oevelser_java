let greeting = "Hello";
console.log(greeting);

//opretter global konstanter

const sprite = document.querySelector("#sprite");
const squash = document.querySelector("#squash");
const snaps = document.querySelector("#snaps");
const ol = document.querySelector("#ol");

function tjekAlkohol(event) {
  if (this.alt === "alkohol") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

sprite.addEventListener("click", tjekAlkohol);
squash.addEventListener("click", tjekAlkohol);
snaps.addEventListener("click", tjekAlkohol);
ol.addEventListener("click", tjekAlkohol);
