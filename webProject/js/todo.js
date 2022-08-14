const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {//button을 클릭할때 event를 얻게됨
    const li = event.target.parentElement.parentElement;//target은 button, button의 부모를 li에 저장
    console.log(li);
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(a) {
    // console.log("test", a);
    const li = document.createElement("li");
    li.id = a.id;
    li.classList.add("todo-checkbox");
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    // span.innerText = "🗑";
    li.appendChild(label);   //li의 자식으로 span만들기
    li.appendChild(span);
    label.innerText = a.text;
    toDoList.appendChild(li);

    span.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(newTodo);
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
console.log(savedToDos);
if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
}