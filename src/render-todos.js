import { deleteToDO } from "./event-handlers";

//takes an array of todo objects and returns a node
export default function renderTodos  (array){
    const node = document.createElement("div")
    node.classList.add("todo-container")

    //takes a todo object and returns a DOM node
    function createTodo(todo, index ){
        let todoCont = document.createElement("div");
        todoCont.classList.add("task")
        let title = document.createElement("div")
        title.textContent = todo.title
        let description = document.createElement("div")
        description.textContent=todo.description
        todoCont.dataset.index = index;


        let date = document.createElement("div")
        date.textContent = todo.date

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        deleteBtn.classList.add = "delete-btn"
        deleteToDO(deleteBtn)


        //checkbox
        let checkCont = document.createElement("p")
        let checkLabel = document.createElement("label")
        let checkBtn = document.createElement("input")
        checkBtn.setAttribute('id','complete-btn')
        checkBtn.setAttribute("type", "checkbox")
        checkBtn.setAttribute("name", "complete-btn")
        checkCont.appendChild(checkLabel)
        checkCont.appendChild(checkBtn)


      
        todoCont.appendChild(title)
        todoCont.appendChild(description)
        todoCont.appendChild(date)
        todoCont.appendChild(deleteBtn)
        todoCont.appendChild(checkCont)
        return todoCont;

    }


    for(let i = 0;i<array.length;i++){
        node.appendChild(createTodo(array[i],i))    
    }
    return node
}