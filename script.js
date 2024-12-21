// Event listener for adding tasks
document.getElementById('add-task-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const descriptionInput = document.getElementById('description-input');
    
    const todoText = todoInput.value.trim();
    const descriptionText = descriptionInput.value.trim();

    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <p>${descriptionText}</p>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        document.getElementById('todo-list').appendChild(todoItem);
        todoInput.value = ''; // Clear the input fields after adding the task
        descriptionInput.value = '';
    }
});

// Function to delete task and move it to the "Deleted Tasks" section
function deleteTask(button) {
    const taskItem = button.parentElement;
    
    // Move the task to the deleted list
    document.getElementById('deleted-list').appendChild(taskItem);
    
    // Optionally, add the "deleted" class for styling (e.g., strikethrough)
    taskItem.classList.add('deleted');
}
