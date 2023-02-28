window.onload = loadListPage; 

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault(); 
  addTask();
});

document.querySelector("#list").addEventListener("submit", (e) => {
  e.preventDefault(); 
  addList();
});

let listname = "";

document.querySelector("select").addEventListener("change", (e) => {
  listname = e.target.value;
loadList(e.target.value);
});

function loadListPage() {
  const lists = JSON.parse(localStorage.getItem("lists"));
  if (localStorage.getItem("lists") === null) return;
  const list = document.querySelector("select"); // знайшла секцію для списків
  list.innerHTML = "";
  const arrayNameList = [];//масив куди перебиратиму списки
  for (let i = 0; i < lists.length; i++) {  // перебираю весь lists
      let val = Object.values(lists[i]);
      let value = Object.values(val);
      listname = value[0];                // витягую назву списка
      if(!arrayNameList[listname]) {  // перевіряю чи може є внесений такий список
    arrayNameList.push(listname);  // якщо нема - додаю в масив
    const option = document.createElement("option"); // створюю нову li
    option.innerText = listname; // додаю значення списка
    list.insertBefore(option, list.children[0]); // додаю в список списків
      }
  }
}

function loadList(listname) {
  const lists = JSON.parse(localStorage.getItem("lists"));
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (localStorage.getItem("lists") === null) return;
  const list = document.querySelector("select");
  list.innerHTML = "";  
  tasks.filter(x => x.list == listname).forEach((task) => {    
    const li = document.createElement("option");
    li.innerHTML = listname;
    list.insertBefore(option, list.children[0]);
  });
}
 
function addList() {
  const list = document.querySelector("#listText");
  const select = document.querySelector("select");  
  if (list.value === "") {
    alert("Завдання треба записати!!!");
    return false;
  }  
  localStorage.setItem(
    "lists",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("lists") || "[]"),
      { name: list.value
       },
    ])
  );  
  const option = document.createElement("option");
  option.innerText = list.value;
  select.insertBefore(option, select.children[0]);  
  list.value = "";
}
const tasks = JSON.parse(localStorage.getItem("tasks"));


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (localStorage.getItem("tasks") === null) return;  
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
  const task = document.querySelector("#toDoTask");
  const list = document.querySelector("ul");  
  if (task.value === "") {
    alert("Завдання треба записати!!!");
    return false;
  }  
  if (document.querySelector(`#toDoTask[value="${task.value}"]`)) {
    alert("Завдання вже є!!!");
    return false;
  } 
  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      { list: listname, task: task.value, completed: false },
    ])
  ); 
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
 <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
 <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]); 
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
      tasks.splice(tasks.indexOf(task), 1); 
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}
let currentTask = null; 
function getCurrentTask(event) {  
  currentTask = event.value;
}


function editTask(event) {
  const tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  if (event.value === "") {   
    alert("Завдання порожнє!!!");
    event.value = currentTask;
    return;
  }
  tasks.forEach((task) => {    
    if (task.task === event.value) {
      alert("Завдання вже записано!");
      event.value = currentTask;
      return;
    }
  });
  tasks.forEach((task) => {    
    if (task.task === currentTask) {
      task.task = event.value;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks)); 
}
//  блок дати
(function () {  
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