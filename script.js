//TO DO APP
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUL = document.querySelector('#items');
let completeUL = document.querySelector('.complete-list ul');


//funtions
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox =  document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUL.appendChild(listItem);
    newTask.value = "";
    //bind the new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask);
}
let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUL.appendChild(listItem);
    bindcompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindIncompleteItems = function(taskItem, checkboxClick){
    let  checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindcompleteItems = function(taskItem, deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}


//function calling
for(let i=0; i< todoUL.children.length; i++){
    bindIncompleteItems(todoUL.children[i], completeTask);
}

for(let i=0; i< completeUL.children.length; i++){
    bindIncompleteItems(completeUL.children[i], deleteTask);
}

form.addEventListener('submit', addTask);