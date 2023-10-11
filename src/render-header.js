import { addNewProjectToDOM, addNewTodoToDOM, seeAllToDos } from "./event-handlers"

export default function header(){
    const header = document.createElement("div")
    header.classList.add("header")
    header.textContent = "//TODO"


  //buttons container
  const btnCont = document.createElement("div")


    //button appended to header to add new project
    const btnAddProject = document.createElement("button")
    btnAddProject.classList.add("add-new-project")
    btnAddProject.textContent="+project"
    //add event listener
    addNewProjectToDOM(btnAddProject)
    
    btnCont.appendChild(btnAddProject)



    //button to add new task
    const btnAddTask = document.createElement("button")
    btnAddTask.classList.add("add-new-task")
    btnAddTask.textContent="+task"
    addNewTodoToDOM(btnAddTask)
    btnCont.appendChild(btnAddTask)



      //button to view all todos
      const btnAllTodos = document.createElement("button")
      btnAllTodos.classList.add("see-all-todos")
      btnAllTodos.textContent="All ToDos"
      seeAllToDos(btnAllTodos)
      btnCont.appendChild(btnAllTodos)



      header.appendChild(btnCont)
    return header;
}