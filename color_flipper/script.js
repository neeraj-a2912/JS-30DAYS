const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const flipper = document.getElementById("flipper");
const hexValue = document.getElementById("hex");

flipper.addEventListener("click", function () {
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = color;
  hexValue.innerText = color;
});
