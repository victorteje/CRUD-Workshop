const createItem = () => {
    let item = document.getElementById("task").value;
    localStorage.setItem("setItem", item);
    
    let getItem = localStorage.getItem("setItem");
    
    let pendingList = document.getElementById("pending");
    
    let pendingTask = document.createElement("li");
    pendingTask.className = "pendingTask";
    pendingList.appendChild(pendingTask);
    
    let taskContainer = document.createElement("div");
    pendingTask.appendChild(taskContainer);

    let checkCompleted = document.createElement("input");
    checkCompleted.setAttribute("type", "checkbox");
    taskContainer.appendChild(checkCompleted);

    let taskText = document.createElement("input");
    taskText.setAttribute("type", "text");
    taskText.setAttribute("value", getItem);
    taskText.readonly = true;
    taskText.className = "taskInput";
    taskContainer.appendChild(taskText);
    
    let editTask = document.createElement("button");
    editTask.innerText = "Edit / Save";
    editTask.className = "editButton";
    taskContainer.appendChild(editTask);
    editTask.addEventListener("click", editItem);

    function editItem() {
        if (taskText.readonly === true) {
            taskText.readonly = false;
            taskText.classList.remove("taskInput");
        }
        else {
            taskText.readOnly = true;
            taskText.className = "taskInput";
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

    let clearInput = document.getElementById("task");
    clearInput.value = "";
}