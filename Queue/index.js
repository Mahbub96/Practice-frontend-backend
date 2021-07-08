///
const output = document.querySelector('#output');
const Push = document.querySelector('#push');
const Pop = document.querySelector('#pop');
const show_all = document.querySelector('#show-all');
const show = document.querySelector('#show');

let inp = document.querySelector("#inp");

let arr = [10];
let front = 0,back = 0;

Push.addEventListener("click",function(){
    if(inp.value){
        back %= 10;
        arr[back] = inp.value;
        back += 1;
        output.innerHTML = "push successfully!";
    }
    else {
        output.innerHTML = "push Unsuccessfull!";
    }
});

Pop.addEventListener("click",function(){
    arr[front]= null;
    front += 1;
});



////function for showing all of the list;
// show.addEventListener("click",function(){
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         show_all.innerHTML = element;
//     }
// })