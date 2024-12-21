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

// Function to delete task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
