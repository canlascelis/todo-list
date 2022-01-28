// // BEGIN today's date
// const addButton = document.getElementById("addBtn");
// const deleteButton = document.getElementById("deleteBtn");
// const date = new Date();
// options = { weekday: "short", month: "short", day: "numeric", year: "numeric" } //options for date 

// let today = date.toLocaleDateString("en-US", options);        //convert date to string
// // END today's date
// console.log(today);

// function createTask() {
//     let userInput = document.getElementById("user-input").value;
//     let taskList = JSON.parse(localStorage.getItem("Tasks")) || []; //parse named Tasks or thr empty array

//     var tasks = {
//          todos: userInput,
//          dateCreated: today   
//         };

//     if (userInput == '') {
//         alert("Please write something");
//     } else {
//         taskList.push(tasks);                                     //push tasks object 
//         localStorage.setItem("Tasks", JSON.stringify(taskList)); //setitem in LS into JSON object
//         alert("Successfully added!")
//     }
// };

window.addEventListener('load', () => {
    const addButton = document.getElementById("addBtn");
    const deleteButton = document.getElementById("deleteBtn");
    const date = new Date();
    options = { weekday: "short", month: "short", day: "numeric", year: "numeric" }

    let today = date.toLocaleDateString("en-US", options);
    // END today's date

    let items = JSON.stringify(localStorage.getItem("Tasks"));
    console.log(items)
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        let taskList = JSON.parse(localStorage.getItem("Tasks")) || [];
        let userInput = document.getElementById("user-input").value;
        let UL = document.querySelector("#ulContent");
        let LI = document.createElement("li");
        let text = document.createTextNode(userInput);

        let tasks = {
            todos: userInput,
            dateCreated: today
        };

        if (userInput == '') {
            alert("Please write something");
        } else {
            UL.appendChild(LI);
            LI.appendChild(text);
            taskList.push(tasks);
            localStorage.setItem("Tasks", JSON.stringify(taskList));
            alert("Successfully added!");
        }
    });
});