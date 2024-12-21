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
            <span class="todo-text">${todoText}</span>
            <p class="todo-description">${descriptionText}</p>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
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
    const deletedList = document.getElementById('deleted-list');
    deletedList.appendChild(taskItem);

    // Optionally, add the "deleted" class for styling (e.g., strikethrough)
    taskItem.classList.add('deleted');
}

// Function to edit task
function editTask(button) {
    const taskItem = button.parentElement;
    
    // Get current task text and description
    const todoText = taskItem.querySelector('.todo-text');
    const todoDescription = taskItem.querySelector('.todo-description');
    
    // Create input fields for editing
    const todoTextInput = document.createElement('input');
    todoTextInput.value = todoText.textContent;
    const descriptionTextInput = document.createElement('textarea');
    descriptionTextInput.value = todoDescription.textContent;

    // Replace text with input fields
    taskItem.replaceChild(todoTextInput, todoText);
    taskItem.replaceChild(descriptionTextInput, todoDescription);

    // Change the Edit button to Save
    button.textContent = 'Save';
    button.setAttribute('onclick', 'saveTask(this)');
}

// Function to save edited task
function saveTask(button) {
    const taskItem = button.parentElement;
    
    // Get the updated values
    const todoTextInput = taskItem.querySelector('input');
    const descriptionTextInput = taskItem.querySelector('textarea');
    
    // Replace input fields with updated text
    const todoText = document.createElement('span');
    todoText.classList.add('todo-text');
    todoText.textContent = todoTextInput.value;
    
    const todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description');
    todoDescription.textContent = descriptionTextInput.value;
    
    taskItem.replaceChild(todoText, todoTextInput);
    taskItem.replaceChild(todoDescription, descriptionTextInput);

    // Change the button back to Edit
    button.textContent = 'Edit';
    button.setAttribute('onclick', 'editTask(this)');
}
