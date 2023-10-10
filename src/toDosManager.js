export default function toDoManager() {
    //current project name
      let currentProject = "home";
     let  currentProjectIndex = 0;
    //array of todos - 2d array, first array is the projects
    let toDos = []


    function accessCurrentProject(){
        return currentProjectIndex
    }
    function accessToDoList(){
        return toDos;
    }
    function accessToDos(){
        return toDos[currentProjectIndex].projectTodos;
    }
    function returnAllTodos(){
        let arrOfToDos = []
       
        for(let i=0;i<toDos.length;i++){
            console.log(toDos[i].projectTodos)
            for(let j=0;j<toDos[i].projectTodos.length;j++){
                arrOfToDos.push(toDos[i].projectTodos[j])
            }
        }
        return arrOfToDos
    }

    // To-do factory function
    function createToDo(title, date, description, project, checked) {
        return {
            title,
            date,
            description,
            project,
            checked
        }
    }



    //creates new todo and adds it to current project
     function addNewToDo(title, date, description) {
        toDos[currentProjectIndex].projectTodos.push ((createToDo(title, date, description, currentProject,false)))
        // toDos[0].projectTodos.push ((createToDo(title, priority, date, description, currentProject,false)))
       
    }



    //factory function creates new project object
    function createNewProject(name){
        let projectTodos = []
        return{
            name,
            projectTodos,
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
        console.log(toDos[currentProjectIndex].projectTodos)
        console.log(index)
        toDos[currentProjectIndex].projectTodos.splice(index, index+1)
        console.log(toDos[currentProjectIndex].projectTodos)
        // console.log(toDos)
    }
    

   
    return{
        addNewToDo,addNewProject,changeCurrentProject,accessCurrentProject,accessToDos,deleteTask,accessToDoList,returnAllTodos
    }

}


