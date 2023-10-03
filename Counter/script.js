let counter = document.getElementById("number");
let current = 0;

if (current < 0) {
  document.body.style.backgroundColor = "red";
}

const increment = document.getElementById("increment");
increment.addEventListener("click", function () {
  current++;
  counter.textContent = current;
});

const decrement = document.getElementById("decrement");
decrement.addEventListener("click", function () {
  current--;
  counter.textContent = current;
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  current = 0;
  counter.textContent = current;
});


