const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const theCount = document.getElementById("theCount");
let count=0;

increase.onclick = function(){
  count+2;
  theCount.textContent = count;
}

decrease.onclick = function(){
  count-2;
  theCount.textContent = count;
}

reset.onclick = function(){
  count = 0;
  theCount.textContent = count;
}