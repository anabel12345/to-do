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


