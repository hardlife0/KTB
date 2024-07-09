document.addEventListener('DOMContentLoaded', function() {
    let inputBox = document.getElementById('input');
    let addTodo = document.getElementById('add');
    let deleteTodo = document.getElementById('delete');
    let toDoList = document.getElementById('todolist');
  
    addTodo.addEventListener('click', function() {
      if (!inputBox.value) {
        alert('내용을 입력해주세요');
      } else {
        let listItem = document.createElement('ul');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
  
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(inputBox.value));
        toDoList.appendChild(listItem);
        inputBox.value = '';
  
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            listItem.style.textDecoration = 'line-through';
          } else {
            listItem.style.textDecoration = 'none';
          }
        });
  
        listItem.addEventListener('dblclick', function() {
          toDoList.removeChild(listItem);
        });
      }
    });
  
    deleteTodo.addEventListener('click', function() {
      let items = toDoList.getElementsByTagName('li');
      for (let i = items.length - 1; i >= 0; i--) {
        let checkbox = items[i].getElementsByTagName('input')[0];
        if (checkbox.checked) {
          toDoList.removeChild(items[i]);
        }
      }
    });
  });
  