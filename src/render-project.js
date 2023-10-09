import { changeCurrentProject } from "./event-handlers";

//takes an array of project objects and returns a node 
export default function renderProjects (array){
    const node = document.createElement("div")
    node.classList.add("project-container")
    //takes a project object and returns a DOM node
    function createProject(project, index){
        let projectTile = document.createElement("button");
        projectTile.classList.add("project-tile")
        projectTile.dataset.index = index;
        projectTile.textContent = project.name
        
        return projectTile;
    }


    for(let i = 0;i<array.length;i++){
        node.appendChild(createProject(array[i],i))
    }
    console.log(node)
    changeCurrentProject(node)

    return node;

}