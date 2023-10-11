import toDoManager from "./toDosManager"
import renderProjects from "./render-project"
import renderTodos from "./render-todos"
import header from "./render-header"
import getInfo from "./get-user-input"
import getNewProject from "./get-project-title"


export const toDoManagerObject = new toDoManager()
export const page = document.querySelector("#content")


export function addNewProjectToDOM(node){
    node.addEventListener("click",()=>{
        
        getNewProject((title)=>{
            toDoManagerObject.addNewProject(title)
            document.querySelector(".project-container").remove()
            document.querySelector("#content").insertBefore(renderProjects(toDoManagerObject.accessToDoList()), document.querySelector(".todo-container"))
  
        }

        )
      
        })
}

export function addNewTodoToDOM(node){
    node.addEventListener("click",()=>{

        getInfo((title, description,date)=>{
            console.log(title)
            toDoManagerObject.addNewToDo(title, date, description)
            
            document.querySelector(".todo-container").remove()
            document.querySelector("#content").appendChild(renderTodos(toDoManagerObject.accessToDos()))
     })
     
    })
}


export function changeCurrentProject(node){
    node.addEventListener("click",()=>{
        toDoManagerObject.changeCurrentProject(event.target.dataset.index)
        
        document.querySelector(".todo-container").remove()
        document.querySelector("#content").appendChild(renderTodos(toDoManagerObject.accessToDos()))
  
    })
}




export function seeAllToDos(node){
    node.addEventListener("click",()=>{
        document.querySelector(".todo-container").remove()
        document.querySelector("#content").appendChild(renderTodos(toDoManagerObject.returnAllTodos()))
 
    })
}


//create layout
export default function load(){
    page.innerHTML=''
    toDoManagerObject.changeCurrentProject(0)

    //create a home project
    toDoManagerObject.addNewProject("home")
    

    //create the header
    page.appendChild(header())


    

    page.appendChild(renderProjects(toDoManagerObject.accessToDoList()))
    page.appendChild(renderTodos(toDoManagerObject.accessToDos()))
}



//delete button
export function deleteToDO(node){
    node.addEventListener("click",()=>{
        toDoManagerObject.deleteTask(node.parentNode.dataset.index)
        node.parentNode.remove()
    })
}