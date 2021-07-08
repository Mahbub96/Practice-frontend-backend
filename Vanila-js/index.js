const display = document.querySelector("#disp");
const btn = document.querySelector("#btn");

let number = 0

btn.addEventListener("click",()=>{
    number += 1;
    display.innerText = number;
})