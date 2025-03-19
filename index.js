const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const theCount = document.getElementById("theCount");
let count=0;

increaseBtn.onclick = function(){
  count++;
  theCount.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  theCount.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  theCount.textContent = count;
}