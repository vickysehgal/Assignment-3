// Get the form and list elements
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add an event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
});

// Add an event listener to the list
todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
