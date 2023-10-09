export default function toDoManager() {


    //current project name
      let currentProject = "home"
     let  currentProjectIndex = 0
    //array of todos - 2d array, first array is the projects
    let toDos = []


    function accessCurrentProject(){
        return currentProjectIndex
    }
    function accessToDos(){
        return toDos;
    }


    // To-do factory function
    function createToDo(title, priority, date, description, project, checked) {
        return {
            title,
            priority,
            date,
            description,
            project,
            checked
        }
    }



    //creates new todo and adds it to current project
     function addNewToDo(title, priority, date, description) {
        // console.log(createToDo(title, priority, date, description, currentProject,false))
        toDos[currentProjectIndex].projectTodos.push ((createToDo(title, priority, date, description, currentProject,false)))
       
    }



    //factory function creates new project object
    function createNewProject(name){
        let projectTodos = []
        let active=false;
        return{
            name,
            projectTodos,
            active
        }
    }



    //creates new project + adds it to todo array
     function addNewProject(name){
        toDos.push(createNewProject(name))
    }



    //changes current project
     function changeCurrentProject(index){
        currentProjectIndex = index;
    }


    //deletes tasks
    function deleteTask(index){
        toDos.splice(index, index+1)
    }
    

   
    return{
        addNewToDo,addNewProject,changeCurrentProject,accessCurrentProject,accessToDos,deleteTask
    }

}


