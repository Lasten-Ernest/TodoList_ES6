import './style.css';

const ListOfTasks = [
  {
    index: 0,
    description: 'Go to store',
    completed: true,
  },
  {
    index: 1,
    description: 'Clean the plates',
    completed: true,
  },
  {
    index: 2,
    description: 'Eat mangoes',
    completed: true,
  },
];

const activity = document.querySelector('.todo_list');

ListOfTasks.forEach((task) => {
  activity.innerHTML += ` <li> <input type="checkbox"> <span>${task.description}</span> <i class="fa-solid fa-ellipsis-vertical"></i>
                        </li> `;
});