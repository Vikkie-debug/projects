// Retrieve tasks from local storage or initialize empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks in the DOM
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask() {
    const InputField = document.getElementById('InputField');
    const description = InputField.value.trim();
    
    if (description !== '') {
        const newTask = {
            description: description,
            completed: false
        };
        tasks.push(newTask);
        InputField.value = '';
        renderTasks();
    } else {
        alert('Please enter a task description.');
    }
}

// Function to toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newDescription = prompt('Edit task:', tasks[index].description);
    if (newDescription !== null && newDescription.trim() !== '') {
        tasks[index].description = newDescription.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});
