const todoInput = document.querySelector('.todo');
const btnAdd = document.querySelector('.btnAdd');
const container = document.querySelector('.container');

const Creation = function (element, className) {
    const ele = document.createElement(element);
    ele.classList.add(className);
    return ele;
}

const AddItem = function () {
    const taskDiv = Creation('div', 'task-div');
    const checkbox = Creation('input', "tick");
    checkbox.type = 'checkbox';
    const task = Creation('div', 'task');
    const btnEdit = Creation('button', 'btnEdit');
    btnEdit.innerText = "Edit";
    const btnDel = Creation('button', 'btnDel');
    btnDel.innerText = "Delete";
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(task);
    taskDiv.appendChild(btnEdit);
    taskDiv.appendChild(btnDel);
    return taskDiv;
}

let val = "";

todoInput.addEventListener('input', (e) => {
    val = e.target.value;

})

btnAdd.addEventListener('click', () => {
    const newTask = AddItem();
    if(val.length < 50){
        newTask.childNodes[1].innerText = val;
        container.appendChild(newTask);
        todoInput.value = "";
    }else{
        newTask.childNodes[1].innerText = "Todo is Too long remove it & add short todos";
        container.appendChild(newTask);
        todoInput.value = "";
    }

    newTask.childNodes[0].addEventListener('click', () => {
        if (newTask.childNodes[0].checked) {
             newTask.childNodes[1].style.textDecoration = 'line-through';
             newTask.childNodes[1].style.color = 'green';
        }else{
            newTask.childNodes[1].style.textDecoration = 'none';  
            newTask.childNodes[1].style.color = 'black'; 
        }
    });

    newTask.childNodes[2].addEventListener('click', () => {
        const taskDiv = newTask.childNodes[1];
        taskDiv.contentEditable = true;
        taskDiv.focus();

        taskDiv.addEventListener(('keydown'), (e) => {
            if (e.key == 'Enter') {
                e.preventDefault();
                taskDiv.contentEditable = false;
            }
        })

    })
    newTask.childNodes[3].addEventListener('click', () => {
        newTask.remove();
    });
})
