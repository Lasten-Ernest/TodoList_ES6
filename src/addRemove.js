import editTask from "../modules/editTask.js";
const add_task = document.querySelector('.form');
const todo_input = document.querySelector('.task_input');
const displayTask = document.querySelector('.todos_list');

let todos = JSON.parse(localStorage.getItem('task_input'));
const displayTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo) => {
      const flag = todo.completed ? 'checked':'';
      li += ` <li class="list-info">
          <div class="check">
            <label for="">
              <input type="checkbox" ${flag} class="check" data-check="${todo.index}"/>
              <input type="text" class="todo-input style" data-desc="${todo.index}" value="${todo.description}" />
            </label>
          </div>
          <div class="icon">
          <i class="fa-solid fa-trash" id="${todo.index}"></i>
          </div>
        </li>`;
    });
  }
  displayTask.innerHTML = li;
};
displayTodo();

add_task.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = todo_input.value.trim();
  todo_input.value = '';
  if (!userInput) return;
  if (!todos) {
    todos = [];
  }
  const task = {
    description: userInput,
    completed: false,
    index: todos.length,
  };
  todos.push(task);
  localStorage.setItem('task_input', JSON.stringify(todos));
  displayTodo();
});

const removeTask = (index) => {
  const newArr = todos.filter((element) => element.index !== index);
  todos.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });

  todos.push(...newArr);
  localStorage.setItem('task_input', JSON.stringify(todos));
  displayTodo();
};

displayTask.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

displayTask.addEventListener('click', editTask);
