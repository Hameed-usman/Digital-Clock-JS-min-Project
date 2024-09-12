// console.log("hello!");

let hours = document.getElementById("hr");
let minute = document.getElementById ("min");
let second = document.getElementById ("sec");

let currentTime = new Date();
// console.log(currentTime);

setInterval (() => {
let currentTime = new Date();
hours.innerHTML = currentTime.getHours();
minute.innerHTML = currentTime.getMinutes();
second.innerText = currentTime.getSeconds();
})




