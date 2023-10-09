//takes an array of project objects and returns a node 
export default function renderProjects (array){
    const node = document.createElement("div")
    //takes a project object and returns a DOM node
    function createProject(project){
        let projectTile = document.createElement("button");
        projectTile.classList.add("project-tile")
       
        projectTile.textContent = project.name
        
        return projectTile;
    }


    for(let i = 0;i<array.length;i++){
        node.appendChild(createProject(array[i]))
    }

    return node;

}