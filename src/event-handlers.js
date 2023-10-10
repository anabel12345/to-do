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
            document.querySelector(".project-container").innerHTML=""
            document.querySelector(".project-container").appendChild(renderProjects(toDoManagerObject.accessToDoList()))
  
        }




        )
      
        })
}

export function addNewTodoToDOM(node){
    node.addEventListener("click",()=>{

        getInfo((title, description,date)=>{
            console.log(title)
            toDoManagerObject.addNewToDo(title, date, description)
            document.querySelector(".todo-container").innerHTML=""
            document.querySelector(".todo-container").appendChild(renderTodos(toDoManagerObject.accessToDos()))
        })
     
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



//delete button
export function deleteToDO(node){
    node.addEventListener("click",()=>{
        toDoManagerObject.deleteTask(node.parentNode.dataset.index)
        node.parentNode.remove()
    })
}