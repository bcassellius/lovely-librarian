document.getElementById("currentDay").innerHTML =
moment().format('dddd, ' + 'MMMM Do YYYY');

var timeBlock = document.getElementsByClassName("time-block");
let tasks = JSON.parse(localStorage.getItem("tasks"));
const textArea = document.querySelector("textarea").value;

for (let i = 0; i < timeBlock.length; i++) {
    var now = moment().hour();
    const element = timeBlock[i];
    var parse = moment(element.id, "hA");
    if (parse.isBefore(moment(now, "h"))) {
      element.classList.add("past");
    } else if (parse.isSame(moment(), "hour")) {
      element.classList.add("present");
    } else if (parse.isAfter(now, "h")) {
      element.classList.add("future");
    } else {
      console.log("none of the above");
    }
}
  
$(".saveBtn").on("click", saveTask);
const saveTask = () => {
        const key = $(this).parent().attr('id')
        const value = $(this).siblings(".description").val();    
        const updatedTasks = {...tasks, [key]: value}
        tasks = updatedTasks
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        console.log(updatedTasks)
}

function loadTasks(){
    const updatedTasks = JSON.parse(localStorage.getItem("tasks"));
    $("#8a-text").text(updatedTasks["8a"])
    $("#9a-text").text(updatedTasks["9a"])
    $("#10a-text").text(updatedTasks["10a"])
    $("#11a-text").text(updatedTasks["11a"])
    $("#12p-text").text(updatedTasks["12p"])
    $("#1p-text").text(updatedTasks["1p"])
    $("#2p-text").text(updatedTasks["2p"])
    $("#3p-text").text(updatedTasks["3p"])
    $("#4p-text").text(updatedTasks["4p"])
    $("#5p-text").text(updatedTasks["5p"])

    if (!tasks){
        const key = $(this).parent().attr('id')
        const value = $(this).siblings(".description").val();    
        tasks = {...tasks, [key]: value}
    } 
}

loadTasks();

export default saveTask;