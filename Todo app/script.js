document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    
    taskItem.innerHTML = `
        ${taskText}
        <div class="task-actions">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        completeTask(taskItem);
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
}

function completeTask(taskItem) {
    const completedTaskList = document.getElementById('completedTaskList');
    const taskText = taskItem.childNodes[0].nodeValue.trim();
    const dateTime = new Date().toLocaleString();

    const completedTaskItem = document.createElement('li');
    completedTaskItem.innerHTML = `
        ${taskText}
        <div class="completed-info">Completed on: ${dateTime}</div>
    `;

    completedTaskList.appendChild(completedTaskItem);
    taskItem.remove();
}
