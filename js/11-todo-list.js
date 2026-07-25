
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
console.log(todoList);
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
  console.log(todoList);
    renderTodoList();
}


  function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
      //const todo= todoList[i];
      const todoObject = todoList[i];
      // const name = todoObject.name
      // const dueDate = todoObject.dueDate

      // const {name} = todoObject;
      // const {dueDate} = todoObject;

      const {name,dueDate} = todoObject;

      // const html = `
      //   <p>
      //     ${todo} 
      //     <button onclick="
      //       todoList.splice(${i}, 1);
      //       renderTodoList();
      //     ">Delete</button> 
      //   </p>
      // `;
      
      // const html = `
      //   <p>
      //     ${name} ${dueDate} 
      //     <button onclick="
      //       todoList.splice(${i}, 1);
      //       renderTodoList();
      //     ">Delete</button> 
      //   </p>
      // `;
      
      const html = `
        <div>${name}</div>
        <div>${dueDate} </div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button> 

      `;

      todoListHtml += html;
    }

    console.log(todoListHtml);

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHtml;
  }
  
renderTodoList();

