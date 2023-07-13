const clickBtns = document.querySelectorAll(
  "input[type='button']:not(.not-displayed)"
);
const displayFiled = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalBtn = document.getElementById("equal");
clickBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayFiled.value += btn.value;
  });
});

clearBtn.addEventListener("click", () => {
  displayFiled.value = "";
});

deleteBtn.addEventListener("click", () => {
  displayFiled.value = displayFiled.value.slice(0, -1);
});

equalBtn.addEventListener("click", DisplayResult);
displayFiled.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    DisplayResult();
  }
});

function DisplayResult() {
  displayFiled.value = eval(displayFiled.value);
}
