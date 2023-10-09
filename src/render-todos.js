//takes an array of todo objects and returns a node
export default function renderTodos  (array){
    const node = document.createElement("div")
    node.classList.add("todo-container")

    //takes a todo object and returns a DOM node
    function createTodo(todo, index){
        let todoCont = document.createElement("div");
        todoCont.classList.add("todo-cont")
        let title = document.createElement("div")
        title.textContent = todo.title
        let description = document.createElement("div")
        description.textContent=todo.description
        todoCont.dataset.index = index;

        todoCont.appendChild(title)
        todoCont.appendChild(description)
        return todoCont;

    }


    for(let i = 0;i<array.length;i++){
        node.appendChild(createTodo(array[i],i))    
    }
    return node
}