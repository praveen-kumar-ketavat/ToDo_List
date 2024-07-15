// // // let input=document.querySelector("#input");
// // // let list=document.querySelector("#todo-list");
// // // function addTask(){
// // //     if(input.value === ''){
// // //         alert("Write the task and then Add..!");
// // //     }
// // //     else{
// // //         let li=document.createElement("li");
// // //         li.innerHTML=input.value;
// // //         list.appendChild(li);
// // // //edit
// // //         let editButton = document.createElement("button");
// // //                 editButton.innerHTML = "Edit";
// // //                 editButton.onclick = function () {
// // //                     editTask(li);
// // //                 };
// // //                 li.appendChild(editButton);

// // //         let span=document.createElement("span");
// // //         span.innerHTML="\u00d7";
// // //         li.appendChild(span);

// // //         li.appendChild(li);
// // //     }
// // //     input.value='';
// // //     saveData();
// // // }
// // // list.addEventListener("click",function(e){
// // //     if(e.target.tagName === 'LI'){
// // //         e.target.classList.toggle("checked");
// // //         saveData();
// // //     }
// // //     else if(e.target.tagName === 'SPAN'){
// // //         e.target.parentElement.remove();
// // //         saveData();
// // //     }
// // // },false);

// // // //edit
// // // function editTask(taskElement) {
// // //     let newTask = prompt("Edit your task:", taskElement.firstChild.nodeValue);
// // //     if (newTask) {
// // //         taskElement.firstChild.nodeValue = newTask;
// // //         saveData();
// // //     }
// // // }

// // // function saveData(){
// // //     localStorage.setItem("data", list.innerHTML);
// // // }
// // // function showData(){
// // //     list.innerHTML=localStorage.getItem("data");
// // // }
// // // showData();








// // let input = document.querySelector("#input");
// //         let list = document.querySelector("#todo-list");
// //         let editIndex = null;

// //         function addTask() {
// //             if (input.value === '') {
// //                 alert("Write the task and then Add..!");
// //             } else {
// //                 if (editIndex !== null) {
// //                     list.children[editIndex].childNodes[0].nodeValue = input.value;
// //                     editIndex = null;
// //                 } else {
// //                     let li = document.createElement("li");
// //                     li.innerHTML = input.value;

// //                     let editButton = document.createElement("button");
// //                     editButton.innerHTML = "Edit";
// //                     editButton.onclick = function () {
// //                         editTask(li);
// //                     };
// //                     li.appendChild(editButton);

// //                     let span = document.createElement("span");
// //                     span.innerHTML = "\u00d7";
// //                     li.appendChild(span);

// //                     list.appendChild(li);
// //                 }
// //             }
// //             input.value = '';
// //             saveData();
// //         }

// //         list.addEventListener("click", function (e) {
// //             if (e.target.tagName === 'LI') {
// //                 e.target.classList.toggle("checked");
// //                 saveData();
// //             } else if (e.target.tagName === 'SPAN') {
// //                 e.target.parentElement.remove();
// //                 saveData();
// //             }
// //         }, false);

// //         function editTask(taskElement) {
// //             input.value = taskElement.childNodes[0].nodeValue;
// //             editIndex = Array.from(taskElement.parentElement.children).indexOf(taskElement);
// //         }

// //         function saveData() {
// //             localStorage.setItem("data", list.innerHTML);
// //         }

// //         function showData() {
// //             list.innerHTML = localStorage.getItem("data");
// //             Array.from(list.children).forEach((li) => {
// //                 let editButton = document.createElement("button");
// //                 editButton.innerHTML = "Edit";
// //                 editButton.onclick = function () {
// //                     editTask(li);
// //                 };
// //                 li.appendChild(editButton);

// //                 let span = document.createElement("span");
// //                 span.innerHTML = "\u00d7";
// //                 li.appendChild(span);
// //             });
// //         }

// //         showData();




// let input = document.querySelector("#input");
// let list = document.querySelector("#todo-list");
// let editIndex = null;

// function addTask() {
//     if (input.value === '') {
//         alert("Write the task and then Add..!");
//     } else {
//         if (editIndex !== null) {
//             list.children[editIndex].childNodes[0].nodeValue = input.value;
//             editIndex = null;
//         } else {
//             let li = document.createElement("li");
//             li.innerHTML = input.value;

//             let editButton = document.createElement("button");
//             editButton.innerHTML = "Edit";
//             editButton.onclick = function () {
//                 editTask(li);
//             };
//             li.appendChild(editButton);

//             let span = document.createElement("span");
//             span.innerHTML = "\u00d7";
//             li.appendChild(span);

//             list.appendChild(li);
//         }
//     }
//     input.value = '';
//     saveData();
// }

// list.addEventListener("click", function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function editTask(taskElement) {
//     input.value = taskElement.childNodes[0].nodeValue;
//     editIndex = Array.from(taskElement.parentElement.children).indexOf(taskElement);
// }

// function saveData() {
//     localStorage.setItem("data", list.innerHTML);
// }

// function showData() {
//     list.innerHTML = localStorage.getItem("data");
//     Array.from(list.children).forEach((li) => {
//         if (!li.querySelector("button")) {
//             let editButton = document.createElement("button");
//             editButton.innerHTML = "Edit";
//             editButton.onclick = function () {
//                 editTask(li);
//             };
//             li.appendChild(editButton);

//             let span = document.createElement("span");
//             span.innerHTML = "\u00d7";
//             li.appendChild(span);
//         }
//     });
// }

// showData();


let input = document.querySelector("#input");
let list = document.querySelector("#todo-list");
let editIndex = null;

function addTask() {
    if (input.value === '') {
        alert("Write the task and then Add..!");
    } else {
        if (editIndex !== null) {
            list.children[editIndex].childNodes[0].nodeValue = input.value;
            editIndex = null;
        } else {
            let li = document.createElement("li");
            li.innerHTML = input.value;

            let editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            editButton.onclick = function () {
                editTask(li);
            };
            li.appendChild(editButton);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            list.appendChild(li);
        }
    }
    input.value = '';
    saveData();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function editTask(taskElement) {
    input.value = taskElement.childNodes[0].nodeValue;
    editIndex = Array.from(taskElement.parentElement.children).indexOf(taskElement);
}

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
    Array.from(list.children).forEach((li) => {
        let editButton = li.querySelector("button");
        let span = li.querySelector("span");

        if (!editButton) {
            editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            li.appendChild(editButton);
        }
        if (!span) {
            span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }

        editButton.onclick = function () {
            editTask(li);
        };
        span.onclick = function () {
            li.remove();
            saveData();
        };
    });
}

showData();
