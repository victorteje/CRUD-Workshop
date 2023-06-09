// let item = document.getElementById("task").value;

const createItem = () => {
    let item = document.getElementById("task").value;
    localStorage.setItem("created", item);
    let pendingList = document.getElementById("pending");
    let pendingTask = document.createElement("li");
    pendingList.appendChild(pendingTask);
    let taskContainer = document.createElement("div");
    pendingTask.appendChild(taskContainer);
    let checkCompleted = document.createElement("input");
    checkCompleted.setAttribute("type", "checkbox");
    taskContainer.appendChild(checkCompleted);
    let taskText = document.createElement("p");
    taskText.innerHTML = item;
    taskContainer.appendChild(taskText);
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    taskContainer.appendChild(editButton);
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    taskContainer.appendChild(deleteButton);
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