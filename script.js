const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");
const increaseBtn = document.querySelector("#increase-btn");
const label = document.querySelector("#label");
let count = 0;

function increase(){
    count++;
    label.innerHTML = count
}

increaseBtn.addEventListener("click", increase);

function decrease(){
    count--;
    label.innerHTML = count
}

decreaseBtn.addEventListener("click", decrease);

function reset(){
    label.innerHTML = 0;
}

resetBtn.addEventListener("click", reset);