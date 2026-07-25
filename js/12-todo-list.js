
//const todoList = [];        // Empty Array

const todoList = [{
  name: 'make dinner',
  dueDate: '20222-12-22'
}];
  // name,
  // dueDate
//   name: 'make dinner',
//   dueDate: '20222-12-22'
// }, {
//   name: 'wash dishes',
//   dueDate: '2022-12-22'
//}];        // Object Conversion
//renderTodoList();
//console.log(todoList);



document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  })

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  //  console.log(name);

  todoList.push({
    // name:name, 
    // dueDate:dueDate
    name,
    dueDate
  });

    inputElement.value='';        // to make placeholder empty

  // todo - list display
  //console.log(todoList);
    renderTodoList();
}

  
  function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach(function(todoObject, index) {
         
      const {name,dueDate} = todoObject;
      
      const html = `
        <div>${name}</div>
        <div>${dueDate} </div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button> 

      `;

      todoListHtml += html;
    });

    //console.log(todoListHtml);

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHtml;

    // Gives all the elements on he page
    //console.log(document.querySelectorAll('.js-delete-todo-button'));

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {

        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });

      });
      
  }
  
renderTodoList();

