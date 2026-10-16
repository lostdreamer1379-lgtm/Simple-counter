const decreaseButton = document.getElementById('decrement');
const increaseButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const counter = document.getElementById('counter');
let count = 0;
decreaseButton.onclick = function() {
    count--;
    counter.textContent = count;
}
increaseButton.onclick =function(){
    count++;
    counter.textContent =count;
}
resetButton.onclick = function() {
    count = 0;
    counter.textContent = count;
}