const inputBox = document.getElementById("input_box");
const tasksList = document.getElementById("tasks_list");


function addTask()
{
    if(inputBox.value === "")
    {
        alert("You Must Write Any Thing");
        
    }else
    {
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        tasksList.appendChild(task);
        let x = document.createElement("span");
        x.innerHTML = "\u00d7";
        task.appendChild(x);
        saveData();
        
    }
    inputBox.value = "";
}

tasksList.addEventListener("click", function(e){
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false)

function saveData()
{
    localStorage.setItem("data", tasksList.innerHTML);
}

function getData()
{
    tasksList.innerHTML = localStorage.getItem("data");
}
getData();