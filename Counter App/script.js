 // Get the counter element and buttons
const countEl = document.getElementById("count");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");

// Set the initial count
let count = 0;

// Add event listeners to buttons
addBtn.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});

subtractBtn.addEventListener("click", () => {
  count--;
  countEl.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countEl.innerText = count;
});


 // second method

//  addBtn.addEventListener("click", () => {
//    counter += 1;
//    counterEl.textContent = counter;
//  });

//  subtractBtn.addEventListener("click", () => {
//    counter -= 1;
//    counterEl.textContent = counter;
//  });

//  resetBtn.addEventListener("click", () => {
//    counter = 0;
//    counterEl.textContent = counter;
//  });



