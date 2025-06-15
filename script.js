function addtask(){


    let taskinput = document.getElementById("taskInput");
    let tasktext = taskinput.value;
    
    if(tasktext === ""){
    alert("please! Enter a task ");
    return;
    }
    
    let li = document.createElement("li");
    li.textContent = tasktext;
    
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.onclick = function(){
        li.remove();
    };
    li.appendChild(deletebtn);
    document.getElementById("todo-list").appendChild(li);
    taskinput.value = "";
    
    }