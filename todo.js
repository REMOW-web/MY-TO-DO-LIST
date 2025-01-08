document.addEventListener('DOMContentLoaded', () => {
  const newTaskInput = document.getElementById('new-task');
  const addTaskBtn = document.getElementById('add-task-btn');
  const tasksList = document.getElementById('tasks');

  addTaskBtn.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
          addTask(taskText);
          newTaskInput.value = '';
      }
  });

  tasksList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
          e.target.parentElement.remove();
      } else if (e.target.classList.contains('edit-btn')) {
          const li = e.target.parentElement;
          const taskText = li.firstChild.textContent.trim();
          newTaskInput.value = taskText;
          li.remove();
      }
  });
  
  function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      tasksList.appendChild(li);
  }
});
