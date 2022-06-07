var todoContainer = document.querySelector(".display-container");
var toDoItem = document.getElementById("to-do-input");

function loadToDos(container){
    var data = JSON.parse(localStorage.getItem("todo"));
    console.log(data);
    container.innerHTML = "";
    
    for(let i = 0; i < data.length; i++){
        let element =   `<div class="todo-item">
        <p>${data[i]}</p>
        <span class="span-delete" onclick="deleteToDo(${i})">
            delete
        </span>
    </div>`;

        container.innerHTML += element;
    }
}

function insertToDo(){
    localStorage.setItem("ToDoItem" + Math.round(Math.random() * 100), toDoItem.value);
    toDoItem.value = "";
}

function deleteToDo(id){
    todo.splice(id, 1);
    loadToDos(todoContainer, todo);
}

loadToDos(todoContainer);