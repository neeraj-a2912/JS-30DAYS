const inputValue = document.getElementById("task");
const taskList = document.getElementById("task-list");

const addTask = () => {
  let li = document.createElement("li");
  console.log(inputValue.value);
  li.innerHTML = inputValue.value;
  taskList.appendChild(li);
  inputValue.value = "";
};
