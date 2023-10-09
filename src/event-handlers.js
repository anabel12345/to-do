import toDoManager from "./toDosManager"
import renderProjects from "./render-project"
import renderTodos from "./render-todos"



export function addNewProjectToDOM(node){
    node.addEventListener("click",()=>{
        let title = prompt("What is the project called?");
        toDoManager.addNewProject(title)
        //get array of projects
        renderProjects(toDoManager.accessToDos())
    })
}

export function addNewTodoToDOM(node){
    node.addEventListener("click",()=>{
        let title = prompt("What is the task called?");
        let priority = prompt("What is the priority of the task?");
        let date = prompt("What's the due date?")
        let description = prompt("Any additional info?")
        toDoManager.addNewToDo(title,priority, date, description)
        renderTodos(toDoManagerObject.accessToDoList())
    
    })
}


