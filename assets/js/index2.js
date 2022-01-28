// function createTask() {
//     let uValue = document.getElementById("user-input").value;
//     let UL = document.querySelector("#ulContent");
//     let LI = document.createElement("li");
//     let liText = document.createTextNode(uValue);

//     if (uValue == "") {
//         alert("Please write something")
//     } else {
//         UL.appendChild(LI);
//         LI.append(liText);
//         console.log(uValue);
//     }
// }
let val = document.getElementById("user-input").value;
let arr = {
  id: 0,
  name: val,
  gender: "male"  
};

function createTask() {
    let inp = document.getElementById("user-input").value;
    console.log(inp);
}
