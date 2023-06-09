// let item = document.getElementById("task").value;

const createItem = () => {
    let item = document.getElementById("task").value;
    localStorage.setItem("created", item);
    let getItem = localStorage.getItem("created");
    let pendingList = document.getElementById("pending");
    let pendingTask = document.createElement("li");
    pendingList.appendChild(pendingTask);
    let taskContainer = document.createElement("div");
    pendingTask.appendChild(taskContainer);

    let checkCompleted = document.createElement("input");
    checkCompleted.setAttribute("type", "checkbox");
    taskContainer.appendChild(checkCompleted);

    let taskText = document.createElement("input");
    taskText.setAttribute("type", "text");
    taskText.setAttribute("value", getItem);
    taskText.readOnly = true;
    taskText.className = "taskInput"
    
    taskContainer.appendChild(taskText);
    let editTask = document.createElement("button");
    editTask.innerText = "Edit";
    editTask.className = "editButton";
    taskContainer.appendChild(editTask);
    // editTask.onclick = localStorage.removeItem(getItem);
    editTask.addEventListener("click", editInput);
    function editInput(){
        taskText.readOnly = false;
    }

    let deleteTask = document.createElement("button");
    deleteTask.innerText = "Delete";
    taskContainer.appendChild(deleteTask);
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