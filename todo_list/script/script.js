var todoContainer = document.querySelector(".display-container");
var toDoItem = document.getElementById("to-do-input");

var toDoArray = [];

function loadToDos(container){
    var data = JSON.parse(localStorage.getItem("ToDoItems"));

    for(let i = 0; i <= data; i++){
        toDoArray.push(data[i])
    }
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
        toDoArray = localStorage.getItem('ToDoItems');
        toDoArray.push(toDoItem.value)
        localStorage.setItem("ToDoItems", JSON.stringify(toDoArray));
        toDoItem.value = "";
}
/**
function deleteToDo(id){
    console.log(id);
    toDoArray.splice(id, 1);
    localStorage.setItem("ToDoItems", JSON.stringify(toDoArray));
    loadToDos(todoContainer);
} */

loadToDos(todoContainer);