const body = document.querySelector("body");
const para = document.createElement("a");
para.innerText = "This is purely for testing";
body.appendChild(para);
console.log(body.innerText);
