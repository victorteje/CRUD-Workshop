// let item = document.getElementById("task").value;

const createItem = () => {
    let item = document.getElementById("task").value;
    localStorage.setItem("created", item);
    let pendingList = document.getElementById("pending");
    let pendingTask = document.createElement("li");
    pendingTask.innerHTML = item;
    pendingList.appendChild(pendingTask);
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