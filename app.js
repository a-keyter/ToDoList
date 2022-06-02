console.log("Connected to app.js");

var showExample = true;
var deleteExampleBut = document.getElementById("deleteButton0");

var currentTasks = function(){
    if(showExample) {
        return(document.getElementById("tasksContainer").childElementCount - 2);
    } else {
        return(document.getElementById("tasksContainer").childElementCount - 1);
    }
}

var listCount = document.getElementById("listCount");

listCount.innerText = currentTasks();

var addTaskButton = document.getElementById("addTaskButton");

var createNewTask = function () {
    console.log("Task added");

    var newTaskNumber = currentTasks() + 1;
    var newTaskText = document.getElementById("newToDoText").value;
    var newDueDate = document.getElementById("newDueDate").value;
    var newDeleteId = ("deleteButton" + newTaskNumber);

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
    taskDeleteEl.id += newDeleteId;

    taskNameEl.innerText = newTaskText;
    taskDateEl.innerText = newDueDate;
    taskDeleteEl.innerText = "X";

    
    taskContainerEl.appendChild(taskNameEl);
    taskContainerEl.appendChild(taskDateEl);
    taskContainerEl.appendChild(taskDeleteEl);

    var taskList = document.getElementById("tasksContainer");
    taskList.appendChild(taskContainerEl);

    listCount.innerText = currentTasks();

    // sets up new event listener specific to this delete item
    var deleteButtonEl = document.getElementById(newDeleteId)
    deleteButtonEl.addEventListener("click", deleteTask);
}

var deleteTask = function () {
    //find the delete button id
    var deleteId = this.id;

    //get the last digit of the id name
    var buttonNumber = deleteId.slice(-1);
    
    //set variable name for container
    var findContainerId = "taskNumber" + buttonNumber;

    //find element container
    var deleteContainerEl = document.getElementById(findContainerId);

    //delete / remove container element
    deleteContainerEl.remove();
    console.log(findContainerId + " has been deleted");

    // update list counter
    listCount.innerText = currentTasks();
};

var deleteExample = function () {
    var exampleContainer = document.getElementById("taskNumber0");
    exampleContainer.remove();
    console.log("Example has been deleted");
    showExample = false;
};

addTaskButton.addEventListener("click", createNewTask);
deleteExampleBut.addEventListener("click", deleteExample);