const allTodos = document.getElementById("allTasks"); // parent div of all the todos
const addTodo = document.getElementById("addTodo"); // button to add a new todo
const todoInput = document.getElementById("newTask"); // input box to enter the text
const todoArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

// const deleteButton = document.getElementById("delete");
// const editButton = document.getElementById("edit");

// function to display date
// const displayDate = () => {
//   let date = new Date();
//   date = date.toString().split(" ");
//   document.getElementById("date").textContent =
//     date[1] + " " + date[2] + " " + date[3];
// };

// function to add a new task
const addNewTask = (e) => {
  e.preventDefault();
  if (todoInput.value.length === 0) {
    alert("task cannot be empty");
    return;
  }
  todoArray.push(todoInput.value); // pushing the input value into the array
  localStorage.setItem("todos", JSON.stringify(todoArray)); // updating the todoArray
  location.reload(); // reloading the page after adding a new todo
};

// function to display new all the todos
const displayItems = () => {
  let todos = "";
  for (let i = 0; i < todoArray.length; i++) {
    todos += `<div class="col-lg-4 col-md-6 col-sm-12">
<div class="card m-1">
  <div class="card-body d-flex justify-content-between">
    <p>${todoArray[i]}</p>
    <div class='edit-delete'>
        <span class="material-symbols-outlined mx-1" id="complete">
        delete
        </span>
    </div>
  </div>
</div>
</div>`;
  }
  allTodos.innerHTML = todos;
  activateCompleteButton();
};

const activateCompleteButton = () => {
  let completeButton = document.querySelectorAll("#complete");
  completeButton.forEach((cb, i) => {
    cb.addEventListener("click", (e) => {
      e.preventDefault();
      todoArray.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(todoArray)); // updating the todoArray
      location.reload();
    });
  });
};

addTodo.addEventListener("click", addNewTask);

window.onload = () => {
  displayItems();
};
