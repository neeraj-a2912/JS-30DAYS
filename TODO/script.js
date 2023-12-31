const allTodos = document.getElementById("allTasks");
const addTodo = document.getElementById("addTodo");
const todoInput = document.getElementById("newTask");

const addNewTask = (e) => {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("card");
  todoDiv.classList.add("mb-2");
  const newTodo = document.createElement("div");
  newTodo.innerText = todoInput.value;
  console.log(todoInput.value);
  newTodo.classList.add("card-body");
  todoDiv.appendChild(newTodo);
  allTodos.append(todoDiv);
  todoInput.value = "";
};

addTodo.addEventListener("click", addNewTask);
