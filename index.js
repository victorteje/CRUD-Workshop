// let item = document.getElementById("task").value;

const createItem = () => {
    let item = document.getElementById("task").value;
    localStorage.setItem("created", item);
    let pendingList = document.getElementById("pending");
    let pendingTask = document.createElement("li");
    pendingTask.innerHTML = item;
    pendingList.appendChild(pendingTask);
    let space = document.createTextNode(" ");
    pendingTask.appendChild(space);
    let checkCompleted = document.createElement("input");
    checkCompleted.setAttribute("type", "checkbox");
    pendingTask.appendChild(checkCompleted);
}

const readItem = () => {
    let item = document.getElementById("task").value;
    localStorage.getItem(item);
}

const updateItem = () => {
    
}

const deleteItem = () => {
    let item = document.getElementById("task").value;
    localStorage.removeItem(item);
}

const editItem = () => {
    
}