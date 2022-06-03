var todoContainer = document.querySelector(".display-container");
var toDoItem = document.getElementById("to-do-input");

var todo = ["Clean the room", "Water plant", "Finish book"];

function loadToDos(container, arr){
    todoContainer.innerHTML = "";
    for(let i = 0; i < arr.length; i++){
        let element =   `<div class="todo-item">
        <p>${arr[i]}</p>
        <span class="span-delete" onclick="deleteToDo(${i})">
            delete
        </span>
    </div>`;

        container.innerHTML += element;
    }
}

function insertToDo(){
    todo.push(toDoItem.value);
    loadToDos(todoContainer, todo);
    toDoItem.value = "";
}

function deleteToDo(id){
    todo.splice(id, 1);
    loadToDos(todoContainer, todo);
}

loadToDos(todoContainer, todo);