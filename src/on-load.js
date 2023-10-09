import header from "./render-header"
import renderProjects from "./render-project"
import renderTodos from "./render-todos"




//create layout
export default function onLoad(){
    const page = document.querySelector("#content")

    //create a home project
    toDoManager.addNewProject("home")

    //create the header
    page.appendChild(header())


    

    page.appendChild(renderProjects(toDoManager.accessToDoList()))
    page.appendChild(renderTodos(toDoManager.accessToDos()))
}