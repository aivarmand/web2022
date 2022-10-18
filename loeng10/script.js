let inputElement = document.querySelector('input');
let todoListElement =document.querySelector('.todo-list');

let index = 5
let todos = [];

function toggleIsDone(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].isDone = !todos[i].isDone;
        }
    }
    renderTodos();
}

function deleteTodo(event, id) {
    event.stopPropagation();
    // need töötavad ka, selle lahenduse näitas koolitaja
    // let index = todos.findIndex(function (todo) {
    //   return todo.id = id;
    // });
    // todos.splice(index, 1);

    // või see

    // for (let i = 0; i < todos.length; i++) {
    //    if todos[i].id == id {
    //        todos.splice(i, 1);
    //    }
    //}

    let indeks = todos.map((o) => o.id).indexOf(id);    
    if (indeks > -1) { // only splice array when item is found
    todos.splice(indeks, 1); // 2nd parameter means remove one item only
    }

    renderTodos();
}

function renderTodos() {
    todoListElement.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let klassid = 'todo';
        if (todos[i].isDone) {
            klassid += ' done';
        }
        todoListElement.innerHTML += `
        <div 
            class="${klassid}"
            onclick="toggleIsDone(${todos[i].id})"
        >
            ${todos[i].text}
            <span onclick="deleteTodo(event, ${todos[i].id})">[X]</span>
        </div>`
    }
    console.log(todos);
}

inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        todos.push({
            id: index++,
            text: inputElement.value,
            isDone: false,
        });
        inputElement.value = '';
        renderTodos();
    }
});

renderTodos();