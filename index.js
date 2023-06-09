const createItem = () => {
    let item = document.getElementById("task").value;
    localStorage.setItem("created", item);
    let getItem = localStorage.getItem("created");
    let pendingList = document.getElementById("pending");
    let pendingTask = document.createElement("li");
    pendingList.appendChild(pendingTask);
    pendingTask.className = "pendingTask"
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
    console.log(getItem);
    
    taskContainer.appendChild(taskText);
    let editTask = document.createElement("button");
    editTask.innerText = "Edit / Save";
    editTask.className = "editButton";
    taskContainer.appendChild(editTask);
    editTask.addEventListener("click", editItem);

    function editItem() {
        if (taskText.readOnly === true) {
            taskText.readOnly = false;
        }
        else {
            taskText.readOnly = true;
        }
    }

    let deleteTask = document.createElement("button");
    deleteTask.innerText = "Delete";
    deleteTask.className = "deleteButton";
    taskContainer.appendChild(deleteTask);
    deleteTask.addEventListener("click", deleteItem);

    function deleteItem() {
        localStorage.removeItem(getItem);
        pendingTask.remove();
    }
}