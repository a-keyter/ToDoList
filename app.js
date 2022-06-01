console.log("Connected to app.js");

var currentTasks = function(){
    return(document.getElementById("tasksContainer").childElementCount - 2);
}

var listCount = document.getElementById("listCount");

listCount.innerText = currentTasks();



var addTaskButton = document.getElementById("addTaskButton");

var createNewTask = function () {
    console.log("Button Pressed");

    var newTaskNumber = currentTasks.length;
    var newTaskText = document.getElementById("newToDoText").value;
    var newDueDate = document.getElementById("newDueDate").value;
    

    var taskContainerEl = document.createElement("div");
    var taskNameEl = document.createElement("div");
    var taskDateEl = document.createElement("div");
    var taskDeleteEl = document.createElement("button");

    taskContainerEl.className += "singleTaskContainer";
    taskContainerEl.id = ("taskNumber" + newTaskNumber);
    
    taskNameEl.className += "activeTask";
    taskDateEl.className += "centerMargin dueDate";
    
    taskDeleteEl.className += "centerMargin";
    taskDeleteEl.type += "button";
    taskDeleteEl.id += ("deleteButton" + newTaskNumber);

    taskNameEl.innerText = newTaskText;
    taskDateEl.innerText = newDueDate;
    taskDeleteEl.innerText = "X";

    taskContainerEl.appendChild(taskNameEl);
    taskContainerEl.appendChild(taskDateEl);
    taskContainerEl.appendChild(taskDeleteEl);

    var taskList = document.getElementById("tasksContainer");
    taskList.appendChild(taskContainerEl);

    listCount.innerText = currentTasks();
};

addTaskButton.addEventListener("click", createNewTask);