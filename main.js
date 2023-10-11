(()=>{"use strict";function e(e){const n=document.createElement("div");function d(e,t){let n=document.createElement("button");return n.classList.add("project-tile"),n.dataset.index=t,n.textContent=e.name,n}n.classList.add("project-container");for(let t=0;t<e.length;t++)n.appendChild(d(e[t],t));return function(e){e.addEventListener("click",(()=>{o.changeCurrentProject(event.target.dataset.index),document.querySelector(".todo-container").remove(),document.querySelector("#content").appendChild(t(o.accessToDos()))}))}(n),n}function t(e){const t=document.createElement("div");function n(e,t){let n=document.createElement("div");n.classList.add("task");let d=document.createElement("div");d.textContent=e.title;let c=document.createElement("div");c.textContent=e.description,n.dataset.index=t;let l=document.createElement("div");l.textContent=e.date;let a=document.createElement("button");a.textContent="delete",a.classList.add="delete-btn",function(e){e.addEventListener("click",(()=>{o.deleteTask(e.parentNode.dataset.index),e.parentNode.remove()}))}(a);let r=document.createElement("p"),i=document.createElement("label"),u=document.createElement("input");return u.setAttribute("id","complete-btn"),u.setAttribute("type","checkbox"),u.setAttribute("name","complete-btn"),r.appendChild(i),r.appendChild(u),n.appendChild(d),n.appendChild(c),n.appendChild(l),n.appendChild(a),n.appendChild(r),n}t.classList.add("todo-container");for(let o=0;o<e.length;o++)t.appendChild(n(e[o],o));return t}function n(){const n=document.createElement("div");n.classList.add("header"),n.textContent="//TODO";const d=document.createElement("div"),c=document.createElement("button");c.classList.add("add-new-project"),c.textContent="+project",c.addEventListener("click",(()=>{!function(t){const n=document.createElement("dialog"),d=document.createElement("form"),c=document.createElement("p"),l=document.createElement("label");l.textContent="Title ";let a=document.createElement("input");a.setAttribute("id","title"),a.type="text",a.setAttribute("name","title"),c.appendChild(l),c.appendChild(a);let r=document.createElement("p"),i=document.createElement("input");i.value="submit",i.setAttribute("type","submit"),i.setAttribute("method","POST"),r.appendChild(i),d.appendChild(c),d.appendChild(r),d.addEventListener("submit",(function(t){var d;t.preventDefault(),n.close(),d=a.value,o.addNewProject(d),document.querySelector(".project-container").remove(),document.querySelector("#content").insertBefore(e(o.accessToDoList()),document.querySelector(".todo-container"))})),n.appendChild(d),document.body.appendChild(n),n.showModal()}()})),d.appendChild(c);const l=document.createElement("button");l.classList.add("add-new-task"),l.textContent="+task",l.addEventListener("click",(()=>{!function(e){const n=document.createElement("dialog"),d=document.createElement("form"),c=document.createElement("p"),l=document.createElement("label");l.textContent="Title ";let a=document.createElement("input");a.setAttribute("id","title"),a.type="text",a.setAttribute("name","title"),c.appendChild(l),c.appendChild(a);let r=document.createElement("p"),i=document.createElement("label");i.textContent="Description ";let u=document.createElement("input");u.setAttribute("id","description"),u.setAttribute("type","text"),u.setAttribute("name","description"),r.appendChild(i),r.appendChild(u);let s=document.createElement("p"),p=document.createElement("label");p.textContent="Due Date  ";let m=document.createElement("input");m.setAttribute("id","date"),m.setAttribute("type","date"),m.setAttribute("name","date"),s.appendChild(p),s.appendChild(m);let h=document.createElement("p"),C=document.createElement("input");C.value="submit",C.setAttribute("type","submit"),C.setAttribute("method","POST"),h.appendChild(C),d.appendChild(c),d.appendChild(s),d.appendChild(r),d.appendChild(h),d.addEventListener("submit",(function(e){var d,c,l;e.preventDefault(),n.close(),d=a.value,c=u.value,l=m.value,console.log(d),o.addNewToDo(d,l,c),document.querySelector(".todo-container").remove(),document.querySelector("#content").appendChild(t(o.accessToDos()))})),n.appendChild(d),document.body.appendChild(n),n.showModal()}()})),d.appendChild(l);const a=document.createElement("button");return a.classList.add("see-all-todos"),a.textContent="All ToDos",function(e){e.addEventListener("click",(()=>{document.querySelector(".todo-container").remove(),document.querySelector("#content").appendChild(t(o.returnAllTodos()))}))}(a),d.appendChild(a),n.appendChild(d),n}const o=new function(){let e=0,t=[];return{addNewToDo:function(n,o,d){t[e].projectTodos.push(function(e,t,n,o,d){return{title:e,date:t,description:n,project:"home",checked:!1}}(n,o,d))},addNewProject:function(e){t.push(function(e){return{name:e,projectTodos:[]}}(e))},changeCurrentProject:function(t){e=t},accessCurrentProject:function(){return e},accessToDos:function(){return t[e].projectTodos},deleteTask:function(n){console.log(t[e].projectTodos),console.log(n),t[e].projectTodos.splice(n,n+1),console.log(t[e].projectTodos)},accessToDoList:function(){return t},returnAllTodos:function(){let e=[];for(let n=0;n<t.length;n++){console.log(t[n].projectTodos);for(let o=0;o<t[n].projectTodos.length;o++)e.push(t[n].projectTodos[o])}return e}}},d=document.querySelector("#content");window.addEventListener("load",(()=>{d.innerHTML="",o.changeCurrentProject(0),o.addNewProject("home"),d.appendChild(n()),d.appendChild(e(o.accessToDoList())),d.appendChild(t(o.accessToDos()))}))})();