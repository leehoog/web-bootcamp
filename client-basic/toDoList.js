function getTasksFromLocalstorage() {
    return JSON.parse(localStorage.getItem("tasks")) || []
}

function handleSubmit() {
    const taskName = document.getElementById("taskInput").value

    const oldValues = getTasksFromLocalstorage()
    const date = new Date();
    const newId = Math.floor(date.getTime() / 1000);

    const newTask = {
        taskName,
        id: newId
    }



    // Asign the new state to variable
    const newValues = oldValues.concat(newTask)


    renderTask(newTask)

    // Push new state to localStorage
    localStorage.setItem("tasks", JSON.stringify(newValues))
}

function deleteTask(id) {
    console.log(id)
    const element = document.getElementById(id);
    element.remove();
    const oldValues = getTasksFromLocalstorage()
    const newValues = oldValues.filter((oldTask) => {
        console.log(oldTask)

        return oldTask.id !== id

    })
    console.log("New value", newValues)
    localStorage.setItem("tasks", JSON.stringify(newValues))        
}

function renderTask(newTask) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="taskItem" id="task-${newTask.id}">
            <p>${newTask.taskName}</p>
            <button onclick="deleteTask('task-${newTask.id}')">Delete</button>
        </div>
    `
    const mainWrapper = document.getElementById("taskContainer");
    mainWrapper.appendChild(div)
}

function renderLocalstorageTask() {
    const oldValues = getTasksFromLocalstorage()

    if (oldValues.length) {
        for (let i = 0; i < oldValues.length; i++) {
            console.log("i", oldValues[i])
            renderTask(oldValues[i])
        }

    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    console.log("Website ready!")

    renderLocalstorageTask()
});

