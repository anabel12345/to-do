    //header
    const header = document.createElement("div")
    header.classList.add("header")
    header.textContent = "TODO"



    //sidebar.
    const sidebar = document.createElement("div")
    sidebar.classList.add("sidebar")
    //project cotnainer
    const projectCont = document.createElement("div")
    projectCont.classList.add("project-container")
    sidebar.appendChild(projectCont)

    //button appended to sidebar to add new project
    const btnAdd = document.createElement("button")
    btnAdd.classList.add("add-new-project")
    btnAdd.textContent="+"
    sidebar.appendChild(btnAdd)
    

    //main content
    const main = document.createElement("div")
    main.classList.add("main")
    //tasks
    const taskCont = document.createElement("div")
    taskCont.classList.add("task-container")
    main.appendChild(taskCont)
    //button to add new task
    const btnAddTask = document.createElement("button")
    btnAddTask.classList.add("add-new-task")
    btnAddTask.textContent="+"
    main.appendChild(btnAddTask)


    content.appendChild(header)
    content.appendChild(sidebar)
    content.appendChild(main)
    return content

}