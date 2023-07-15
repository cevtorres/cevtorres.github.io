// Get page elements
const newTodoInput = document.getElementById('newTodo');
const newTodoButton = document.getElementById('newTodoButton');
const todoListDiv = document.getElementById('todoListDiv');
const newTodoDate = document.getElementById('newTodoDate');

let todoList = []

const todoHTML = `
<div class='row'>
    <div class='col-auto'>
        <button onclick='deleteTodo([idNumber])'>X</button>
    </div>
    <div class='col-auto'>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" onclick='handleCheck(this, [idNumber])' [checked] value="" id="[id]">
            <label class="form-check-label" id='label-[id]' for="[id]">
                [text] ([datetime])
            </label>
        </div>
    </div>
</div>
`;

loadLocalStorage();

function loadLocalStorage() {
    if (window.localStorage) {
        if (window.localStorage.getItem('todos')){
            todoList = JSON.parse(window.localStorage.getItem('todos'));
            updateTodo();
        }
    }
}

function saveLocalStorage() {
    if (window.localStorage) {
        window.localStorage.setItem('todos', JSON.stringify(todoList));
    }
}

function addNewTodo() {
    if (newTodoInput.value == '' || newTodoDate.value == '') {
        alert("Invalid ToDo");
        return;
    }
    const newTodo = {
        text: newTodoInput.value,
        done: false,
        datetime: newTodoDate.value
    };

    todoList.push(newTodo);
    newTodoInput.value = '';
    newTodoDate.value = '';
    updateTodo();
    saveLocalStorage();
}

function updateTodo() {
    todoListDiv.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const newTodoContent = todoHTML.replaceAll('[id]', 'todo' + i).replaceAll('[idNumber]',i).replaceAll('[text]', todo.text).replaceAll('[checked]', todo.done ? 'checked' : '').replace('[datetime]', todo.datetime);
        todoListDiv.innerHTML += newTodoContent;
    }
}

function deleteTodo(todoId) {
    todoList.splice(todoId,1);
    updateTodo();
    saveLocalStorage();
}

function handleCheck(check, todoId) {
    const isChecked = check.checked;
    todoList[todoId].done = isChecked;
    saveLocalStorage();

}

// Add events to elements
newTodoInput.addEventListener('keyup', (event) => {
    if(event.key == 'Enter') {
        addNewTodo();
    }
}); 

newTodoDate.addEventListener('keyup', (event) => {
    if(event.key == 'Enter') {
        addNewTodo();
    }
}); 

newTodoButton.addEventListener('click', () => {
    addNewTodo();
}); 

