// BEGIN today's date
const addButton = document.getElementById("addBtn");
const date = new Date();
options = { weekday: "short", month: "short", day: "numeric", year: "numeric" } //options for date 

let today = date.toLocaleDateString("en-US", options);
console.log(today);
// END today's date

//RETRIEVE item (local storage)
// document.getElementById("li-one").innerHTML = localStorage.getItem("lastname")
// let savedTodo = localStorage.getItem("Todo");
// document.getElementById("ulContent").innerHTML = localStorage.getItem("Todo");

// function addTodo() {
//     let inputVal = document.getElementById("user-input").value;
//     let ul = document.getElementById("ulContent");
//     let li = document.createElement("li");
//     let createText = document.createTextNode(inputVal);

//     if (inputVal == "") {
//         alert("Input something")
//     } else {
//         li.appendChild(createText);
//         ul.appendChild(li);
//     }

//     console.log(inputVal);
// }

// function addTodo2() {
//     let inputVal = document.getElementById("user-input").value;
//     let id = 0;

//     let tasks = {
//         id: id,
//         todo: inputVal,
//         dateCreated: today
//     };

//     if (inputVal == "") {
//         alert("Please type something...");
//     } else {
//         // localStorage.setItem("Todo", JSON.stringify(tasks));
//         localStorage.setItem("Todo", JSON.stringify(tasks));
//         id++;
//         // tasks.push(inputVal);
//     }
// }

class Storage {
    constructor (task, id) {
        this.id = id;
        this.task = task;
        this.dateCreated = today;
    }

    // TODO: create a method that will insert the task dyanmically
    create(items) {
        let value = JSON.stringify(items);
        localStorage.setItem("Todo", value);
    }
}

// const storage = new Storage();
// storage.create;
// console.log(storage);

// function addTodo2() {
//     let userInput = document.getElementById("user-input").value;
//     let id = 0;
//     const items = new Storage(userInput, id);

//     if (userInput == '') {
//         alert("Please input something");
//     } else {
//         items.create(userInput);
//         console.log(items);
//     }
// }

addButton.addEventListener('click', () => {
    let userInput = document.getElementById("user-input").value; //input from user html
    let id = 0;
    const storage = new Storage(userInput, id);
   
    if (userInput == '') {
        alert("Please write something!")
    } else {
        console.log("storage");
    }
});