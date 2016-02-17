Backendless.initApp("FF59D12A-365F-8A49-FFB6-E14857A82F00","1DCF21F5-7F54-728C-FFB6-D7B0FEB58D00","v1");
// Event listeners
$(document).on("pageshow","#pageone", onPageShow);
$(document).on("click", "#addTaskButton", onAddTask);

function onPageShow() {
console.log("page shown");
updateList();
}

//define a task object (model)
 function Tasks() {
 this.Task = "";
 //you could add more parameters to you tasks here
}

function onAddTask() {
console.log("add task button clicked");
var tasktext = $('#addTaskText').val();
var newTask = new Tasks();
newTask.Task = tasktext;
Backendless.Persistence.of( Tasks ).save(newTask);
updateList();
}

function updateList() {
//run a query 
var tasks = Backendless.Persistence.of( Tasks ).find().data;
// check using alert - alert(tasks[1].Task);
//wipe the list clean
$('#taskList').empty();
//add each task
for (var i = 0; i < tasks.length; i++) {
 $('#taskList').append("<li>"+tasks[i].Task+"</li>");
}
//refresh the listview
$('#taskList').listview('refresh');
}