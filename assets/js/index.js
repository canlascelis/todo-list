// BEGIN today's date
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const date = new Date();
options = { weekday: "short", month: "short", day: "numeric", year: "numeric" } //options for date 

let today = date.toLocaleDateString("en-US", options);        //convert date to string
let userInput = document.getElementById("user-input").value; //input from user html
console.log(today);
// END today's date

//RETRIEVE item (local storage)
// document.getElementById("li-one").innerHTML = localStorage.getItem("lastname")
// let savedTodo = localStorage.getItem("Todo");
// document.getElementById("ulContent").innerHTML = localStorage.getItem("Todo");

addButton.addEventListener('click', () => { 
    let userInput = document.getElementById("user-input").value;
    let taskList = JSON.parse(localStorage.getItem("Tasks")) || []; //parse or empty array

    let tasks = [
        {
         todos: userInput,
         dateCreated: today   
        }
    ];

    if (userInput == '') {
        alert("Please write something");
    } else {
        taskList.push(tasks);                                     //push tasks object 
        localStorage.setItem("Tasks", JSON.stringify(taskList)); //setitem in LS into JSON object
        alert("Successfully added!")
    }
});