import toDoManager from "./toDosManager"
import renderProjects from "./render-project"
import renderTodos from "./render-todos"
import header from "./render-header"

export const toDoManagerObject = new toDoManager()
const page = document.querySelector("#content")


export function addNewProjectToDOM(node){
    node.addEventListener("click",()=>{
        
        let title = prompt("What is the project called?");
       
        toDoManagerObject.addNewProject(title)
        document.querySelector(".project-container").innerHTML=""
        document.querySelector(".project-container").appendChild(renderProjects(toDoManagerObject.accessToDoList()))
  
        })
}

export function addNewTodoToDOM(node){
    node.addEventListener("click",()=>{
        let title = prompt("What is the task called?");
        let priority = prompt("What is the priority of the task?");
        let date = prompt("What's the due date?")
        let description = prompt("Any additional info?")
        toDoManagerObject.addNewToDo(title,priority, date, description)
        document.querySelector(".todo-container").innerHTML=""
        document.querySelector(".todo-container").appendChild(renderTodos(toDoManagerObject.accessToDos()))
  
        
        
        
    
    })
}


export function changeCurrentProject(node){
    node.addEventListener("click",()=>{
        toDoManagerObject.changeCurrentProject(event.target.dataset.index)
        
        document.querySelector(".todo-container").innerHTML=""
        document.querySelector(".todo-container").appendChild(renderTodos(toDoManagerObject.accessToDos()))
  
    })
}




export function seeAllToDos(node){
    node.addEventListener("click",()=>{
        
        document.querySelector(".todo-container").innerHTML=""
        document.querySelector(".todo-container").appendChild(renderTodos(toDoManagerObject.returnAllTodos()))
  
    })
}


//create layout
export default function load(){
    page.innerHTML=''
    

    //create a home project
    toDoManagerObject.addNewProject("home")
    

    //create the header
    page.appendChild(header())


    

    page.appendChild(renderProjects(toDoManagerObject.accessToDoList()))
    page.appendChild(renderTodos(toDoManagerObject.accessToDos()))
}
