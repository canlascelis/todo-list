// BEGIN today's date
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const date = new Date();
options = { weekday: "short", month: "short", day: "numeric", year: "numeric" } //options for date 

let today = date.toLocaleDateString("en-US", options);        //convert date to string
let userInput = document.getElementById("user-input").value; //input from user html
console.log(today);
// END today's date

class Storage {
    constructor(){
        let userInput = document.getElementById("user-input").value;
        this.todo = userInput;
        this.dateCreated = today;
    }

    createTask() {
        let store = new Storage();
        let taskList = JSON.parse(localStorage.getItem("Tasks")) || [];
        taskList.push(store);
        localStorage.setItem("Tasks", JSON.stringify(taskList));
    }

    removeTask() {

    }
}

addButton.addEventListener('click', () => { 
    let userInput = document.getElementById("user-input").value;
    let storage = new Storage();

   if (userInput == '') {
       alert("Please write something!")
   } else {
    storage.createTask();
   }
});

console.log(Storage);