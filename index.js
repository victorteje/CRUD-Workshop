const createItem = () => {
    let item = document.getElementById("task").value;
    console.log(item);
    localStorage.setItem("created", item);
    let pendingList = document.getElementById("pending");
    let pendingTask = document.createElement("li");
    pendingTask.innerHTML = item;
    pendingList.appendChild(pendingTask);
}

const readItem = () => {
    
}

const updateItem = () => {
    
}

const deleteItem = () => {
    
}

const editItem = () => {
    
}