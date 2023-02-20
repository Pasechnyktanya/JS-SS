// спочатку локстор, бо не буде працювати
window.onload = loadTasks; // метод завантажує завдання у приватну пам’ять сеансу.
// в формі додати завданнЯ
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // !!!метод об'єкту Event який зупиняє стандартну подію браузера
  addTask();
});
 // витягти завдання з лоестор і перетворити їх на масив(стандарт)
// для кожної функції всередині створювати - інакше перезавантажується при кожному введені таски
const tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
// перевірити, чи має localStorage якісь завдання
// якщо ні, то повернути
function loadTasks() {
  const tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  if (localStorage.getItem("tasks") === null) return;
 
  // подивитися таску і додати їх до списку
  tasks.forEach((task) => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
    }>
     <input type="text" value="${task.task}" class="task ${
      task.completed ? "completed" : ""
    }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
     <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}
function addTask() {
  const task = document.querySelector("form input");
  const list = document.querySelector("ul");
  // вернути якщо порожнє
  if (task.value === "") {
    alert("Завдання треба записати!!!");
    return false;
  }
  // первірити може вже є таке завдання
  if (document.querySelector(`input[value="${task.value}"]`)) {
    alert("Завдання вже є!!!");
    return false;
  }
  // додати таску до локстор
  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      { task: task.value, completed: false },
    ])
  );
  // створити елемент списку, додати текст і додати до ul
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
 <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
 <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
  // почистити
  task.value = "";
}
function taskComplete(event) {
  tasks.forEach((task) => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}
function removeTask(event) {
  const tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task) => {
    if (task.task === event.parentNode.children[1].value) {
      tasks.splice(tasks.indexOf(task), 1); // видалити завдання(ще раз заново написати код)
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}

let currentTask = null; // зберігати поточне завдання щоб відстежувати зміни
function getCurrentTask(event) {
  // отримати карент таску
  currentTask = event.value;
}

// редагування і збереження в локстор зі змінами
function editTask(event) {
  const tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  if (event.value === "") {
    // перевірка чи таска не порожня
    alert("Завдання порожнє!!!");
    event.value = currentTask;
    return;
  }
  tasks.forEach((task) => {
    // перевірка чи вже записано
    if (task.task === event.value) {
      alert("Завдання вже записано!");
      event.value = currentTask;
      return;
    }
  });
  tasks.forEach((task) => {
    // зміна і запис
    if (task.task === currentTask) {
      task.task = event.value;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks)); // оновлення локстор
}

(function () {
  //  блок дати
  const clockContainer = document.querySelector(".clock");
  function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
})();

(function () {
  const dateContainer = document.querySelector(".date");
  function updateDat() {
    dateContainer.innerText = new Date().toLocaleDateString("ua-UA", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  setInterval(updateDat, 1000);
})();
