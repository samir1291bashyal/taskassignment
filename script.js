document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const deadline = document.getElementById('deadline').value;
        const priority = document.getElementById('priority').value;

        if (title.trim() === '' || description.trim() === '' || deadline.trim() === '' || priority.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Deadline:</strong> ${deadline}</p>
            <p><strong>Priority:</strong> ${priority}</p>
            <p>${description}</p>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(task);

        taskForm.reset();
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
